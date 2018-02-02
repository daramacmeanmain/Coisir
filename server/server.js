var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')
var cors = require('cors');

mongoose.connect('mongodb://dara:/RqCTxIizS5b0bSPs8A9KBsy6lM=@ec2-13-58-176-103.us-east-2.compute.amazonaws.com:27017/userBase');

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

var User = mongoose.model('User', {
    name: String,
    age: Number
});

app.get('/api/users', function(req, res) {
    
           console.log("fetching test user data");

           User.find(function(err, users) {
    
               if (err)
                   res.send(err);
    
               res.json(users);
           });
       });

app.listen(8100);
console.log("App listening on port 8080");