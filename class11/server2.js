/**
 * Created by Administrator on 2018/1/5.
 */
var express=require("express");
var cookieParser=require("cookie-parser");

//cookie
var server=express();

//cookie-parser��һ���м����
server.use(cookieParser());

server.use("/aaa/a.html", function (req,res) {


    //��ȡcookie
    console.log(req.cookies)

    res.send("ok");
})
server.listen(8081);

