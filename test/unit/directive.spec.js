'use strict';
describe("directives", function() {
	beforeEach(module("app"));
	return describe("app-version", function() {
		return it("should print current version", function() {
			module(function($provide) {
				$provide.constant("VERSION", "TEST_VER"); // mock the constant
			});
			return inject(function($compile, $rootScope) {
				var element = $compile("<app-version></app-version>")($rootScope);
				// fire all the watches, for the scope expression '{{ "%VERSION%" | interpolate  }}' to be will be evaluated
				$rootScope.$digest();
				return expect(element.text()).toEqual("TEST_VER");
			});
		});
	});
});
