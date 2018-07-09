message=document.getElementById('msg');
function startfun(){
    let start=new Date().getTime();
    while(new Date().getTime()-start<5000);
    message.innerHTML="END";
}
count=document.getElementById('cntr');
let c=0;
function counter(){
c++
console.log(c);
count.innerText=c;
}