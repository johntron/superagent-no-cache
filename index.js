module.exports = function (request) {
	request.set('X-Requested-With', 'XMLHttpRequest');
	request.set('Cache-Control', 'no-cache,no-store,must-revalidate,max-age=-1');
	return request;
}
module.exports.with_query_strings = function(request) {
	request._query = [Date.now().toString()]
	return module.exports(request);
};
