// Unit tests for Config.env

// Include all needed modules
var Code = require('code');
var Hapi = require('hapi');
var Lab = require('lab');
var requireDir = require('require-directory');
var Config = requireDir(module, '../../config');

// Create shortcuts for easier reading
var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
var expect = Code.expect;


describe('Config.env.getServer()', function () {

  it('should return 8000 if process.env.PORT is not set', function (done) {

    delete process.env.PORT;
    var expected = 8000;

    var result = Config.env.getServer();

    expect(result.port).to.equal(expected);
    done();

  });

  it('should return process.env.PORT for port if set', function (done) {

    var expected = 1234;
    process.env.PORT = expected;

    var result = Config.env.getServer();

    expect(result.port).to.equal(expected);
    done();

  });
});
