var express = require('express')
var router = express.Router()
router.use(function(req, res, next) {
  next()
})
router.get('/get', function (req, res) {
  var data=JSON.stringify(typeof res.header)
  res.send(data)
})

router.post('/post', function (req, res) {
  res.send('2')
})
router.get('/jsonp/:callback', function (req, res) {
    let methodName = req.params.callback; 
    console.log(methodName)
    let data = {
       results: [
         {
           name: 'xxx',
           code: 1
         }
       ]
     };
    res.send( `${methodName}(${JSON.stringify(data)})`);
})
module.exports = router