var promise = require("bluebird");
var options = {
	promiseLab : promise
};

var pgp = require("pg-promise")(options);
var cn = {
	host: 'localhost',
	user: 'myblog',
	password: 'myblog123',
	database: 'myblog',
	port: '5432'
};

var db = pgp(cn);


function getAllRecords(req, res, next){
	db.any('select * from emrecord')
	.then(function(data){
		res.status(200).json({
			status: 'success',
			data: data,
			message: 'Get all records'
		});
	}).catch(function(err){
		return next(err);
	});
}

function createEmRecord(req, res, next){
	req.body.zone = parseInt(req.body.zone);
	req.body.issue = parseInt(req.body.issue);
	var date = new Date();
	db.none('insert into emrecord (data) values($1)',JSON.stringify({"zone":req.body.zone,
		"issue":req.body.issue,"comments":req.body.comments,"date": date})).
	then(function(){
		res.status(200).json({
			status: 'success',
			message: 'Added succesfully'
		});
	}).catch(function(err){
		return next(err);
	});
}

function updateEmRecord(req, res, next){

}

function getEmRecord(req, res, next){
	var id = parseInt(req.params.id);
	db.one('select * from emrecord where id = $1', id).then(function(data){
		res.status(200).json({
			status: 'success',
			data: data,
			message: 'OK'
		});
	}).catch(function(err){
		res.status(300).json({
			status: 'error',
			data: null,
			message: "Imposible to get information from emrecord:"+id
		});
		return 0;
	});
}

function removeEmRecord(req, res, next){

}

module.exports = {
	getAllRecords : getAllRecords,
	createEmRecord : createEmRecord,
	updateEmRecord : updateEmRecord,
	getEmRecord : getEmRecord,
	removeEmRecord : removeEmRecord
};