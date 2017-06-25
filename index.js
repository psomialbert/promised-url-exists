var request = require('request-promise-native');

module.exports = function(url) {
  return new Promise(function(resolve, reject) {
    request({ url: url, method: 'HEAD' })
      .then(result => {
        resolve(/4\d\d/.test(result.statusCode) === false);
      })
      .catch(error => {
        reject(error);
      });
  });
};
