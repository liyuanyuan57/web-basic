/**
 * Created by liyuanyuan on 8/13/15.
 */
var Topic = require('./topic.js');

function ShortAnswer(title, name, options, score, answer){
    Topic.call(this, title, name, options, score, answer);
}

ShortAnswer.prototype  = Object.create(Topic.prototype);
ShortAnswer.prototype.constructor = ShortAnswer;

module.exports = ShortAnswer;