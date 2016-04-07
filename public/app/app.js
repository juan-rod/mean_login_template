var app = angular.module("uPick", ['ngResource','ngRoute']);


angular.module("uPick").config(['$routeProvider','$locationProvider',
  function($routeProvider,$locationProvider){

  	$locationProvider.html5Mode(true); //might not need this bc i'm using geolocation
  	
  	$routeProvider
  		.when('/',{
        templateUrl : "/partials/main",
        controller : "mainCtrl"
      })
    }
  ]);

angular.module("uPick").controller('mainCtrl',function($scope){
	$scope.myVar = 'Hello Angular';
});