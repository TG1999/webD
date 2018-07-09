const https=require('https');
const fs=require('fs');
https.get('https://codingblocks.com/assets/images/cb/cblogo.png',(res)=>{
res.setEncoding('binary')
let img="";
res.on('data',(chunk)=>{
img=img+chunk;    
}
)
res.on('end',()=>{
    fs.writeFile("logo1.png",img,'binary',(err)=>{
        console.log(err);
    })
    console.log("downloaded");
})
})