/**
 * Created by liyuanyuan on 8/13/15.
 */

var Topic = require('./topic.js');
var _ = require('lodash');

function FillInBlanks(title, name, options, score, answer) {
  Topic.call(this, title, name, options, score, answer);
}

FillInBlanks.prototype = FillInBlanks.prototype = Object.create(Topic.prototype);
FillInBlanks.prototype.constructor = FillInBlanks;



FillInBlanks.prototype.setInputs = function(inputs) {
  this.inputs = inputs instanceof Array ? inputs : new Array(inputs);


}

FillInBlanks.prototype.getScore = function() {

  return _.intersection(this.inputs, this.answer).length * this.score;
}

module.exports = FillInBlanks;
