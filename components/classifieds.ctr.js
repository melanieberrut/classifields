(function (){
	"use strict";

	angular
		.module("ngClassifieds")

		// Injecting $scope and the new factory
		.controller("classifiedsCtrl", function($scope, $http, classifiedsFactory, $mdSidenav, $mdToast, $mdDialog){ 
			
				// asynch
				classifiedsFactory.getClassifieds()
				.then(function(classifieds){
					$scope.classifieds = classifieds.data;

					$scope.categories = getCategories($scope.classifieds);
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

				// reusable show toast function
				function showToast(message) {
					$mdToast.show(
						$mdToast.simple()
							.content(message)
							.position("top, right")
							.hideDelay("3000")
					);
				}

				// Delete with 2 arguments: event and current element
				$scope.deleteClassified = function (event, classified){
					// config confirm
					var confirm = $mdDialog.confirm()
						.title("Are you sure you want to delete " + classified.title + " ?")
						.ok("Yes")
						.cancel("No")
						.targetEvent(event);

					$mdDialog
						// promise
						.show(confirm)
						// what happens when this resolves
						.then(
							// FOR CLICK YES
							function(){
								// finding the index in the array
								var index = $scope.classifieds.indexOf(classified);
								$scope.classifieds.splice(index, 1);
						}, 
							// FOR CLICK NO
							function(){
								// to do
						});

				}

				// Taking out list of data: classifieds
				function getCategories(classifieds) {
					var categories = [];
					// iterating throught it, each items from it
					angular.forEach(classifieds, function(item){
						// for each item get the category of it
						angular.forEach(item.categories, function(category){
							categories.push(category);
						});
					});

					// we want to put unique category to avoid duplicate results
					return _.uniq(categories);
				}
		});
})();