var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')
var cors = require('cors');

mongoose.connect('mongodb://13.58.176.103/test');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
 });

var test = mongoose.model('test', {
    name: String,
    age: Number
});

app.get('/api/test', function(req, res) {
    
           console.log("fetching test data");

           test.find(function(err, test) {
    
               if (err)
                   res.send(err);
    
               res.json(test);
           });
       });

app.listen(8080);
console.log("App listening on port 8080");