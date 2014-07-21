'use strict';

var gutil = require('gulp-util');
var pkg = require(process.cwd() + '/package.json');
var fs = require('fs');
var path = require('path');

exports.src = {
  cwd: 'src',
  dist: 'dist',
  tmp: '.tmp',
  scripts: '{,*/}*.js',
  styles: '{,*/}*.{less,css}',
  templates: '{,*/}*.tpl.html',
  index: 'module.js'
};

exports.docs = {
  cwd: 'docs',
  dist: 'pages',
  tmp: '.tmp',
  scripts: 'scripts/**/*.js',
  styles: 'styles/*.less',
  images: 'images/{,*/}*.{jpg,png,svg}',
  index: 'index.html'
};

exports.ports = {
  docs: 9000,
  pages: 9090
};

// get main module name
exports.moduleName = fs.readdirSync(path.join(process.cwd(), exports.src.cwd))[0];

exports.banner = gutil.template('/**\n' +
  ' * <%= pkg.name %>\n' +
  ' * @version v<%= pkg.version %> - <%= today %>\n' +
  ' * @link <%= pkg.homepage %>\n' +
  ' * @author <%= pkg.author.name %> (<%= pkg.author.email %>)\n' +
  ' * @license MIT License, http://www.opensource.org/licenses/MIT\n' +
  ' */\n', {file: '', pkg: pkg, today: new Date().toISOString().substr(0, 10)});
