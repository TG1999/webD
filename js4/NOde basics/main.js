if(typeof window==='undefined'){
 lib=require('./lib')
}
else{
    lib=window;
}
console.log(lib.a(29))
console.log(lib.a(9))
console.log(this);