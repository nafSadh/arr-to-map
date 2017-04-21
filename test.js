var arrToMap = require('./index');

let fruitsArray = [
  {name:'mango', species:'Mangifera indica'},
  {name:'orange', species:'Citrus reticulata'}
];

let fruitsMap = arrToMap(fruitsArray, 'name');

console.log(fruitsMap);