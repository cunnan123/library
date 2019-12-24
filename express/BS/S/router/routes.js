var express = require('express')
var router = express.Router()
router.use(function(req, res, next) {
  
  req.test.b=1
  next()
})
router.get('/get', function (req, res) {
  req.test.c=1
  var data=JSON.stringify(req.test)
  res.send(data)
})
router.post('/post', function (req, res) {
  req.test.c=1
  var data=JSON.stringify(req.test)
  res.send(data)
  
})

module.exports = router