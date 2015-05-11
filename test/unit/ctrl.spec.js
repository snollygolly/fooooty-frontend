'use strict';
describe("controllers", function() {
	beforeEach(module("app"));
	describe("ViewCtrl", function() {
		return it("should make scope testable", inject(function($rootScope, $controller) {
			var view = $controller("ViewCtrl");
			return expect(view.content).toEqual("This is the partial for view.");
		}));
	});
});
