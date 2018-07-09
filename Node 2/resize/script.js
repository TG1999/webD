var resize=require('resize-img');
var fs=require('fs');
fs.readFile("logo.png",(err,data)=>
{
    if (err) throw err;
    resize(data,{width:200, height:200}).then((buf)=>{
        fs.writeFileSync("logo1.png",buf);
    })
})
