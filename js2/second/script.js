var b={
    p:"something",
    d:function()
    {
        console.log(this)
    },
    h:console.log(this)
}
console.log(b)
console.log(b.p)
b.h