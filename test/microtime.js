'use strict';

const sinon = require('sinon')
  , microtime = require('..');

describe('Should converts unix timestamp / natural date', () => {

  const NOW = Date.now();

  before(() => {
    sinon.stub(Date, 'now').returns(NOW);
  });
  after(() => {
    Date.now.restore();
  });

  it('should only accepts a string', () => {
    const assertInvalidType = fn => fn.should.throw(microtime.INVALID_TYPE_ERROR);
    [ null, undefined, NaN, 42, 42.0, [], {} ]
      .forEach(value => assertInvalidType(() => microtime.convert(value)));
    microtime.convert('21, Mar 2016').should.be.ok;
  });

  it('should returns now timestamp if string is empty', () => {
    const assertNull = value => microtime.convert(value).should.be.deepEqual(microtime.NULL_OUTPUT);
    [ '', ' ', '\n' ].forEach(assertNull);
  });

  it('should converts from natural format', () => {
    const myDateStr = 'Sat Mar 21 2015';
    microtime.convert(myDateStr).should.be.deepEqual({
      natural: myDateStr,
      unix: new Date(myDateStr).getTime()
    });
  });

  it('should converts from timestamp format', () => {
    const myDateStr = 'Tue Sep 27 1988'
      , myDateTimestampStr = String(new Date(myDateStr).getTime());
    microtime.convert(myDateTimestampStr).should.be.deepEqual({
      natural: myDateStr,
      unix: new Date(myDateStr).getTime()
    });
  });

});
