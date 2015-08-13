function HomeController(){

}
HomeController.prototype.getIndex = function (req,res) {
console.log(req.body);
res.render('index');

};

HomeController.prototype.postIndex = function (req,res) {
    console.log(req.body);
    res.render('index');

};

module.exports = HomeController;