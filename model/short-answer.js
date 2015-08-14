var Topic = require('./topic.js');

function ShortAnswer(title, name, options, score, answer) {
  Topic.call(this, title, name, options, score, answer);
}

ShortAnswer.prototype = Object.create(Topic.prototype);
ShortAnswer.prototype.constructor = ShortAnswer;

ShortAnswer.prototype.mark = function() {
  return this.inputs === this.answer ? this.score : 0;
}

module.exports = ShortAnswer;
