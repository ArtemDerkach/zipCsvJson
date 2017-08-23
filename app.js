const fs = require('fs');
const csv = require('csv');
const unzip = require('unzip-stream');

// get custom function to parse array of data
const arrToJson = require('./arrToJson.js');

fs.createReadStream(`${__dirname}/${process.argv[2]}`)
  .pipe(unzip.Parse())
  .on('entry', entry => entry
    // the next 3 methods can be changed by:
    // .pipe(csv.parse({ delimiter: "||", from: 2 }))
    // but the error while parsing occures (at line 732),
    // it does not happanes if unzip manually
    // TODO: find out how not to dance with trombone (fix the probl)
    .pipe(csv.parse({ delimiter: '|' }))
    .pipe(csv.stringify())
    .pipe(csv.parse({ delimiter: ",,", from: 2 }))
    // transform array into beautiful json
    .pipe(csv.transform(data => arrToJson(data)))
    // transform json to string
    .pipe(csv.transform(data => JSON.stringify(data, null, 2)))
    // add comma and newline to each object
    .pipe(csv.transform(data => `${data},\n`))
    // write string to file
    .pipe(fs.createWriteStream(`${__dirname}/${process.argv[3] || 'data.json'}`, { flags: 'a' }))
  );

