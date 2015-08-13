

function Topic(title, name, options, score, answer){
   this.title = title;
    this.name = name;
    this.options = options;
    this.score = score;
    this.answer = answer;
    this.inputs = [];
}

Topic.prototype.setInputs = function(inputs){
 this.inputs = inputs;
}

Topic.prototype.getScore = function(){

}
module.exports = Topic;