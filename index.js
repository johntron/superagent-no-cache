var isNode = Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]'

function with_query_strings (request) {
  var timestamp = Date.now().toString()
  if (request._query !== undefined && request._query[0]) {
    request._query[0] += '&' + timestamp
  } else {
    request._query = [timestamp]
  }

  return request
}

module.exports = function _superagentNoCache (request, mockIE) {
  request.set('X-Requested-With', 'XMLHttpRequest')
  request.set('Expires', '-1')
  request.set('Cache-Control', 'no-cache,no-store,must-revalidate,max-age=-1,private')

  if ((!isNode && require('component-ie')) || mockIE) {
    with_query_strings(request)
  }

  return request
}
