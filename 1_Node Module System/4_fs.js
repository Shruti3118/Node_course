const fs = require('fs')
/*
//read
let fileContent = fs.readFileSync('f1.txt')

console.log('file1 data: '+ fileContent)

//write 
//if file name does not exist, it creates a new file and writes data into it
//deletes og content and put write new content
fs.writeFileSync('f2.txt', 'Helloooo f2 hu mai')

console.log('File written')

//append
//adds to the content 
fs.appendFileSync('f3.txt',' Adding to chaos')

console.log('Pahuch gaye')

//delete
fs.unlinkSync('f2.txt')

*/

//create a directory

//fs.mkdirSync('myDirectory')

//check content inside of a directory

//let folderPath = 'D:\\project folder node\\Node Module System\\myDirectory'

//let folderContent = fs.readdirSync(folderPath)

//console.log('folder content ', folderContent)

//check whether directory exists or not

let doeExist = fs.existsSync('1_cp.js')

console.log(doeExist)

// remove directory

fs.rmdirSync('myDirectory')

console.log('directory deleted')