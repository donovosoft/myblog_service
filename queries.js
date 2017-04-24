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

}

function updateEmRecord(req, res, next){

}

function getEmRecord(req, res, next){

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