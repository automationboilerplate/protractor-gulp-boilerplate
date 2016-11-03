// An example configuration file.
exports.config = {
  directConnect: false,

  // Capabilities to be passed to the webdriver instance.
   capabilities: {
     'browserName': 'chrome',
     'shardTestFiles': true,
     'maxInstances': 2,
     chromeOptions: {
       args: ['--disable-extensions', '--start-maximized']
     }
   },

  // Determine the address of the Selenium Grid server.
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine2',

  onPrepare: () => {
     var SpecReporter = require('jasmine-spec-reporter');
     // add jasmine spec reporter
     jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
  },
  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['tests/e2e/**/*.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
    showColors: true,
    // Function called to print jasmine results.
    print: function() {},
    // If set, only execute specs whose names match the pattern, which is
    // internally compiled to a RegExp.
    grep: '',
    // Inverts 'grep' matches
    invertGrep: false
  }
};
