angular.module('app').controller('MainCtrl', function MainCtrl($scope, remoteService) {
	var main = this; // this == $scope because we use the controllerAs definition

	main.serviceStatus = getServiceStatus;

	function getServiceStatus(){
		remoteService.getServiceStatus().success(function (response) {
			console.log(response);
        //Dig into the responde to get the relevant data
        //$scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    });
		// return {
		// 	message: "Welcome to F4 Fake API",
		// 	version: 1,
		// 	status: true
		// };
	}

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
