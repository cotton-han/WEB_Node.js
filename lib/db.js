var mysql = require('mysql');

var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'hyj0727',
  database : 'opentutorials_node'
});
db.connect();

module.exports = db;
