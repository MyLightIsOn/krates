// API
// ===

module.exports.api = function(server, Song) {
    server.get('/', function(req,res){
        res.render('form');
        console.log('Form page loaded. Satus:' + res.statusCode + 'on Home');
    });

    server.get('/form', function(req,res){
        res.render('form');
        console.log('Form page loaded. Satus:' + res.statusCode);
    });

    server.post('/form', function(req,res){

        new Song(req.body).save(function(err){
            if(err){
                res.send(err);
            } else {
                res.send(req.body)
            }
        });

        console.log(req.body);
    });

    server.all('*', function(req, res){
        res.send(404);
    })
};
