var express = require('express');
var router = express.Router();
const User = require("../model/user")
const jwt = require("jsonwebtoken")

/* GET home page. */
router.post('/register', async function(req, res, next) {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    if(!name || !email || !password){
        return res.status(400).json({"message":"Os campos devem ser preenchidos!!"})
    }
    const userExist = await User.findOne({name});
    if(userExist) {
        return res.status(400).json({"message":"Usuário já existe!!"})
    }
    const emailExist = await User.findOne({email});
    if(emailExist) {
        return res.status(400).json({"message":"Usuário com este e-mail já existe!!"})
    }
    const resUser = new User(req.body);
    resUser.save();
    var token = jwt.sign(resUser.id, "asdgasyudgyuasd");
      return res.status(200).send({token: token });
});

router.post('/login', async function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    if(!email || !password){
        return res.status(400).json({"message":"Os campos devem ser preenchidos!!"})
    }

    const user = await User.findOne({email, password});
    if(!user) {
        return res.status(400).json({"error":"Senha ou e-mail incorretos!!"})
    }

    const id = user.id
    var token = jwt.sign({id}, "asdgasyudgyuasd");
      return res.status(200).send({token: token });
});

module.exports = router;