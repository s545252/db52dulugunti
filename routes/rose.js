var express = require('express'); 
const rose_controlers= require('../controllers/rose'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.delete('/rose/:id', rose_controlers.rose_delete);
module.exports = router; 