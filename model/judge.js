/**
 * Created by liyuanyuan on 8/13/15.
 */
var Topic = require('./topic.js');

function Judge(title, name, options, score, answer){
    Topic.call(this,title, name, options, score, answer);
}

Judge.prototype = Object.create(Topic.prototype);
Judge.prototype.constructor = Judge;


Judge.prototype.setInputs = function(inputs){
    this.inputs = inputs;
}

Judge.prototype.getScore = function(){
    return  this.inputs === this.answer? this.score:0;
}

module.exports = Judge;