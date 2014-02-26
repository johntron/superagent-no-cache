var no_cache = require('superagent-no-cache').with_query_strings,
	request = require('superagent'),
	test;

test = request.get('/test.js').use(no_cache).end(function () {
console.info(test._query);
});
