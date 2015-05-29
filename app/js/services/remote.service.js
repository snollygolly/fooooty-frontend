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

  return remote;
});
