app.factory('mvAuth', function($http, identity, $q, mvUser) {
	return {
		authenticateUser: function(username, password) {
			var dfd = $q.defer();			
			$http.post('/login',{username:username,password:password})
				.then(function(response){
					if(response.data.success) {
						var user = new mvUser();
						angular.extend(user, response.data.user);
						identity.currentUser = user;
						dfd.resolve(true);
					} else {
						dfd.resolve(false);
					}
				});
				return dfd.promise;	
		},
		logoutUser: function() {
			var dfd = $q.defer();
			$http.post('/logout', {logout:true}).then(function() {
				identity.currentUser = undefined;
				dfd.resolve();
			})
			return dfd.promise;	
		},
		authorizeCurrentUserForRoute: function(role) {
			if(identity.isAuthorized('role')) {
                return true;
              } else {
                return $q.reject("not authorized");
              }
		}
	}
})