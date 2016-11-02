var protractor = require("gulp-protractor").protractor;
var gulp = require('gulp'),
    args = require('yargs').argv;

module.exports = function(opts) {
  opts = opts || {};

  gulp.task('e2e', function() {

    var cliArgs = [];

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
            process.env[name] = args[name];
            cliArgs[name] = args[name];
        }
    });

    process.env.test_env = args.testEnv;
    process.env.sel_grid = args.selGrid;
    //argument for the Feature toggling functionality.
    process.env.featureToggle = args.featureToggle;

    return gulp.src([])
        .pipe(protractor({
            configFile: __dirname + '/protractor.conf.js',
        }))
        .on('error', function(e) { throw e })
    });
}
