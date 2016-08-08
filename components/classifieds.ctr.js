(function (){
	"use strict";

	angular
		.module("ngClassifieds")
		.controller("classifiedsCtrl", function($scope, $http){ // Injecting $scope
			
			$http
				// promise
				.get("data/classifieds.json")

				.then(function(data){
					console.log(data);
					// $scope.classifieds = data;
				});

			

		});
})();