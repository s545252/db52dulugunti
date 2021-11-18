var express = require('express');
var router = express.Router();

// Require controller modules
var api_controller = require('../controllers/api');
var rose_controller = require('../controllers/rose');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// rose ROUTES ///
// POST request for creating a rose.
router.post('/rose', rose_controller.rose_create_post);
// DELETE request to delete rose.
router.delete('/rose/:id', rose_controller.rose_delete);
// PUT request to update rose.
router.put('/rose/:id', rose_controller.rose_update_put);
// GET request for one rose.
router.get('/rose/:id', rose_controller.rose_detail);
// GET request for list of all rose items.
router.get('/rose', rose_controller.rose_list);
/* GET detail rose page */
router.get('/detail', rose_controller.rose_view_one_Page);
/* GET create rose page */ 
router.get('/create', rose_controller.rose_create_Page); 
/* GET create update page */ 
router.get('/update', rose_controller.rose_update_Page); 
/* GET create rose page */ 
router.get('/delete', rose_controller.rose_delete_Page); 
module.exports = router;