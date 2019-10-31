module.exports = function (config) {
  config.set({
    basePath: '',
    // frameworks: ['jasmine'],
    frameworks: ['mocha','chai'],
    files: [{
        pattern: 'src/*.js'
      },
      {
        pattern: 'unit/*.unit.js'
      },
    ],
    exclude: [],
    preprocessors: {},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}