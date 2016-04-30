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
		createUser: function(newUserData){
			var newUser = new mvUser(newUserData);
			var dfd = $q.defer();

			newUser.$save().then(function() {
				identity.currentUser = newUser;
				dfd.resolve();
			}, function(response) {
				dfd.reject(response.data.reason);
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
		},
		authorizeAuthenticatedUserForRoute: function() {
			if(identity.isAuthenticated()) {
                return true;
              } else {
                return $q.reject("not authorized");
              }	
		}
	}
})