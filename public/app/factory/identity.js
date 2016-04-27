app.factory('identity', function($window, mvUser) {
	var currentUser;
	if(!!$window.bootstrappedUserObject){
		currentUser = new mvUser();
		angular.extend(currentUser, $window.bootstrappedUserObject);

	}
	return {
		currentUser: currentUser,
		isAuthenticated: function(msg) {
			return !!this.currentUser;
		},
		isAuthorized: function(role) {
			return !!this.currentUser && this.currentUser.roles.indexOf('admin') > -1;
		}
	}
})