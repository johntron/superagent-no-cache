module.exports = function(request) {
	request.headers = {
		'X-Requested-With': 'XMLHttpRequest',
		'Cache-Control': 'no-cache'
	};
	return request;
}