/**
 * Created by Administrator on 2018/1/5.
 */
var express=require("express");
var cookieParser=require("cookie-parser");

//cookie
var server=express();

//cookie-parser是一个中间件，
server.use(cookieParser("dasdasdaeqweq2"));

server.use("/", function (req,res) {
    //获取cookie
    req.secret="dasdasdaeqweq2";
    res.cookie("user1","chenhe",{signed:true});
    res.cookie("user2","chenhe2");
    //获取到所有签过名的cookie
    console.log('签名cookie：', req.signedCookies);
    //获取没签过名的cookie
    console.log('无签名cookie：', req.cookies);
    res.clearCookie("user1");
    res.send("ok");


})


server.listen(8081);

