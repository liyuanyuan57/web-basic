var express = require('express');
var app = express();
var router = require('./router/router');

var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
router.setRouter(app);
app.use('/public', express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));


app.locals.data = require('./seeds/data.json');

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
});
