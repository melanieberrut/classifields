(function (){
	"use strict";

	angular
		.module("ngClassifieds")
		.controller("editClassifiedsCtrl", function($scope, $mdSidenav, $state, $mdDialog, $timeout, classifiedsFactory){
			
			var vm = this;
			vm.classifieds = classifiedsFactory.ref;

			vm.closeSidebar = closeSidebar;
			vm.saveEdit = saveEdit;
			// get the id from the param
			vm.classified = vm.classifieds.$getRecord($state.params.id);



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

			function saveEdit(){
				vm.classifieds.$save(vm.classified).then(function(){
					$scope.$emit('editSaved', "Edit saved!");
					vm.sidenavOpen = false;
				});
				
			}
		})
})();
