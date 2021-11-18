var express = require('express'); 
const rose_controller= require('../controllers/rose'); 
var router = express.Router(); 
 
/* GET create update page */ 
router.get('/update', rose_controller.rose_update_Page); 
 
module.exports = router;