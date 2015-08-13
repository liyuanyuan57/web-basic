/**
 * Created by liyuanyuan on 8/13/15.
 */
var Topic = require('./topic.js');

function Single(title, name, options, score, answer){
    Topic.call(this,title, name, options, score, answer);
}

Single.prototype = Object.create(Topic.prototype);
Single.prototype.constructor = Single;

Single.prototype.setInputs = function(inputs){
     this.inputs = inputs;
}

module.exports = Single;