var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/url',function(req, res){
  res.json([{url:"http://www.b.com:3000/data1.js",callback:"a"},{url:"http://www.b.com:3000/data2.js",callback:"b"}])
});
router.get('/data1.js',function(req,res){
  res.render('data1');
});
router.get('/data2.js',function(req,res){
  res.render('data2');
});
module.exports = router;
