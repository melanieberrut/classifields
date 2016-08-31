(function(){

	"use strict";

	angular
		.module("ngClassifieds")
		.factory("classifiedsFactory", function($http, $firebaseArray){

			var ref = new Firebase("https://ngclassifieds-e2ab7.firebaseio.com/");

			return {
				ref : $firebaseArray(ref)
			}

		});
})();
