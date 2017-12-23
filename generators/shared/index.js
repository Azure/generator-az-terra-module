'use strict';

const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  writing() {
    this.fs.copy(
      this.templatePath('.editorconfig'),
      this.destinationPath('.editorconfig')
    );

    this.fs.copy(
      this.templatePath('.gitattributes'),
      this.destinationPath('.gitattributes')
    );

    this.fs.copy(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore')
    );
  }
};
