(function (){
	"use strict";

	angular
		.module("ngClassifieds")
		.controller("newClassifiedsCtrl", function($mdSidenav, $mdDialog, $timeout, classifiedsFactory){
			
			var vm = this;
			
			// note: when going to the new state /new, the side nav is not opening
			// due the event loop
			// fix: timeout

			$timeout(function(){
				$mdSidenav("left").open();
			});

		})
})();
