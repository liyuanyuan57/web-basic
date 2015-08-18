var data = require('../config/database.json');
function DataHelper() {

}
DataHelper.prototype.getSqlData = function(callback) {

  var mysql = require('mysql');
  var connection = mysql.createConnection({
    host: data.host,
    user: data.user,
    password: data.password,
    database: data.database
  });

  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connect');
  });

  connection.query('SELECT * FROM options,topics WHERE options.topics_id = topics.id', function(err, rows, fields) {
    if (err) throw err;
    var options = [];
    var topics = [];
    rows.forEach(function(row) {
      if (options[row.id]) {
        options[row.id].push({
          describe: row.describes,
          items: row.items
        });
      } else {
        options[row.id] = [];
        options[row.id].push({
          describe: row.describes,
          items: row.items
        });
      }
      topics[row.id - 1] = {
        type: row.type,
        name: row.name,
        options: options[row.id],
        title: row.title,
        answer: row.answer.split(','),
        score: row.score
      };
    });
    callback(topics);
  });

  connection.end();
};


module.exports = DataHelper;
