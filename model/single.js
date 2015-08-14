var Topic = require('./topic.js');

function Single(title, name, options, score, answer) {
  Topic.call(this, title, name, options, score, answer);
}

Single.prototype = Object.create(Topic.prototype);
Single.prototype.constructor = Single;

Single.prototype.mark = function() {
  console.log(this.inputs+'   '+this.answer);
  return this.inputs.join('') === this.answer.join('') ? this.score : 0;
}

module.exports = Single;
