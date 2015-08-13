var Topic = require('./topic.js');

function Multiple(title, name, options, score, answer){
    Topic.call(this,title, name, options, score, answer);
}

Multiple.prototype = Object.create(Topic.prototype);
Multiple.prototype.constructor = Multiple;

Multiple.prototype.setInputs = function(inputs){
    this.inputs = inputs;
}

module.exports = Multiple;