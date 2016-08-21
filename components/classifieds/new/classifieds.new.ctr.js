(function (){
	"use strict";

	angular
		.module("ngClassifieds")
		.controller("newClassifiedsCtrl", function($scope, $mdSidenav, $state, $mdDialog, $timeout, classifiedsFactory){
			
			var vm = this;
			vm.closeSidebar = closeSidebar;
			vm.saveClassified = saveClassified;

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

			function saveClassified(classified){
				if(classified){
					// Fake out user logged in contact details
					classified.contact = {
						name: "Melanie B",
						phone: "0707070707070",
						email: "test@test.com"
					}

					$scope.$emit('newClassified', classified);
					vm.sidenavOpen = false;
				}	
			}
		})
})();
