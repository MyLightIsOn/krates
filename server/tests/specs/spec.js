// SERVER SIDE TEST SUITE
var request = require('superagent'),
	expect = require('expect.js'),
    http = require("http"),
	app = require('../../server.js');


// BEFORE HOOK
before(function(){
	this.server = http.createServer(app).listen(1337);
});

// AFTER HOOK
after(function(done){
	this.server.close(done);
});

// TEST SUITES
describe('API: GET /test', function() {
	it('Should Return 200', function(done) {
		request.get('localhost:3000/test').end(function(res) {
			expect(res).to.exist;
			expect(res.status).to.equal(200);
			done();
		});
	});
});