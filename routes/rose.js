var express = require('express'); 
const rose_controller= require('../controllers/rose'); 
var router = express.Router(); 

const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}

/* GET create rose page */ 
//router.get('/delete', rose_controller.rose_delete_Page); 
router.get('/', rose_controller.rose_view_all_Page);
router.get('/update', secured, rose_controller.rose_update_Page); 
router.get('/create', secured, rose_controller.rose_create_Page);

module.exports = router;