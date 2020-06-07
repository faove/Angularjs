var app = angular.module('MyFirstApp',[])

	app.controller('FirstController', function($scope){
		$scope.nombre = "Frank";
		$scope.nuevoComentario = {};
		$scope.comentarios = [
			{
				comentario:"hey",
				username:"FAby"
			},
			{
				comentario:"hey2",
				username:"FAby2"
			}
		];
		$scope.agregarComentario = function(){
	    	$scope.comentarios.push($scope.nuevoComentario);
	    	$scope.nuevoComentario={};
	    }
	});