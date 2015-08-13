function HomeController(){

}
HomeController.prototype.getIndex = function (req,res) {
console.log(req.body);
res.render('index',{
     "topics":[
       {
           "title":"UML 的中文全称是:",
           "name":"1_1",
           "options":[
               {"describe":null, "items":null}
           ]
       },
       {
           "title":"对象最突出的特征是:",
           "name":"1_2",
           "options":[
               {"describe":null,  "items":null},
               {"describe":null,  "items":null},
               {"describe":null,  "items":null}
           ]
       }
     ]
});

};

HomeController.prototype.postIndex = function (req,res) {
    console.log(req.body);
    res.render('index');

};

module.exports = HomeController;