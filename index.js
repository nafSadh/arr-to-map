'use strict';
/**
 * Created by nafSadh on 2017-04-21
 */

module.exports = function arrayToMap(array, keyField) {
  let map = {};
  for (let i in array) {
    let val = array[i];
    let key = array[i][keyField];
    map[key] = val;
  }
  return map;
};
