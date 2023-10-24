const http = require('http');
const path=require('path');
const fs =require('fs');
const { default: _default } = require('next/dist/client/router');

const server =http.createServer((req,res)=>{
   
    // if(req.url == '/'){
    //   fs.readFile(path.join(__dirname,'public','index.html'),
    //   (err,content)=>{

    //     if(err) throw err;
    //     res.writeHead(200,{'content-Type':'text/html'});
    //     res.end(content)
    //   })  
    // }
    


  
    //Build file path

    let filepath=path.join(__dirname,'public',req.url=== '/' ?
    'index.html':req.url);
    
    // console.log(filepath)
    // res.end()

    //Extension of file
    let extname=path.extname(filepath)

    //Initial content type
    let contentType='text/html';

    //check  ext and set content type
    switch(extname){

        case '.js':
            contentType='text/javascript';
        case '.css':
            contentType='text/css';
        case '.json':
            contentType='application/json';
        case '.png':
            contentType='img/png';
        case '.jpg':
            contentType='img/jpg';
        break;
    }


//Read File
fs.readFile(filepath,(err,content)=>{
    if (err){
        if(err.code =='ENOENT'){
            //page not found
            fs.readFile(path.join(__dirname,'public','400.html'),
                (err,content)=>{
                    res.writeHead(200,{'content-Type':'text/html'});
                    res.end(content,'utf8');
                }
            )
        }
        else{
            //some server error
            res.writeHead(500);
            res.end(`server error: ${err.code}`)
        }
    }
    else{
        //scess
        res.writeHead(200,{'content-Type':contentType});
      git  res.end(content,'utf8');
    }
})

    

})
const PORT=process.env.PORT || 5000;

server.listen(PORT,()=>console.log(`server running on port ${PORT}`));