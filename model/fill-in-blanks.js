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

FillInBlanks.prototype.mark = function() {

  return _.intersection(this.inputs, this.answer).length * this.score;
}

module.exports = FillInBlanks;
