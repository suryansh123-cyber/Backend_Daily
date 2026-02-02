const fs = require('fs');
fs.writeFile("output.txt", "hello my name is suryansh and currently i am learning node js",(err)=>{
    if(err) console.log('error occurred');
    else console.log("file created succesfully");
})