/**
 * Created by liyuanyuan on 8/13/15.
 */
var FillInBlanks = require('../model/fill-in-blanks.js');
var Single = require('../model/single.js');
var Multiple = require('../model/multiple.js');
var Judge = require('../model/judge.js');
var ShortAnswer = require('../model/short-answer.js');


function ViewModel(topics, inputs){
    this.topics = topics;
    this.inputs = inputs;
}

ViewModel.prototype.getFillInTopics = function(){

    return this.topics.filter(function(topic){
        return topic instanceof FillInBlanks;
    });
};

ViewModel.prototype.getSingleTopics = function(){
    return this.topics.filter(function(topic){
        return topic instanceof Single;
    });
};

ViewModel.prototype.getMultipleTopics = function(){
    return this.topics.filter(function(topic){
        return topic instanceof Multiple;
    });
};

ViewModel.prototype.getJudgeTopics = function(){
    return this.topics.filter(function(topic){
        return topic instanceof Judge;
    });
};

ViewModel.prototype.getShortAnswerTopics = function(){
    return this.topics.filter(function(topic){
        return topic instanceof ShortAnswer;
    });
};

ViewModel.prototype.getUserInfo = function(){
    if(this.inputs){
        return {stu_name: this.inputs.stu_name, stu_number: this.inputs.stu_number, stu_grade: this.inputs.stu_grade};
    }else{
        return {stu_name: '', stu_number: '', stu_grade: ''};
    }
};

ViewModel.prototype.getUserInput = function(){
    var that = this;
    that.topics.forEach(function (topic) {
       topic.setInputs(that.inputs[topic.name]);
    })
}



module.exports = ViewModel;