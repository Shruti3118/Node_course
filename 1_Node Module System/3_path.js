const path = require('path')
//to extract the extension of a file
let ext = path.extname('D:\project folder node\Node Module System\f1.txt')
console.log(ext)
let basename = path.basename('D:\project folder node\Node Module System\f1.txt')
console.log(basename)
//security issue - use double slashes for path
let basename1 = path.basename('D:\\project folder node\\Node Module System\\f1.txt')

console.log(basename1)

console.log(__filename)

console.log(__dirname)
