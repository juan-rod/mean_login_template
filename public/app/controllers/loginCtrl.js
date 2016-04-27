app.controller('loginCtrl', function($scope, $http, $rootScope, loginNotifier, identity, mvAuth, $location){

	$scope.identity = identity;
	$scope.login = function(username,password) {
		mvAuth.authenticateUser(username,password).then(function(success) {
			if(success) {
				loginNotifier.notify('You have successfully signed in!');	
				console.log('You have successfully signed in!');
			} else {
				loginNotifier.notify('Username/Password combination incorrect');
				console.log('Username/Password combination incorrect');
			}
		});
	}

	$scope.signout = function() {
		mvAuth.logoutUser().then(function() {
			$scope.username = "";
			$scope.password = "";
			loginNotifier.notify("You have successfully signed out!");
			$location.path('/')

		})
	}

});