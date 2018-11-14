/* eslint-env node, mocha */
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/index');

// eslint-disable-next-line no-unused-vars
const should = chai.should();

chai.use(chaiHttp);
describe('Server', () => {
  it('should be return code 200 and Hello World', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.message.should.equal('Hello World!');
        done();
      });
  });

  it('should return a 404', (done) => {
    chai.request(server)
      .get('/unknow')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
});
