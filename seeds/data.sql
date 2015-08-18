DROP DATABASE IF EXISTS TWWebBasic;
CREATE DATABASE TWWebBasic DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;

USE TWWebBasic;

CREATE TABLE topics(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  amount INT NOT NULL,
  type  VARCHAR(50) NOT NULL,
  title VARCHAR(100) NOT NULL,
  name  VARCHAR(20) NOT NULL,
  answer VARCHAR(255),
  score  INT NOT NULL
  );

CREATE TABLE options(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  topics_id INT NOT NULL,
  describes VARCHAR(100) NOT NULL,
  items VARCHAR(20) NOT NULL
  );

ALTER TABLE options ADD CONSTRAINT fk_topicOptions FOREIGN KEY (topics_id) REFERENCES topics(id);

INSERT INTO  topics(amount,type,title,name,answer,score)
values(1,"fillIn","UML 的中文全称是:","1_1","统一建模语言",5);
INSERT INTO  topics(amount,type,title,name,answer,score)
values(3,"fillIn","对象最突出的特征是:","1_2","封装性,继承性,多态性",5);
INSERT INTO  topics(amount,type,title,name,answer,score)
values(4,"single","UML 与软件工程的关系是:","2_1","D",10);
INSERT INTO  topics(amount,type,title,name,answer,score)
values(4,"single","Java 语言支持:","2_2","C",10);
INSERT INTO  topics(amount,type,title,name,answer,score)
values(4,"multiple","用例的粒度分为以下哪三种:","3_1","A,B,C",10);
INSERT INTO  topics(amount,type,title,name,answer,score)
values(4,"multiple","类图由以下哪三部分组成。","3_2","A,B,D",10);
INSERT INTO  topics(amount,type,title,name,answer,score)
values(2,"judge","用例图只是用于和客户交流和沟通的,用于确定需求。","4_1","FALSE",10);
INSERT INTO  topics(amount,type,title,name,answer,score)
values(2,"judge","在状态图中,终止状态在一个状态图中允许有任意多个。","4_2","TRUE",10);
INSERT INTO  topics(amount,type,title,name,answer,score)
values(1,"shortAnswer","简述什么是模型以及模型的表现形式?","5-1","模型是对现实世界的简化和抽象,模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体;可以是某种图形;或者是一种数学表达式。",20);

INSERT INTO  options(topics_id,describes,items) values(1,"","");
INSERT INTO  options(topics_id,describes,items) values(2,"","");
INSERT INTO  options(topics_id,describes,items) values(2,"","");
INSERT INTO  options(topics_id,describes,items) values(2,"","");

INSERT INTO  options(topics_id,describes,items) values(3,"(A)UML 就是软件工程","A");
INSERT INTO  options(topics_id,describes,items) values(3,"(B)UML 参与到软件工程中软件开发过程的几个阶段","B");
INSERT INTO  options(topics_id,describes,items) values(3,"(C)UML 与软件工程无关","C");
INSERT INTO  options(topics_id,describes,items) values(3,"(D)UML 是软件工程的一部分","D");

INSERT INTO  options(topics_id,describes,items) values(4,"(A)UML 就是软件工程","A");
INSERT INTO  options(topics_id,describes,items) values(4,"(B)UML 参与到软件工程中软件开发过程的几个阶段","B");
INSERT INTO  options(topics_id,describes,items) values(4,"(C)UML 与软件工程无关","C");
INSERT INTO  options(topics_id,describes,items) values(4,"(D)UML 是软件工程的一部分","D");

INSERT INTO  options(topics_id,describes,items) values(5,"(A)概述级","A");
INSERT INTO  options(topics_id,describes,items) values(5,"(B)需求级","B");
INSERT INTO  options(topics_id,describes,items) values(5,"(C)用户目标级、","C");
INSERT INTO  options(topics_id,describes,items) values(5,"(D)子功能级","D");

INSERT INTO  options(topics_id,describes,items) values(6,"(A)名称(Name)","A");
INSERT INTO  options(topics_id,describes,items) values(6,"(B)属性(Attribute)","B");
INSERT INTO  options(topics_id,describes,items) values(6,"(C)操作(Operation)","C");
INSERT INTO  options(topics_id,describes,items) values(6,"(D)方法(Function)","D");

INSERT INTO  options(topics_id,describes,items) values(7,"TRUE","TRUE");
INSERT INTO  options(topics_id,describes,items) values(7,"FALSE","FALSE");

INSERT INTO  options(topics_id,describes,items) values(8,"TRUE","TRUE");
INSERT INTO  options(topics_id,describes,items) values(8,"FALSE","FALSE");

INSERT INTO  options(topics_id,describes,items) values(9,"","");
