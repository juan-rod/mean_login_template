

module.exports = function(app){

	app.get('public/partials/:partialPath', function(req,res){
		res.render('partials/'+ req.params.partialPath);
	});

	app.get('/', function(req, res){
		res.render('index.html');
	});
}