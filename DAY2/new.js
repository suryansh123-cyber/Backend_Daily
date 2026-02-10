let fs = require('fs');
let path = __dirname+'/input.txt';
fs.writeFile(path,'learning fs module writefile',(err)=>{
    if(err) throw err;
    console.log('file created successfully');
})