var TopicHelper = require('../helper/helper.js');
var data = require('../seeds/data.json');
var ViewModel = require('../view-model/view-model.js');


function HomeController() {

}
HomeController.prototype.getIndex = function(req, res) {
  var topicHelper = new TopicHelper();
  var topics = topicHelper.getTopics(data);
  var viewModel = new ViewModel(topics);
  res.render('index', viewModel);

};

HomeController.prototype.postIndex = function(req, res) {
  var topicHelper = new TopicHelper();
  var topics = topicHelper.getTopics(data);
  var inputs = req.body;
  var viewModel = new ViewModel(topics, inputs);
  viewModel.getUserInput();
  res.render('index', viewModel);

};

module.exports = HomeController;
