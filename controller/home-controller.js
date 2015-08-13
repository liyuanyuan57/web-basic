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
    ],
    "multipleTopics":[
        {
            "title":"用例的粒度分为以下哪三种:",
            "name":"3_1",
            "options":[
                {"describe":"(A)概述级", "items":"A"},
                {"describe":"(B)需求级",  "items":"B"},
                {"describe":"(C)用户目标级、",  "items":"C"},
                {"describe":"(D)子功能级",  "items":"D"}
            ]
        },
        {
            "title":"类图由以下哪三部分组成。",
            "name":"3_2",
            "options":[
                {"describe":"(A)名称(Name)", "items":"A"},
                {"describe":"(B)属性(Attribute)",  "items":"B"},
                {"describe":"(C)操作(Operation)",  "items":"C"},
                {"describe":"(D)方法(Function)",  "items":"D"}
            ]
        }
    ],

    "judgeTopics":[
        {
            "title":"用例图只是用于和客户交流和沟通的,用于确定需求。",
            "name":"4_1",
            "options":[
                {"describe":"TRUE", "items":"TRUE"},
                {"describe":"FALSE",  "items":"FALSE"}
            ]
        },
        {
            "title":"在状态图中,终止状态在一个状态图中允许有任意多个。",
            "name":"4_2",
            "options":[
                {"describe":"TRUE", "items":"TRUE"},
                {"describe":"FALSE",  "items":"FALSE"}
            ]
        }
    ],
    "shortTopics":[
        {
            "title":"简述什么是模型以及模型的表现形式?",
            "name":"5_1",
            "options":[
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