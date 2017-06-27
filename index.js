var rp = require('request-promise-native');

module.exports = function(url) {
  return new Promise((resolve, reject) => {
    rp({
      url: url,
      method: 'HEAD',
      mode: 'no-cors'
    })
      .then(result => {
        resolve({
          exists: /4\d\d/.test(result.statusCode) === false,
          headers: result
        });
      })
      .catch(reason => {
        if (
          reason.error.code === 'ENOTFOUND' ||
          /4\d\d/.test(reason.statusCode)
        ) {
          resolve({ exists: false });
        } else {
          reject(reason);
        }
      });
  });
};
