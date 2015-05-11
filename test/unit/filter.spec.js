'use strict';
describe("filter", function() {
	beforeEach(module("app"));
	return describe("interpolate", function() {
		beforeEach(module(function($provide) {
			$provide.constant("VERSION", "TEST_VER"); // mock the service
		}));
		return it("should replace VERSION", inject(function(interpolateFilter) {
			return expect(interpolateFilter("before %VERSION% after")).toEqual("before TEST_VER after");
		}));
	});
});
