(function (){
	"use strict";

	angular
		.module("ngClassifieds")

		// Injecting $scope and the new factory
		.controller("classifiedsCtrl", function($scope, $http, classifiedsFactory){ 
			
		
				classifiedsFactory.getClassifieds()

				.then(function(classifieds){
					$scope.classifieds = classifieds.data;
				});

			

		});
})();