# arr-to-map
Simple function for converting arrays into maps by looking into one 'key' field 

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

Copyright (c) 2017, nafSadh <khan@nafSadh.com>
All rights reserved.