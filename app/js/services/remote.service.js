angular.module('app').factory('remoteService', function ($http) {
  var remote = {};
  remote.url = 'http://private-b8b73-fooooty.apiary-mock.com';  // mock url. changed from http://127.0.0.1:4000

  remote.getServiceStatus = function() {
    console.log("service hit!");
    // return {
		// 	message: "Welcome to F4 Fake API",
		// 	version: 1,
		// 	status: true
		// };
    return $http({
      method: 'POST',
      url: remote.url + '/auth'
    });
  }

    remote.getAllPlayers = function() {
        return $http({
            method: 'GET',
            url: remote.url + '/api/v1/players'
        });
    }

    remote.getPlayer = function(id){
        return $http({
            method: 'GET',
            url: remote.url + '/api/v1/players/' + id
        });
    }

  return remote;
});
