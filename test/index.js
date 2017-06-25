var assert = require('assert');

var urlExists = require('..');

urlExists('https://www.google.com')
  .then(exists => {
    assert(exists === true);

    urlExists('https://www.google.com')
      .then(exists => {
        assert(exists === true);

        urlExists('https://www.gasdasdoogle.com')
          .then(exists => {
            assert(exists === false);
            console.log('All tests pass!');
            process.exit(0);
          })
          .catch(reason => {
            assert(false);
          });
      })
      .catch(reason => {
        assert(false);
      });
  })
  .catch(reason => {
    assert(false);
  });
