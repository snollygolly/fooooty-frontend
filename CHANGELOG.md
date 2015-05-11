#0.7.0 (08 January 2015)
* All libs have been updated
* Using ng-annotate to simplify the angular code
* Using an .editorconfig file to keep your coding style consistent, don't forget to add an Editor Config plugin to your IDE (all majors IDEs are supported)
* ES6 is now supported! We use Traceur because of its AtScript support (6to5 won't support AtScript for now)
* Using Autoprefixer to simplify the CSS code, you don't have to worry about vendor prefixes anymore!
* We now use the default brunch server
* **breaking change** I activated the HTML5 mode for Angular URLs, because it's 2015 and your server should support this (don't worry it will switch to not-HTML5 mode for IE9 automatically). If you still use a prehistoric server you can disable it in app.js.

# 0.6.0 (02 November 2014)
* Update to Angular 1.3
* All libs have been updated, config & server have been updated accordingly.
* Using browser-sync-brunch instead of auto-reload-brunch

# 0.5.0 (30 April 2014)
* **breaking change** IE8 is no longer supported by angular, this seed has been updated accordingly. Support is now IE9+
* New versions of angular, jquery & other libs
* Protractor is now used for e2e tests
* Npm scripts are now used instead of .bat & .sh scripts, check the README.md or package.json files for the list of commands
* Lodash has been added to the vendor files

# 0.4.1 (16 March 2014)
* New version of angular, last one supporting IE8, new releases will only support IE9+
* Node-sass has been updated and we can use the official twitter bootstrap sass port from now on

# 0.4.0 (23 February 2014)
* Uses node-sass when possible (no compass) for much faster compilation with no dependency on ruby gems
* Use Bourbon instead of compass for the same reasons
* Updated libs
* Added ocModal & lodash
* Removed ngCookies, added ngSanitize
