var server=require('express')();
server.get('/',(req,res)=>{
    res.send("<h1>hello world hi</h1>");
})
server.listen(8080,()=>{
    console.log("started listening at port:8080");
    
});