function pro(num){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log(num);
            res();
        },1000)
    })
}
pro(1)
.then(()=>pro(2))
.then(()=>pro(3))
.then(()=>pro(4))
.then(()=>pro(5))
.catch(()=>{console.log("Error")})
