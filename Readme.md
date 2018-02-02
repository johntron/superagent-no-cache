
# superagent-no-cache

  Plugin for visionmedia/superagent that adds headers to all requests that prevents
  caching

## Installation
### Using Component
  Install with [component(1)](http://component.io):

```bash
$ component install johntron/superagent-no-cache
```
### Using NPM / Browserify
```bash
$ npm install --save superagent-no-cache
```
## Usage
```javascript
var request = require('superagent')
var noCache = require('superagent-no-cache')

request.get('/url')
    .use(noCache)
    .end(function _requestCallback() {
        // do something
    });
```

## IE

IE is wonky - you'll need to use the named export, `withQueryStrings` if you want to prevent caching in some versions (which ones?):

```javascript
var request = require('superagent')
var noCache = require('superagent-no-cache')
var isIE = require('ie')
var finalNoCache = isIE ? noCache : noCache.withQueryStrings

request.get('/url')
    .use(finalNoCache)
    .end(function _requestCallback() {
        // do something
    });
```

## Contributing

```bash
yarn && yarn test
```

... or ...

```bash
npm install -g mocha
make test
```

## License

The MIT License (MIT)

Copyright (c) 2015 John Syrinek

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
