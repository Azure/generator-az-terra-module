'use strict';

const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  writing() {
    var copyDocker = this.config.get('templateContext', 'docker');

    if(copyDocker == true) {
      this.fs.copy(
        this.templatePath('Dockerfile'),
        this.destinationPath('Dockerfile')
      );
    }

    this.fs.copy(
      this.templatePath('Gemfile'),
      this.destinationPath('Gemfile')
    );

    this.fs.copy(
      this.templatePath('Rakefile'),
      this.destinationPath('Rakefile')
    );

    this.fs.copy(
      this.templatePath('env_setup.sh'),
      this.destinationPath('env_setup.sh')
    );

    this.fs.copy(
      this.templatePath('Gopkg.lock'),
      this.destinationPath('Gopkg.lock')
    );

    this.fs.copy(
      this.templatePath('Gopkg.toml'),
      this.destinationPath('Gopkg.toml')
    );
  }
};
