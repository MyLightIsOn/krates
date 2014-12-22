// API
// ===

module.exports.api = function(server, Song) {

	// Sample Rest Call
    server.get('/', function(req,res){
        res.send('/');
    });

    server.get('/form', function(req,res){
        res.render('form', function(err, html){
            console.log('Form Page status: ' + res.statusCode);
        });
    });

    server.get('/test', function(req, res){
        var silence = new Song(
            { artist: 'Lawrence' }
        );
        res.send('Test Page');
        console.log('Test Page status: ' + res.statusCode);
    });
};
