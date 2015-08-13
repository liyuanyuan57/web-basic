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
     ],

    "simpleTopics":[
        {
            "title":"UML 与软件工程的关系是:",
            "name":"2_1",
            "options":[
                {"describe":"(A)UML 就是软件工程", "items":"A"},
                {"describe":"(B)UML 参与到软件工程中软件开发过程的几个阶段",  "items":"B"},
                {"describe":"(C)UML 与软件工程无关",  "items":"C"},
                {"describe":"(D)UML 是软件工程的一部分",  "items":"D"}
            ]
        },
        {
            "title":"Java 语言支持:",
            "name":"2_2",
            "options":[
                {"describe":"(A)UML 就是软件工程", "items":"A"},
                {"describe":"(B)UML 参与到软件工程中软件开发过程的几个阶段",  "items":"B"},
                {"describe":"(C)UML 与软件工程无关",  "items":"C"},
                {"describe":"(D)UML 是软件工程的一部分",  "items":"D"}
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