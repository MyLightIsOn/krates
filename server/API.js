// API
// ===

module.exports.api = function(server, Song) {

    // Sample Rest Call
    server.get('/form', function(req,res){
        res.render('form', {
            adjective: "testing"
        })
    });
};
