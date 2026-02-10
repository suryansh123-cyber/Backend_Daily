let fs = require('fs/promises');
let path = __dirname+'/input.txt';
fs.readFile(path)
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})