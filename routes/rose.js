var express = require('express'); 
const rose_controller= require('../controllers/rose'); 
var router = express.Router(); 
 
/* GET create rose page */ 
//router.get('/delete', rose_controller.rose_delete_Page); 
router.get('/', rose_controller.rose_view_all_Page);
router.get('/update', rose_controller.rose_update_Page);

module.exports = router;