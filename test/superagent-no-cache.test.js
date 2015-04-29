var expect = require('chai').expect

var MockBrowser = require('mock-browser').mocks.MockBrowser
var mock = new MockBrowser()

document = mock.getDocument()

var nocache = require('../index')

/* Definitions for JS Standard */
/* global describe, it */

describe('superagent-no-cache', function () {
  it('should return a function', function (done) {
    expect(nocache).to.be.a('function')
    done()
  })
})
