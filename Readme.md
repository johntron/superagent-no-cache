
# no-cache

  Plugin for visionmedia/superagent that adds headers to all requests that prevents 
  caching
  
  *Note:* Until TJ merges [my pull request](https://github.com/visionmedia/superagent/pull/293) adding plugin support, you'll have to 
  use johntron/supermedia

## Installation

  Install with [component(1)](http://component.io):

    $ component install johntron/no-cache

## API

	var request = require('request'),
		no_cache = require('no-cache');
		
	request.get('/url')
		.use(no_cache)
		.end(function () {
			// do something
		});

## License

  MIT
