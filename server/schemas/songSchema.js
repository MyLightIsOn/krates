// DEPENDENCIES
// ============

var mongoose =     require('mongoose'),
    Schema =     mongoose.Schema,
    objectID =     Schema.ObjectID;

// SONG SCHEMA
// ===================

var songSchema = new Schema({
    title: {type: String, default: 'N/A'},
    artist: {type: [String], default: 'N/A'},
    album: {type: String, default: 'N/A'},
    label: {type: String, default: 'N/A'},
    releaseDate: {type: String, default: 'N/A'},
    albumImage: {type: String, default: 'No Image'},
    genre: {type: [String], default: 'N/A'},
    length: {type: String, default: 'N/A'}
});

// SONG MODEL
// =====================

var Song = mongoose.model('songSchema', songSchema);
module.exports = Song;

// SONG METHODS
// ==============

/*module.exports.schemaGet = function(req, res) {
    Song.find({'key': 1}, function(err, docs){
        if (err) throw err;
        res.send(docs);
    });
};*/
