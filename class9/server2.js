/**
 * Created by Administrator on 2018/1/3.
 */
var express=require("express");
var expressStatic=require("express-static");

var server=express();


server.use(expressStatic('./www'));
server.listen(8081)