const fs=require("fs")
 
//write file

// fs.writeFile("msg.txt","hello team",(error)=>{
//     if(error)
//     {
//         console.log("unable to write file");
        
//     }
// })

//appendfile


// fs.appendFile("msg.txt"," have a nice day",(error)=>{
//     if(error)
//     {
//         console.log("unable to append file");
        
//     }
// })

//read file

// fs.readFile("msg.txt","utf-8",(error,data)=>{
//     if(error)
//     {
//         console.log("unable to write file");
        
//     }
//     else
//     {
//         console.log(data);
        
//     }
// })
// delete file 

// fs.unlink("msg.txt",(error)=>{
//     if(error)
//     {
//         console.log("unable to delete");
        
//     }
// })

//create folder 

// fs.mkdir("hello",(error)=>
// {
//     if(error)
//     {
//         console.log("unable to create");
        
//     }
// })

//view data in folder 

fs.readdir("hello",(error,data)=>
{
    if(error)
    {
        console.log("unable to create");
        
    }
    else{
        console.log(data);
        
    }
})