/**
 * Created by Administrator on 2018/1/4.
 */
const express=require("express");

const  bodyParser=require("body-parser");

var server=express();

server.use(function (req,res,next) {//访问任何路径都可以执行
    req.a=12;//数据可以传递，在下一个操作中可以用得到
    next();
})
server.use("/", function (req,res) {//访问根目录执行
    console.log(req.a);
})
server.listen(8081);