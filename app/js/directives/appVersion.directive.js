angular.module('app').directive('appVersion', function appVersion() {
	return {
		restrict: 'E',
		template: '<span>{{ "%VERSION%" | interpolate  }}</span>',
		link: link
	};

	function link($scope, $element, $attrs) {
		// you can do things here if you want!
	}
});
