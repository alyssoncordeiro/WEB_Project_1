var express = require('express');
var router = express.Router();
const jwt = require("jsonwebtoken")
const Content = require('../model/content')
const User = require("../model/user")
const multer = require('multer')
const config = require('./multer')

router.post('/', multer(config).single("file"), async function(req, res, next) {
  if(!req.body.text || !req.body.sentiment || !req.file){
    return res.status(400).json({"message":"Os campos devem ser preenchidos!!"})
 }
  const text = req.body.text;
  const sentiment = req.body.sentiment;
  const image_url = `http://localhost:5000/files/${req.file.key}`
  const resUser = new Content({text, sentiment, image_url});
  resUser.save();
    return res.status(200).send({resUser});
});

function verifyJWT(req, res, next){
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, "asdgasyudgyuasd", function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      
      // se tudo estiver ok, salva no request para uso posterior
      req.userId = decoded.id;
      next();
    });  
}

router.post('/buscar', verifyJWT, async (req, res, next) => {
  const textBody = req.body.text
  const response = await Content.find({text: { $regex: '.*' + textBody + '.*',  $options: 'i' }});
  if (response[0]){
  return res.json(response[0])
  }
  return res.json({"sentiment": "neutral"})
}) 

router.get('/is-admin', verifyJWT, async (req, res, next) => {

  const id = req.userId
  const user = await User.findById(id);
  return res.send({"isAdmin": user.isAdmin})
  
})

module.exports = router;