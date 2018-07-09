const http=require('http');var fs=require('fs');
http.get('http://example.com',(res)=>{
res.setEncoding('binary');
res.on('data',(chunk)=>{
console.log(chunk.toString());
}
)
res.on('end',()=>{
    console.log("downloaded");
})
})