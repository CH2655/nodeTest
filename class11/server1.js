/**
 * Created by Administrator on 2018/1/5.
 */
var express=require("express");

var server=express();

server.use("/aaa/a.html",function (req,res){
    res.cookie("user","blue",{path:"/aaa",macAge:30*3600*1000});
    res.send("ok");
})
server.listen(8081)