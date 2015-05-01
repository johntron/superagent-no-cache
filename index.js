var ie
try {
  ie = require('ie')
} catch (e) {
  ie = require('component-ie')
}

function with_query_strings (request) {
  request._query = [Date.now().toString()]
  return request
}

module.exports = function _superagentNoCache (request, mockIE) {
  request.set('X-Requested-With', 'XMLHttpRequest')
  request.set('Cache-Control', 'no-cache,no-store,must-revalidate,max-age=-1')

  if (ie || mockIE) {
    with_query_strings(request)
  }

  return request
}
