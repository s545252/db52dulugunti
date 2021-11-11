const roses = require('../models/rose');
var Rose = require('../models/rose');
//module.exports = mongoose.model("Rose", roseSchema)


// List of all Rose
exports.rose_list = async function (req, res) {
    try {
        theRose = await roses.find();
        res.send(theRose);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

exports.rose_view_all_Page = async function(req, res) { 
    try{ 
        theRoses = await Rose.find(); 
        console.log(theRoses)
        res.render('rose', { title: 'Rose Search Results', results: theRoses }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

exports.rose_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Rose(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.types = req.body.types; 
    document.colours = req.body.colours; 
    document.cost = req.body.cost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// for a specific Rose.
exports.rose_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Rose detail: ' + req.params.id);
};
// Handle Rose delete form on DELETE.
exports.rose_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Rose delete DELETE ' + req.params.id);
};
// Handle Rose update form on PUT.
exports.rose_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Rose update PUT' + req.params.id);
};