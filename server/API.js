// API
// ===
var bodyParser = require('body-parser');

module.exports.api = function(server, Song) {
    /*server.use(bodyParser.json());*/

	// Sample Rest Call
    server.get('/', function(req,res){
        res.send('/');
    });

    server.post('/', function(req,res){
        res.send(req.body);
    });

    server.get('/test', function(req, res){
        var silence = new Song(
            { artist: 'Lawrence' }
        );
        res.send('Test Page');
        console.log('Test Page status: ' + res.statusCode);
    });
};
