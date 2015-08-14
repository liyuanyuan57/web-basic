var index = require("./index.js");

exports.setRouter = function(app){
  app.use('/', index);
}
