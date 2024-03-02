const fs = require("fs")

// create file 
const createfile = ()=>{
    fs.writeFileSync("text.txt","new data")
}
createfile()

// read file
const readfile = ()=>{
    const readfile =  fs.readFileSync("text.txt","utf-8")
      console.log(readfile)
    }

//  update file
const updatefile = ()=>{
    fs.writeFileSync("text.txt","update data")
}


//  delet file
const deletfile = ()=>{
    fs.unlinkSync("text.txt")
}


function  function_runing  (){
    readfile()
    createfile()
    deletfile()
    updatefile()
}

function_runing()





