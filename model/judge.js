var Topic = require('./topic.js');

function Judge(title, name, options, score, answer) {
  Topic.call(this, title, name, options, score, answer);
}

Judge.prototype = Object.create(Topic.prototype);
Judge.prototype.constructor = Judge;

Judge.prototype.mark = function() {
  return this.inputs.join('') === this.answer.join('') ? this.score : 0;
}

module.exports = Judge;
