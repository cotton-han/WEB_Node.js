var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'hyj0727',
  database : 'opentutorials_node'
});

connection.connect();

connection.query('SELECT * FROM topic', function (error, results, fields) {
  if (error){
    console.log(error);
  };
  console.log(results);
});

connection.end();
