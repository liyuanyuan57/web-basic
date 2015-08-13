/**
 * Created by liyuanyuan on 8/13/15.
 */
var FillInBlanks = require('../model/fill-in-blanks.js');
var Single = require('../model/single.js');
var Multiple = require('../model/multiple.js');
var Judge = require('../model/judge.js');
var ShortAnswer = require('../model/short-answer.js');


function ViewModel(topics){
    this.topics = topics;
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

module.exports = ViewModel;