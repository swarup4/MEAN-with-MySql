var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'mean',

  //If You are using MAMP then use SocketPath. Othewise Comment SocketPath.
  socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

connection.connect(function(err){
	if(!err) {
	    console.log("Database is connected ...");
	} else {
	    console.log(err);
	}
});

module.exports = connection;
