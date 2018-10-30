'use strict';
const _ = require('lodash');
const extend = _.merge;
const Generator = require('yeoman-generator');
const askName = require('inquirer-npm-name');

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options);

    this.option('name', {
      type: String,
      required: false,
      desc: 'Terraform module project name'
    });

    this.option('docker', {
      type: String,
      required: false,
      default: false,
      desc: 'Include the Dockerfile'
    });
  }

  initializing() {
    this.props = {
      name: this.options.name || this.appname,
      docker: ((this.options.docker.toLowerCase() === 'true') || (this.options.docker.toLowerCase() === 'yes')).toString() 
    };

    this.composeWith(require.resolve('../build'));
    this.composeWith(require.resolve('../module'));
    this.composeWith(require.resolve('../example'));
    this.composeWith(require.resolve('../shared'));
    this.composeWith(require.resolve('../test'));
  }

  _askForProjectName() {
    return askName({
      type: 'input',
      name: 'name',
      message: 'Terraform module project Name',
      filter: _.kebabCase,
      validate(str) {
        return str.length > 0;
      }
    }, this).then(answer => {
      this.props.name = answer.name || this.props.name;
    });
  }

  _askForDockerFile() {
    return this.prompt({
      type    : 'confirm',
      name    : 'docker',
      default : false,
      message : 'Would you like to include the Docker image file?'
    }).then((answer) => {
      this.props.docker = answer.docker || this.props.docker;
    });
  }

  prompting() {
    return this._askForProjectName();
  }

  configuring() {
  }

  default() {
    return this._askForDockerFile();
  }

  storage() {
    this.config.set('templateContext', this.props.docker);
  }

  writing() {
  }

  conflicts() {
  }

  install() {
  }

  end() {
    this.log('Thanks for using module generator for terraform.');
  }
};
