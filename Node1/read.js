var fs=require('fs');
var url="";
fs.readFile('mynewfile3.txt',  function (err,data) {
    if (err) throw err;
    
    fs.writeFile("file4.txt",data.toString(),function(err)
{
if (err) throw err;
console.log(data.toString());
});
  });
  console.log("tushar goel");
module.exports()
  