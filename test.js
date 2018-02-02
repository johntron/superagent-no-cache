var assert = require('assert')
var nocache = require('./index.js')

function mockRequest() {
    return {
        data: {},
        set: function (arg1, arg2) {
          this.data[arg1] = arg2
        }
    }
}

describe ('X-Requested-With, Expires, and Cache-Control headers', function() {
    var expected = {
        'X-Requested-With': 'XMLHttpRequest',
        'Expires': '-1',
        'Cache-Control': 'no-cache,no-store,must-revalidate,max-age=-1,private'
    }

    it('should be set when using default exports', function() {
        var results = nocache(mockRequest())
        Object.keys(expected).forEach(function (header) {
            assert(results.data[header] === expected[header], header + ' === ' + expected[header])
        })
    })

    it('should be set when using withQueryStrings export', function() {
        var results = nocache.withQueryStrings(mockRequest())
        Object.keys(expected).forEach(function (header) {
            assert(results.data[header] === expected[header], header + ' === ' + expected[header])
        })
    })
})

describe('withQueryStrings export', function () {
    it('should set query string', function () {
        var results = nocache.withQueryStrings(mockRequest())
        assert(/^\d+$/.test(results._query[0]), 'random digits')
    })

    it('should append to existing query string', function () {
        var request = mockRequest()
        request._query = ['existing']

        var results = nocache.withQueryStrings(request)
        assert(/^existing&\d+$/.test(results._query[0]), 'append random digits')
    })
})

it('works with IE (example - use with third-party "component-ie" package)', function () {
    var isIE = true; // replace with: var isIE = require('ie')
    var finalNocache = isIE ? nocache.withQueryStrings : nocache;
    var results = finalNocache(mockRequest())
    assert(/^\d+$/.test(results._query[0]), 'query string present when IE')
})
