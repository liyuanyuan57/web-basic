var Topic = require('./topic.js');

function Multiple(title, name, options, score, answer) {
  Topic.call(this, title, name, options, score, answer);
}

Multiple.prototype = Object.create(Topic.prototype);
Multiple.prototype.constructor = Multiple;

Multiple.prototype.mark = function() {
  return this.inputs.join('') === this.answer.join('') ? this.score : 0;
}

module.exports = Multiple;
