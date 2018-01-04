# Contributing

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

# Azure Terraform Module Generator
`generator-az-terra-module` creates base template to start a new terraform module.

![Alt Text](/doc/scaffolding.640x434.gif)

## Prerequisites
1. Install latest [Node LTS](https://nodejs.org).
2. `npm install -g yo`
3. `npm install -g generator-az-terra-module`

## Usage
```
$ yo az-terra-module
```
*Note that this template will generate files in the current directory, so be sure always to run it against a new directory*

### Setting environment (Ruby)
```
$ sudo ./tool/env_setup.sh
```

### Building module
Once the project is scaffolded, at the root folder run:
```
$ bundle install
$ rake build
```
### Running module
At the root folder run:
```
$ terraform init
$ terraform plan
$ terraform apply
```
