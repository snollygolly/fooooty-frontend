angular.module('app').controller('playerProfileCtrl', function MainCtrl($scope, remoteService, $stateParams) {
    var vm = this;
    vm.player = {};

    remoteService.getPlayer($stateParams.playerId).then(
        function(response){
            vm.player = response.data;
        }
    );
});
