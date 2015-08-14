var express = require('express');
var HomeController = require('../controller/home-controller.js');
var router = express.Router();

var homeController = new HomeController();
router.get('/',homeController.getIndex);
router.post('/',homeController.postIndex);

module.exports = router;
