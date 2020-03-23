require('dotenv').config()
var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const app=express();
app.use(express.json());

const posts=[
  {
    username:'Metra',
    title:'post 1'
  },
  {
    username:'Dara',
    title:'post 2'
  }
]

/* GET home page. */
router.get('/posts', function(req, res, next) {
  res.json(posts)
});

router.post('/login', function(req, res, next) {
  //Authentication user
  const username=req.body.username;
  const user={name:username}
  const  accessToken=jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
  res.json({accessToken:accessToken})
  
});


module.exports = router;
