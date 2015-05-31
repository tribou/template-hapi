// Integration tests for root API calls ('/')

// Include all needed modules
var Code = require('code');
var Hapi = require('hapi');
var Lab = require('lab');
var requireDir = require('require-directory');
var Config = requireDir(module, '../../config');
var Routes = Config.routes;

// Create shortcuts for easier reading
var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
var expect = Code.expect;


describe('root', function () {

  it('replies with test success', function (done) {

    // Setup the server to start (but we will actually use the
    // 'inject' method instead of 'start')
    var server = new Hapi.Server();
    // Initialize your connection before your routes
    server.connection();
    // Pull in the production routes
    server.route(Routes);

    server.inject({
      method: 'GET',
      url: '/'
    }, function (res) {

      var payload = JSON.parse(res.payload);

      expect(res.statusCode).to.equal(200);
      expect(payload.test).to.contain('success');
      done();
    });
  });
});
