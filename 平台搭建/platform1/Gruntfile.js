const webpackConfig = require('./webpack.config.js');
module.exports = function (grunt) {
  grunt.initConfig({
    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },
    webpack: {
      myConfig:webpackConfig
    }
  });
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-webpack');
  grunt.registerTask('default', ['karma']);
};