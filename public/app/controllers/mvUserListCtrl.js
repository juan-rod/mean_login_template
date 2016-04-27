app.controller('mvUserListCtrl', function($scope, mvUser){
	$scope.users = mvUser.query();
	console.log("$scope from mvUserListCtrl:", $scope);
});