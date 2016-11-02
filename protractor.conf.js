// An example configuration file.
exports.config = {
  directConnect: false,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome',
    chromeOptions: {
      args: ['--disable-extensions']
    },
    'command-timeout': '30000'
    },
  // Determine the address of the Selenium Grid server.
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine2',

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
