var express = require("express"),
	app = express(),
	bodyParser = require("body-parser");



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var router = express.Router();
var db = require('./queries.js');

/*
router.get('/', function(req, res){
	res.send("Hello there");
});
*/

router.get('/api/records', db.getAllRecords);
router.get('/api/records/:id', db.getEmRecord);
router.post('/api/records', db.createEmRecord);
router.put('/api/records/:id', db.updateEmRecord);
router.delete('/api/records/:id', db.removeEmRecord);

app.use(router);

app.listen(3000, function(){
	console.log("Server started");
});

