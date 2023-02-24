/*  
File name: users.js
Student’s Name: Mahfuzur Rahman
StudentID : 301336576
Date : Feb 7 2023 
*/
 
//

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
