console.log("Start......");
function login(uname,password,cb){
    setTimeout(()=>{
        cb({uname:uname , isLoggedIn:true , Message:"Login Successfull"})
    },1000);
}
function getVideoList(email,cb){
    setTimeout(()=>{
        cb([(title:"Video 1"},{title:"Video2" })])  
    },2000);

}
login("john@gmail.com","password123",(userdata)=>
    console.log(userdata);
    getVideoList(userdata.uname,(videoList)=>
        console.log(videoList );
        getVideoList(videoList[0],(videoDetail)=>{
            console.log(videoDetail)
        });
    }));

});
