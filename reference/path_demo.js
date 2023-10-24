const path=require('path');

//Base filr name
console.log(path.basename(__filename));

//Dircetory name

console.log(path.dirname(__filename));

//file extension

console.log(path.extname(__filename))

//create path object
console.log(path.parse(__filename))
console.log(path.parse(__filename).base)

// concatenate paths
//../text/hello.html
console.log(path.join(__dirname,'test','hello.html'))