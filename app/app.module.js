// Declare app level module which depends on filters, and services
angular.module('app', ['ngSanitize', 'ngResource', 'ui.router', 'oc.modal'])
	.constant('VERSION', '0.7.0')
	.config(function appConfig($stateProvider, $locationProvider, $urlRouterProvider) {
		$locationProvider.hashPrefix('!');
		$urlRouterProvider.otherwise("/");

		$stateProvider.state('index', {
			url: "/", // root route
			views: {
				"mainView": {
					templateUrl: "partials/main.html",
					controller: 'MainCtrl',
					controllerAs: 'main'
				}
			}
		})
        .state('playerViewer', {
            url: "/playerViewer/:playerId",
            views: {
                "mainView":{
                    templateUrl: "partials/playerViewer.html",
                    controller: "playerProfileCtrl",
                    controllerAs: "playerProfileCtrl"
                }
            }
        });

		// /!\ Without server side support html5 must be disabled.
		return $locationProvider.html5Mode(true);
	});
