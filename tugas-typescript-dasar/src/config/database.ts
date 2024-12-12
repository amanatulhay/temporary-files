const mysql = require("mysql")

const connectionPool = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'db_tugas_express'
});
connectionPool.getConnection(function(err: any) {
  if (err) {
    throw err
  }
});

module.exports = {
  connectionPool
}