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

## Prepare for Native Run
If you're a big fan of everything in native, please run below simple script to set up environment:
```
$ sudo ./env_setup.sh
```

## Prepare for Docker Run
If you're a big fan of Docker container, please follow below steps to quickly set up docker container:
```sh
$ docker build -t terra-mod-example .
$ docker run -it terra-mod-example /bin/sh
```

## Build module
```
$ bundle install
$ rake build
```
## Run module
```
$ terraform init
$ terraform plan
$ terraform apply
```
