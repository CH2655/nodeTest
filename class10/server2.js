/**
 * Created by Administrator on 2018/1/4.
 */
const express=require("express");
const  expressStatic=require("express-static");
const  bodyParser=require("body-parser");

var server=express();

server.use(bodyParser.urlencoded({
    extended:false,
    limit:2*1024*1024  //2M
}))
server.use("/", function (req,res) {
    console.log(req.body);
})
server.listen(8081);