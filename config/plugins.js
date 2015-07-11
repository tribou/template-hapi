module.exports = [{
  register: require('lout')
}, {
  register: require('good'),
  options: {
    opsInterval: 5000,
    reporters: [{
      reporter: require('good-console'),
      events: {log: '*', request: '*', response: '*', error: '*'}
    }]
  }
}];
