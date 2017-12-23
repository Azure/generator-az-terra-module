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
  }

  initializing() {
    this.props = {
      name: this.options.name || this.appname
    };

    this.composeWith(require.resolve('../build'));
    this.composeWith(require.resolve('../module'));
    this.composeWith(require.resolve('../shared'));
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
  
  prompting() {
    return this._askForProjectName();
  }

  configuring() {
  }

  default() {
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
