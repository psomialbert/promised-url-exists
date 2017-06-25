var rp = require('request-promise-native');

module.exports = function(url) {
  return new Promise((resolve, reject) => {
    rp({ url: url, method: 'HEAD' })
      .then(result => {
        resolve(/4\d\d/.test(result.statusCode) === false);
      })
      .catch(reason => {
        if (reason.error.code === 'ENOTFOUND') {
          resolve(false);
        } else {
          reject(error);
        }
      });
  });
};
