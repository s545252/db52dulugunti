var express = require('express'); 
const rose_controller= require('../controllers/rose'); 
var router = express.Router(); 
 
/* GET create rose page */ 
//router.get('/delete', rose_controller.rose_delete_Page); 
router.get('/detail', rose_controller.rose_view_one_Page);
 
module.exports = router;