'use strict';

const isString = value => 'string' === typeof(value);
const cleanStr = str => str.replace(/[^a-z0-9\s]/gi, '').trim();
const isTimestamp = str => null !== str.match(/^[0-9]+$/);

const INVALID_TYPE_ERROR = new Error('Invalid type, string expected.');

const NULL_OUTPUT = { unix: null, natural: null };
const output = unix => {
  return {
    unix: unix,
    natural: new Date(unix).toDateString()
  };
};

const convert = date => {

  if (!isString(date))
    throw INVALID_TYPE_ERROR;

  const cleanedDateStr = cleanStr(date);

  // empty string, we return null
  if (0 === cleanedDateStr.length)
    return NULL_OUTPUT;

  // timestamp to natural
  if (isTimestamp(cleanedDateStr))
    return output(Number(cleanedDateStr));

  // natural to timestamp
  const dateObj = new Date(cleanedDateStr);

  // invalid natural date
  if (isNaN(dateObj.getTime()))
    return NULL_OUTPUT;

  return output(dateObj.getTime());
};

module.exports = {
  INVALID_TYPE_ERROR,
  NULL_OUTPUT,
  convert
};
