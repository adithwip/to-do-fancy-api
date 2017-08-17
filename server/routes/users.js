var express = require('express');
var router = express.Router();


var userCont = require('../controllers/userController');

router.get('/', userCont.findAllUsers);

module.exports = router;
