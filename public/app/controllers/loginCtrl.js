app.controller('loginCtrl', function($scope, $http, $rootScope, loginNotifier, identity, mvAuth, mvUser, $location){

	$scope.createAccount = false;
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
			$scope.fname = "";
			$scope.lname = "";
			$scope.username = "";
			$scope.email = "";
			loginNotifier.notify("You have successfully signed out!");
			$location.path('/')

		})
	}

	$scope.signup = function() {
		var newUserData = {
			firstName: $scope.fname,
			lastName: $scope.lname,
			username: $scope.username,
			password:$scope.password,
			email:$scope.email
		};

		mvAuth.createUser(newUserData).then(function(){
			loginNotifier.notify('User account created!');
			$location.path('/');
		}, function(reason){
			loginNotifier.error(reason);
		})
	}

});