var express = require('express');
var router = express.Router();
const User = require("../model/user")

/* GET home page. */
router.post('/register', function(req, res, next) {
    const resUser = new User(req.body);
    resUser.save();
    res.json(resUser)
});

module.exports = router;