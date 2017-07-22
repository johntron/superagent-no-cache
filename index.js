module.exports = function _superagentNoCache (request) {
  request.set('X-Requested-With', 'XMLHttpRequest')
  request.set('Expires', '-1')
  request.set('Cache-Control', 'no-cache,no-store,must-revalidate,max-age=-1,private')

  return request
}

module.exports.withQueryStrings = function _queryStringCacheBuster(request) {
  var timestamp = Date.now().toString()
  if (request._query !== undefined && request._query[0]) {
    request._query[0] += '&' + timestamp
  } else {
    request._query = [timestamp]
  }

  return module.exports(request)
}
