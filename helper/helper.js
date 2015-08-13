/**
 * Created by liyuanyuan on 8/13/15.
 */
var Factory = require('../model/factory.js');

function  TopicHelper(){
}

TopicHelper.prototype.getTopics = function(data){
    var topics = [];
    var factory = new Factory();
    data.topics.forEach(function(topic){
        topics.push(factory.creatTopic(topic));
    });

    return topics;
};

module.exports = TopicHelper;