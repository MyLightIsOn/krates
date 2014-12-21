// API
// ===

module.exports.api = function(server, Song) {

	// Sample Rest Call

	server.get('/test', function(req, res){
        var silence = new Song(
            { artist: 'Lawrence' }
        );

		res.send(silence.albumImage);
	});

};
