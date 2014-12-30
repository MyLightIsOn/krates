// DEPENDENCIES
// ============

var Config = configApp();
    express = require("express"),
    errorhandler = require("errorhandler"),
    exphbs = require("express-handlebars"),
    bodyParser = require('body-parser'),
    multer = require('multer'),
    http =    require("http"),
    path = require('path'),
    port =    (process.env.PORT || Config.listenPort),
    dbName =  (process.env.DB_NAME || Config.database.name),
    server =  module.exports = express(),
    mongoose = require('mongoose'),
    API =     require('./API');


function configApp(){

    switch(process.env.NODE_ENV){
        case 'development' :
            return require('./config/config.js').config;

        case 'production' :
            return process.env

    }
}

function configDB(){
    switch(process.env.NODE_ENV){
        case 'development' :
            return 'mongodb://' + Config.database.IP + ':' + Config.database.port + '/' + Config.database.name;

        case 'production' :
            return process.env.MONGOLAB_URI

    }
}

// DATABASE CONFIGURATION
// ======================

// Connect to Database
mongoose.connect(configDB());

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error:'));
db.once('open', function callback () {
    console.log('Connected to ' + dbName);
});

// DATABASE SCHEMAS
// ================

var schema = require('./schemas/songSchema');

// SERVER CONFIGURATION
// ====================

console.log(server.get('env'));
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

console.log('\n\nEnvironment ' + process.env.NODE_ENV + 'Welcome to Stacked!\n\nPlease go to http://localhost:' + port + ' to start using Require.js and Backbone.js.\n\n');
