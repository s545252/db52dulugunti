var express = require('express'); 
const rose_controller= require('../controllers/rose'); 
var router = express.Router(); 
 
/* GET roses */ 
router.get('/detail', rose_controller.rose_view_one_Page);
module.exports = router; 