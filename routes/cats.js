var express = require('express');
var router = express.Router();
var fs = require('fs');

var catsDb = require("./catsDb");
/*console.log(catsDb);*/
//Get all tasks
router.get('/cats', function (req, resp, next) {
    var obj;
    fs.readFile('catsDb.json', 'utf8', function (err, data) {
        if (err) throw resp.err;
        obj = JSON.parse(data);
        resp.json(obj);
    });

});


//Get Single Tasks
router.get('/cats/:id', function (req, resp, next) {

    console.log(getCat(req.query.id));

});
function getCat(id){
    for (var i=0; i<catsDb.length; i++){
        if(catsDb[i]._id ===id) return catsDb[i];
    }
    return {};
}

module.exports = router;
