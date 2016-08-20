(function (){
	"use strict";

	angular
		.module("ngClassifieds")
		.controller("newClassifiedsCtrl", function($mdSidenav, $mdDialog, $timeout, classifiedsFactory){
			
			var vm = this;
			console.log('inside');
			
			// note: when going to the new state /new, the side nav is not opening
			// due the event loop
			// fix: timeout

			$timeout(function(){
				console.log('inside tm');
				$mdSidenav("left").open();
			});

		})
})();
