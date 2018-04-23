/**
 * Created by Administrator on 2018/1/5.
 */
var express=require("express");
var cookieParser=require("cookie-parser");
var cookieSession=require("cookie-session");

//cookie
var server=express();

var arr=[]
for(var i=0;i<10000;i++){
    arr.push("sign_"+Math.random());
}
//cookie-parser是一个中间件，
server.use(cookieParser());
server.use(cookieSession({
    name:"sess",//sessionid的名字
    keys:arr,
    maxAge:"毫秒"//session的有效期
}))
server.use("/", function (req,res) {
    if(req.session['count']==null){
        req.session['count']=1;
    }else{
        req.session['count']++;
    }
    console.log(req.session["count"]);
    res.send("ok");//必须有，代表一次访问结束
})


server.listen(8081);

