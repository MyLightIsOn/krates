// DEPENDENCIES
// ============

var Config =   global.Config = process.env || require('./config/config.js').config,
    express = require("express"),
    errorhandler = require("errorhandler"),
    exphbs = require("express-handlebars"),
    bodyParser = require('body-parser'),
    multer = require('multer'),
    http =    require("http"),
    path = require('path'),
    port =    ( process.env.PORT || Config.listenPort ),
    server =  module.exports = express(),
    mongoose = require('mongoose'),
    API =     require('./API');

// DATABASE CONFIGURATION
// ======================

// Connect to Database
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://' + Config.database.IP + ':' + Config.database.port + '/' + Config.database.name);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error:'));
db.once('open', function callback () {
    console.log('Connected to ' + process.env.DB_NAME || Config.database.name);
});

// DATABASE SCHEMAS
// ================

var schema = require('./schemas/songSchema');

// SERVER CONFIGURATION
// ====================

server.use(express["static"](__dirname + "/../public"));

var hbs = exphbs.create({
    partialsDir: [
        './public/js/app/templates/partials'
    ]
});

server.engine('handlebars', hbs.engine);
server.set('view engine', 'handlebars');
server.set('views', './public/js/app/templates/layouts');

server.use(errorhandler({
        dumpExceptions: true,
        showStack: true
    })
);

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
server.use(multer()); // for parsing multipart/form-data

server.use(server.router);

// API
// ===

API.api(server, schema);

// Start Node.js Server
http.createServer(server).listen(port);

console.log('\n\nWelcome to Stacked!\n\nPlease go to http://localhost:' + port + ' to start using Require.js and Backbone.js\n\n');
