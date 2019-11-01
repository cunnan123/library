module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha','chai'],
    files: [{
        pattern: 'src/*.js'
      },
      {
        pattern: 'unit/*.unit.js'
      },
    ],
    exclude: [],
    preprocessors: {
      'src/*.js': ['coverage']
    },
    reporters: ['progress','coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    }
  })
}