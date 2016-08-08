(function (){
	"use strict";

	angular
		.module("ngClassifieds")
		.controller("classifiedsCtrl", function($scope, $http){ // Injecting $scope
			
			$http
				// promise
				.get("data/classifieds.json")

				.then(function(classifieds){
					$scope.classifieds = classifieds.data;
				});

			

		});
})();