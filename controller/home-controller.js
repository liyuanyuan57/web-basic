var TopicHelper = require('../helper/helper.js');
var data = require('../seeds/data.json');

var ViewModel = require('../view-model/view-model.js');


function HomeController(){

}
HomeController.prototype.getIndex = function (req,res) {
    var topicHelper = new TopicHelper();
    var topics = topicHelper.getTopics(data);
    var viewModel = new ViewModel(topics);
    console.log(viewModel.getMultipleTopics())
    res.render('index', viewModel);

};

HomeController.prototype.postIndex = function (req,res) {
    console.log(req.body);
    res.render('index');

};

module.exports = HomeController;