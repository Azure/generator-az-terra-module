'use strict';

const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  writing() {
    this.fs.copy(
      this.templatePath('template_test.go'),
      this.destinationPath('./test/template_test.go')
    );

    this.fs.copy(
        this.templatePath('fixture/main.tf'),
        this.destinationPath('./test/fixture/main.tf')
      );

    this.fs.copy(
      this.templatePath('fixture/variables.tf'),
      this.destinationPath('./test/fixture/variables.tf')
    );

    this.fs.copy(
      this.templatePath('fixture/outputs.tf'),
      this.destinationPath('./test/fixture/outputs.tf')
    );

    this.fs.copy(
      this.templatePath('fixture/terraform.tfvars'),
      this.destinationPath('./test/fixture/terraform.tfvars')
    );
  }
};
