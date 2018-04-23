/**
 * Created by Administrator on 2018/1/4.
 */
const express=require("express");
const  expressStatic=require("express-static");

var server=express();
server.use("/", function (req,res) {
    console.log(req.query);
    res.send(req.query);
})
server.listen(8081);