# protractor-gulp-boilerplate Framework.
This is a boilerplate Test Automation framework with Protractorjs and gulp as Task Runner. In this project, I have used Protractorjs with jasmine2 framework and jasmine-spec-reporter as the reporting package.

# Installation Steps:
Windows:
1. Install Nodejs and NPM.
2. Install protractorjs globally as npm install -g protractor.
3. Install Gulp globally as npm install --global gulp-cli.

Mac:
1. Install XCODE developer tools.
2. Install Homebrew, using homebrew install node and NPM.
3. Using Homebrew install protractorjs and gulpjs.

# Project Overview:
  Clone this project from git and have it on your local. Navigate to this project on the command prompt and do an "npm install".

## Files and its usages:
  * Package.json and gulpfile.js are required by gulp for building and executing the tasks.
  * protractor.conf.js is the configuration files required for protractor test execution.
  * e2e.js is the executable gulp task.
  * All the other required gulp tasks are inside the gulp folder.
  * tests/e2e/ contain the executable test cases and it is configured in protractor.conf.js file.

  ## How to Execute?
On a command prompt run the webdriver-manager by providing `webdriver-manager update` and then starting the webdriver-manager by
  `webdriver-manager start`.
Open another command prompt and navigate to the project path and provide `gulp e2e --browser chrome`.
You can also run a individual test on a remote grid by providing the args as `gulp e2e --browser chrome --seleniumAddress #SeleniumHubUrl --grep #testname`.(replace the #SeleniumHubUrl and #testname with your desired values).
You can add all the protractor arguments by modifying the e2e.js in the gulp e2e tasks, to pass the required arguments to protractor.

Feel free to update this repo, by creating a pull request. For more information contact vicky.008@gmail.com.
