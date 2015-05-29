angular.module('app').directive('playerList', function playerList() {
	return {
		restrict: 'E',
		templateUrl: 'partials/playerList.html',
		scope: {
            players: '='
        }
	};
});
