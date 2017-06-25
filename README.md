# promised-url-exists
A simple node library to determine if an url exists, now with native promises. [Forked from this](https://github.com/boblauer/url-exists)

## Usage

```javascript
var urlExists = require('promised-url-exists');

urlExists('https://www.google.com')
  .then(exists => {
    console.log(exists); // true
  })
  .catch(error => {
    console.log(error);
  });

urlExists('https://www.fakeurl.notreal')
  .then(exists => {
    console.log(exists); // false
  })
  .catch(error => {
    console.log(error);
  });
```
