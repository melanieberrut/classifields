(function (){
	"use strict";

	angular
		.module("ngClassifieds")
		.controller("newClassifiedsCtrl", function($scope, $mdSidenav, $state, $mdDialog, $timeout, classifiedsFactory){
			
			var vm = this;
			vm.closeSidebar = closeSidebar;

			// note: when going to the new state /new, the side nav is not opening
			// due the event loop
			// fix: timeout
			$timeout(function(){
				$mdSidenav("left").open();
			});

			$scope.$watch("vm.sidenavOpen", function(sidenav){
				if (sidenav === false) {

					$mdSidenav("left")
						.close()
						.then(function(){
							$state.go("classifieds");
						});
				}
			});

			function closeSidebar() {
				vm.sidenavOpen = false;
			}

		})
})();
