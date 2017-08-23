# zipCsvJson
transform zip file that contains csv jiles to JSON single file

## requirenments
- node.js
- npm
- git (optional)

## install
open the command line in directory you want to store module  

clone repository to local machine  
`$ git clone https://github.com/ArtemDerkach/zipCsvJson.git`  

open module folder  
`$ cd zipCsvJson`

install packages  
`$ npm install`

## usage
open command line in zipCsvJson folder 

run the next command  
`$ node app.js <path to zip file> <path to output file>`  
`<path to zip file>` - is the path to archive  
`<path to output file>` - output file path and name, if no param is given, save in current folder as data.json

## examples

### examle 1
```
|--zipCsvJson
  |--app.js
  |--package.json
  |--data.zip  
```
run current command  
`$ node app.js data.zip`

result:
```
|--zipCsvJson
  |--app.js
  |--package.json
  |--data.zip  
  |--data.json
```

### examle 2
```
|--data.zip 
|--zipCsvJson
  |--app.js
  |--package.json
```
run current command  
`$ node app.js ../data.zip ../personalData.json`

result:
```
|--data.zip  
|--personalData.json
|--zipCsvJson
  |--app.js
  |--package.json

```

## important
parse specific type of csv:
- csv delimiter "||" 
