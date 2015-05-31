var Hapi = require('hapi');
var requireDir = require('require-directory');
var Config = requireDir(module, './config');

// Create a new server
var server = new Hapi.Server();

// Setup the server with a host and port
server.connection({
  host: Config.env.getServer().host,
  port: Config.env.getServer().port
});

// Add the server routes
server.route(Config.routes);

server.register(Config.plugins, function (err) {
  if (err) {
    return console.error(err);
  }

  // Export the server to be required elsewhere.
  module.exports = server;

  //Start the server
  server.start(function () {
    //Log to the console the host and port info
    console.log('Server started at: ' + server.info.uri);
  });
});
