var express = require('express'); 
const rose_controller= require('../controllers/rose'); 
var router = express.Router(); 
 
/* GET roses */ 
router.get('/create', rose_controller.rose_create_Page);
module.exports = router; 