var express = require('express');
var router = express.Router();

/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

router.get('/:id',function(req,res) {
	/*res.send({
		users : ['Ani',"Joshi"]
	});*/
/*	res.render('index',{

		title: 'MyApp',
		age: 23
	});*/

	console.log(req.params);
	res.send(req.params.id,200);
});
module.exports = router;
