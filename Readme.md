
# superagent-no-cache

  Plugin for visionmedia/superagent that adds headers to all requests that prevents 
  caching
  
  *Note:* Until TJ merges [my pull request](https://github.com/visionmedia/superagent/pull/293) adding plugin support, you must use johntron/supermedia

## Installation

  Install with [component(1)](http://component.io):

```bash
$ component install johntron/superagent-no-cache
```
## API
```javascript
var request = require('request'),
    no_cache = require('superagent-no-cache');
  
request.get('/url')
    .use(no_cache)
    .end(function () {
        // do something
    });
```
## License

  MIT
