angular.module('MyFirstApp',[])

	.controller('FirstController', function($scope){
		$scope.nombre = "Fran";

		$scope.records = [
	       {
	            "Name" : "Alfreds Futterkiste",
	            "Country" : "Germany"
	        },{
	            "Name" : "Berglunds snabbköp",
	            "Country" : "Sweden"
	        },{
	            "Name" : "Centro comercial Moctezuma",
	            "Country" : "Mexico"
	        },{
	            "Name" : "Ernst Handel",
	            "Country" : "Austria"
	        }
	    ];
	});