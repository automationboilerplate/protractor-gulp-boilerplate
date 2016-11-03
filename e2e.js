var protractor = require("gulp-protractor").protractor;
var gulp = require('gulp'),
    args = require('yargs').argv;

module.exports = function(opts) {
  opts = opts || {};

  gulp.task('e2e', function() {

    [
      'browser', //capabilities.browserName
      'baseUrl',
      'params',
      'name', //'capabilities.name
      'platform', //'capabilities.platform
      'platform-version', //'capabilities.version
      'tags', //'capabilities.tags
      'build', //'capabilities.build
      'verbose', //'jasmineNodeOpts.isVerbose
      'stackTrace', //'jasmineNodeOpts.includeStackTrace
      'grep', //'jasmineNodeOpts.grep
      'invert-grep', //'jasmineNodeOpts.invertGrep
      'explorer', //'elementExplorer
    ].forEach(function(name) {
        if(args[name]) {
          // Having the args in an environment variable to use inside the test.
            process.env[name] = args[name];
        }
    });

    return gulp.src([])
        .pipe(protractor({
            configFile: __dirname + '/protractor.conf.js',
            args: [
              '--browser', args.browser,    // Passing the args to the protractor. Add if you want any more args.
              '--baseUrl', args.baseUrl,
              '--seleniumAddress', args.seleniumAddress,
              '--maxInstances', args.maxInstances,
              '--grep', args.grep
            ]
        }))
        .on('error', function(e) { throw e })
    });
}
