var assert = require('assert');
var async = require('async');
var urlExists = require('..');

function cleared(done) {
  console.log('☑️');
  done();
}

async.series([
  done => {
    console.log("urlExists('https://www.google.com')");
    urlExists('https://www.google.com')
      .then(result => {
        assert(result.exists === true);
        cleared(done);
      })
      .catch(reason => {
        assert(false);
        done();
      });
  },
  done => {
    console.log("urlExists('https://www.google.com/bajskorvr')");
    urlExists('https://www.google.com/bajskorvr')
      .then(result => {
        assert(result.exists === false);
        cleared(done);
      })
      .catch(reason => {
        assert(false);
        done();
      });
  },
  done => {
    console.log("urlExists('https://www.gasdasdaslkajsdlkadsadoogle.com')");
    urlExists('https://www.gasdasdaslkajsdlkadsadoogle.com')
      .then(result => {
        assert(result.exists === false);
        cleared(done);
      })
      .catch(reason => {
        assert(false);
        done();
      });
  },
  done => {
    console.log(
      "urlExists('http://static.bbci.co.uk/frameworks/barlesque/3.21.17/orb/4/img/bbc-blocks-light.png')"
    );
    urlExists(
      'http://static.bbci.co.uk/frameworks/barlesque/3.21.17/orb/4/img/bbc-blocks-light.png'
    )
      .then(result => {
        assert(result.exists === true);
        assert(result.headers['content-type'] === 'image/png');
        cleared(done);
      })
      .catch(reason => {
        assert(false);
        done();
      });
  },
  done => {
    console.log('All tests pass!');
    process.exit(0);
  }
]);
