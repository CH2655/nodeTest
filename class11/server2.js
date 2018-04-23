/**
 * Created by Administrator on 2018/1/5.
 */
var express=require("express");
var cookieParser=require("cookie-parser");

//cookie
var server=express();

//cookie-parser是一个中间件，
server.use(cookieParser());

server.use("/aaa/a.html", function (req,res) {


    //获取cookie
    console.log(req.cookies)

    res.send("ok");
})
server.listen(8081);

