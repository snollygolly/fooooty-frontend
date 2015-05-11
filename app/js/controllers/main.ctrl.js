angular.module('app').controller('MainCtrl', function MainCtrl($scope, $http) {
	var main = this; // this == $scope because we use the controllerAs definition

	main.greet = greet;

	main.test = function(){
		console.log("test hit");
		return "testtest";
	};

	/*** Function definitions ***/
	function greet() {
		console.log("got greet!");
		// var responsePromise = $http.get("http://127.0.0.1:4000/auth");
		//
	  // responsePromise.success(function(data, status, headers, config) {
	  //     console.log(data);
	  // });
	  // responsePromise.error(function(data, status, headers, config) {
	  //     console.log("ajax failed!");
	  // });
		return "unknown";
	};

});
