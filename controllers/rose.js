var Rose = require('../models/rose');
//module.exports = mongoose.model("Rose", roseSchema)


// List of all Rose
exports.rose_list = function(req, res) {
res.send('NOT IMPLEMENTED: Rose list');
};
// for a specific Rose.
exports.rose_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Rose detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.rose_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Rose create POST');
};
// Handle Costume delete form on DELETE.
exports.rose_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Rose delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.rose_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Rose update PUT' + req.params.id);
};