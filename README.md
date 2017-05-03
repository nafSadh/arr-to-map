# arr-to-map
Simple function for converting arrays into maps by looking into one 'key' field 

[![npm](https://img.shields.io/npm/v/arr-to-map.svg)](https://www.npmjs.com/package/arr-to-map)
[![Gitter](https://img.shields.io/gitter/room/nafsadh/lobby.svg)](https://gitter.im/nafSadh/Lobby)



# Install
To install run following command

`npm install arr-to-map`

To add it to your project's package.json run

`npm install arr-to-map --save`

# Usage

```javascript 
var arrToMap = require('arr-to-map');

let fruitsArray = [
  {name:'mango', species:'Mangifera indica'},
  {name:'orange', species:'Citrus reticulata'}
];

let fruitsMap = arrToMap(fruitsArray, 'name');

console.log(fruitsMap);

```

# License
BSD 2-Clause License

Copyright © 2017, nafSadh http://nafSadh.com
All rights reserved.
