(function (){
	"use strict";

	angular
		.module("ngClassifieds")

		// Injecting $scope and the new factory
		.controller("classifiedsCtrl", function($scope, $http, classifiedsFactory, $mdSidenav, $mdToast){ 
			
		
				classifiedsFactory.getClassifieds()

				.then(function(classifieds){
					$scope.classifieds = classifieds.data;
				});

				// Fake out user logged in contact details
				var contact = {
					name: "Melanie B",
					phone: "0707070707070",
					email: "test@test.com"
				}


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

				// parsing the classified object to the array
				$scope.saveClassified = function(classified){
					// verify that at least one property is defined before sending
					// the object
					// to do: add validation on the form
					if (classified) {
						// attaching the contact details to object
						classified.contact = contact;
						$scope.classifieds.push(classified);

						// Empty the submitted data to allow the user to enter new
						$scope.classified = {};

						// close sidebar on save
						$scope.closeSidebar();

						// notfication to show
						showToast("classified added!")
					}


				}


				// Edit the classfied method
				$scope.editClassified = function(classified){
					$scope.editing = true;
					$scope.openSidebar();

					$scope.classified = classified;
				}
			
				$scope.saveEdit = function(){
					$scope.editing = false;
					// clear form
					$scope.classified = {};
					// close side bar
					$scope.closeSidebar();

					showToast("Edit saved!")

				}

				function showToast(message) {
					$mdToast.show(
						$mdToast.simple()
							.content(message)
							.position("top, right")
							.hideDelay("3000")
					);
				}
		});
})();