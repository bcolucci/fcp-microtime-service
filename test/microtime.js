'use strict';

const sinon = require('sinon')
  , microtime = require('..');

describe('Should converts unix timestamp / natural date', function () {

  const NOW = Date.now();

  before(function () { sinon.stub(Date, 'now').returns(NOW); });
  after(function () { Date.now.restore(); });

  it('should only accepts a string', function () {
    const assertInvalidType = function (fn) { fn.should.throw(microtime.INVALID_TYPE_ERROR); };
    [ null, undefined, NaN, 42, 42.0, [], {} ]
      .forEach(function (value) { assertInvalidType(() => microtime.convert(value)); });
    microtime.convert('21, Mar 2016').should.be.ok;
  });

  it('should returns now timestamp if string is empty', function () {
    const assertNull = function (value) {
      microtime.convert(value).should.be.deepEqual(microtime.NULL_OUTPUT);
    };
    [ '', ' ', '\n' ].forEach(assertNull);
  });

  it('should converts from natural format', function () {
    const myDateStr = 'Sat Mar 21 2015';
    microtime.convert(myDateStr).should.be.deepEqual({
      natural: myDateStr,
      unix: new Date(myDateStr).getTime()
    });
  });

  it('should converts from timestamp format', function () {
    const myDateStr = 'Tue Sep 27 1988'
      , myDateTimestampStr = String(new Date(myDateStr).getTime());
    microtime.convert(myDateTimestampStr).should.be.deepEqual({
      natural: myDateStr,
      unix: new Date(myDateStr).getTime()
    });
  });

});
