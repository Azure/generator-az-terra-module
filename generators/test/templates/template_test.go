package test

import (
	"fmt"
	"testing"

	"github.com/gruntwork-io/terratest/modules/terraform"
	"github.com/gruntwork-io/terratest/modules/test-structure"
)

func TestTerraformSshExample(t *testing.T) {
	t.Parallel()

	exampleFolder := "./fixture"

	// At the end of the test, run `terraform destroy` to clean up any resources that were created
	defer test_structure.RunTestStage(t, "teardown", func() {
		terraformOptions := test_structure.LoadTerraformOptions(t, exampleFolder)
		terraform.Destroy(t, terraformOptions)
	})

	// Deploy the example
	test_structure.RunTestStage(t, "setup", func() {
		terraformOptions := configureTerraformOptions(t, exampleFolder)

		// Save the options so later test stages can use them
		test_structure.SaveTerraformOptions(t, exampleFolder, terraformOptions)

		// This will run `terraform init` and `terraform apply` and fail the test if there are any errors
		terraform.InitAndApply(t, terraformOptions)
	})

	// Check whether the output has a length of 22
	test_structure.RunTestStage(t, "validate", func() {
		terraformOptions := test_structure.LoadTerraformOptions(t, exampleFolder)

		stringList := terraform.Output(t, terraformOptions, "permutation_string_list_test")
		fmt.Println(stringList)
		if len(stringList) != 22 {
			t.Fatal("Wrong output")
		}
	})

}

func configureTerraformOptions(t *testing.T, exampleFolder string) *terraform.Options {

	terraformOptions := &terraform.Options{
		// The path to where our Terraform code is located
		TerraformDir: exampleFolder,

		// Variables to pass to our Terraform code using -var options
		Vars: map[string]interface{}{},
	}

	return terraformOptions
}
