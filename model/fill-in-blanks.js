/**
 * Created by liyuanyuan on 8/13/15.
 */

var Topic = require('./topic.js');

function FillInBlanks(title, name, options, score, answer){
    Topic.call(this,title, name, options, score, answer);
}

FillInBlanks.prototype = FillInBlanks.prototype = Object.create(Topic.prototype);
FillInBlanks.prototype.constructor = FillInBlanks;

module.exports = FillInBlanks;