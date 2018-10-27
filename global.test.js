var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('./index');
var should = chai.should();

chai.use(chaiHttp);


describe('Server', function() {
  it('should be return code 200 and Hello World', function(done) {
    chai.request(server)
      .get('/')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
  });
});