var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')
var cors = require('cors');

mongoose.connect('mongodb://13.58.207.97/placeholder');