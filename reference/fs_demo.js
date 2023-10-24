const { isUtf8 } = require('buffer');
const fs=require('fs');
const path=require('path');

//create folder

// fs.mkdir(path.join(__dirname,'/test'),{}, err => {
//     if(err) throw err;
//       console.log('folder cerated')
    
// });

//create file and write


// fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Hello world!!', err => {
//     if(err) throw err;
//       console.log('file written');

//       fs.appendFile(path.join(__dirname,'/test','hello.txt'),'Node js', err => {
//         if(err) throw err;
//           console.log('file written')
        
//     });
    

// });

//Read file

// fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8', (err,data) => {
//         if(err) throw err;
//           console.log(data)
        
//     });
    

//Rname file

fs.rename(path.join(__dirname,'/test','hello.txt'),path.join(__dirname,'/test','helloworld.txt'), (err) => {
    if(err) throw err;
      console.log('Renamed')
    
});
