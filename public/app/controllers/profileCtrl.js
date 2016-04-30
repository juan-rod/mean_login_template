app.controller('profileCtrl', function($scope, mvAuth, identity, loginNotifier){
	$scope.fname = identity.currentUser.firstName;
	$scope.lname = identity.currentUser.lastName;
	$scope.email = identity.currentUser.email;
	$scope.username = identity.currentUser.username;

	$scope.update = function() {
		var newUserData = {
			email: $scope.email,
			firstName: $scope.fname,
			lastName: $scope.lname,
			username: $scope.username,
		}
		if($scope.password && $scope.password.length > 0) {
			newUserData.password = $scope.password;
		}
		console.log("newUserData:", newUserData);

		mvAuth.updateCurrentUser(newUserData).then(function() {
			loginNotifier.notify('Your user account has been updated!');
		}, function(reason) {
			loginNotifier.error(reason);
		})
	}

});