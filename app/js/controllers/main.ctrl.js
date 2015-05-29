angular.module('app').controller('MainCtrl', function MainCtrl($scope, remoteService) {
	var main = this; // this == $scope because we use the controllerAs definition

	main.serviceStatusValue = null;
    main.allPlayers = [];

	remoteService.getServiceStatus();

	remoteService.getServiceStatus().then(function (response) {
		main.serviceStatusValue = response.data.token;
		console.log(response.data.token);
		//main.sericeStatusValue = "Unknown";
			//Dig into the responde to get the relevant data
			//$scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
	});

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

    main.refreshAllPlayerList = function(){
        var DELAY = 5000;  // ms between refreshes

        console.log('refreshing player list...');
        remoteService.getAllPlayers().then(function (response){
            main.allPlayers = response.data;
            console.log(response.data);
        });
        setTimeout(main.refreshAllPlayerList, DELAY);
    }
    main.refreshAllPlayerList();


});
