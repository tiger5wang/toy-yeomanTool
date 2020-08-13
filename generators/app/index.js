var Generator = require('yeoman-generator');

module.exports = class extends Generator {
	// The name `constructor` is important here
	constructor(args, opts) {
		// Calling the super constructor is important so our generator is correctly set up
		super(args, opts);
	}

	collecting() {
	    this.log('collecting')
    }

    creating() {
	    this.fs.copyTpl(
	        this.templatePath('package.json'),
            this.destinationPath('package.json'),
            {title: 'Templating with yeoman'}
        );
        this.fs.copyTpl(
            this.templatePath('createElement.js'),
            this.destinationPath('createElement.js')
        );
        this.fs.copyTpl(
            this.templatePath('animation.js'),
            this.destinationPath('animation.js')
        );
        this.fs.copyTpl(
            this.templatePath('gesture.js'),
            this.destinationPath('gesture.js')
        );
	    this.fs.copyTpl(
            this.templatePath('index.html'),
            this.destinationPath('src/index.html'),
        );
        this.fs.copyTpl(
            this.templatePath('main.test.js'),
            this.destinationPath('test/main.test.js'),
        );
        this.fs.copyTpl(
            this.templatePath('webpack.config.js'),
            this.destinationPath('webpack.config.js'),
        );
        this.fs.copyTpl(
            this.templatePath('.nycrc'),
            this.destinationPath('.nycrc'),
        );
        this.fs.copyTpl(
            this.templatePath('.babelrc'),
            this.destinationPath('.babelrc'),
        );
        this.npmInstall([
            'webpack',
            'webpack-cli',
            'webpack-dev-server',
            'html-webpack-plugin',
            'babel-loader',
            '@babel/core',
            '@babel/preset-env',
            '@babel/plugin-transform-react-jsx',
            'mocha',
            'nyc',
            '@babel/register',
            '@istanbuljs/nyc-config-babel',
            'babel-plugin-istanbul'
        ], {'save-dev': true})
    }
};
