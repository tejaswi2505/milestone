/*const http=require("http");
const fs=require("fs");

const server=http.createServer((req,res)=>{
    fs.readFile("sample.txt",(err,data)=>
    {
        res.end(data);
    })
});
server.listen(3000);*/

const readline=require("readline");
const lineDetail=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});
lineDetail.question(`please provide name-`,(name)=>{
    console.log(`Hi $(name)!`);
    lineDetail.close();
});