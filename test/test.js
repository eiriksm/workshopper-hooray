var wh = require('..');
var fs = require('fs');
require('should');

describe('Module functionality', function() {
  it('Should expose a function', function() {
    wh.should.be.instanceOf(Function);
  });
  it('Should pass when invoking function with no params', function() {
    wh();
  });
  it('Should call callback if we pass it as param 1', function(done) {
    wh(function(e, r) {
      done(e);
    });
  });
  it('Should call callback with expected text if we pass callback as as param 2', function(done) {
    wh('test', function(e, r) {
      r.should.equal(fs.readFileSync('./test/expected.txt').toString('utf8'));
      done(e);
    });
  });
});
