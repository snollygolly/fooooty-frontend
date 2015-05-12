angular.module('app').factory('remoteService', function ($http) {
	var remote = {};

  remote.getServiceStatus = function() {
    console.log("service hit!");
    // return {
		// 	message: "Welcome to F4 Fake API",
		// 	version: 1,
		// 	status: true
		// };
    return $http({
      method: 'POST',
      url: 'http://127.0.0.1:4000/auth'
    });
  }

  return remote;
});
