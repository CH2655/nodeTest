/**
 * Created by Administrator on 2018/1/5.
 */
var express=require("express");
var cookieParser=require("cookie-parser");

//cookie
var server=express();

//cookie-parser��һ���м����
server.use(cookieParser("dasdasdaeqweq2"));

server.use("/", function (req,res) {
    //��ȡcookie
    req.secret="dasdasdaeqweq2";
    res.cookie("user1","chenhe",{signed:true});
    res.cookie("user2","chenhe2");
    //��ȡ������ǩ������cookie
    console.log('ǩ��cookie��', req.signedCookies);
    //��ȡûǩ������cookie
    console.log('��ǩ��cookie��', req.cookies);
    res.clearCookie("user1");
    res.send("ok");


})


server.listen(8081);

