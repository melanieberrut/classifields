(function (){
	"use strict";

	angular
		.module("ngClassifieds")

		// Injecting $scope and the new factory
		.controller("classifiedsCtrl", function($scope, $http, classifiedsFactory, $mdSidenav){ 
			
		
				classifiedsFactory.getClassifieds()

				.then(function(classifieds){
					$scope.classifieds = classifieds.data;
				});

				$scope.openSidebar = function() {
					// open the sidebar

					// using componenet ID
					$mdSidenav("left").open();
				}
				$scope.closeSidebar = function() {
					// open the sidebar

					// using componenet ID
					$mdSidenav("left").close();
				}

			

		});
})();