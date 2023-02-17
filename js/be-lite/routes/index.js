var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/json',function(req,res){
  res.json([{no: 1, title: "标题" + 1, clicktimes: 10, replytimes: 11},{no: 1, title: "标题" + 1, clicktimes: 10, replytimes: 11}]);
})

module.exports = router;
