// root (home) controller

module.exports = {
  index: {
    handler: function (request, reply) {
      // Render the view with the custom greeting
      reply({
        test: 'success!'
      });
    }
  }
};
