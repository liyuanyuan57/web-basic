var FillInBlanks = require('./fill-in-blanks.js');
var Single = require('./single.js');
var Multiple = require('./multiple.js');
var Judge = require('./judge.js');
var ShortAnswer = require('./short-answer.js');

function Factory() {
  
}

Factory.prototype.creatTopic = function(topic) {
  if (topic.type === "fillIn") {
    return new FillInBlanks(topic.title, topic.name, topic.options, topic.score, topic.answer);
  } else if (topic.type === "single") {
    return new Single(topic.title, topic.name, topic.options, topic.score, topic.answer);
  } else if (topic.type === "multiple") {
    return new Multiple(topic.title, topic.name, topic.options, topic.score, topic.answer);
  } else if (topic.type === "judge") {
    return new Judge(topic.title, topic.name, topic.options, topic.score, topic.answer);
  } else if (topic.type === "shortAnswer") {
    return new ShortAnswer(topic.title, topic.name, topic.options, topic.score, topic.answer);
  }

};


module.exports = Factory;
