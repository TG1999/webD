function startfun(){
    let start=new Date().getTime();
    while(new Date().getTime()-start<5000);
    document.getElementById('msg').innerText="END";
}
let c=0;
function counter(){
c++
console.log(c);
document.getElementById('cntr').innerText=c;
}