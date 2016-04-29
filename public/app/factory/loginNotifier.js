app.value('toastr', toastr);

app.factory('loginNotifier', function(toastr) {
	return {
		notify: function(msg) {
			toastr.success(msg);
			console.log(msg);
		},
		error: function(msg) {
			toastr.error(msg);
			console.log(msg);
		}
	}
})