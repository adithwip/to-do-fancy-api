var express = require('express');
var router = express.Router();

var auth = require('../controllers/authController');
var userCont = require('../controllers/userController');

// find all users
router.get('/', userCont.findAllUsers);

// find one user
router.get('/:id', auth.authUser, userCont.findOneUser);

//update user data
router.put('/:id', auth.authUser, userCont.updateUser);

router.delete('/:id', auth.authUser, userCont.removeUser);

module.exports = router;
