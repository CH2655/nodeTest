/**
 * Created by Administrator on 2018/1/4.
 */
const express=require("express");
const querystring=require("querystring");

const  bodyParser2=require("./my-body-parser");

var server=express();

server.use(bodyParser2.aaa());
server.use("/", function (req,res) {//访问根目录执行
    console.log(req.body);
})
server.listen(8081);