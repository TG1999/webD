function isadult(x)
{
    if(x>20)
    return "yes";
    else 
    return "no"
}
if(typeof window==='undefined'){
    module.exports={
        a:isadult
    }
}
