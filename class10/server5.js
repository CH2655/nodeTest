/**
 * Created by Administrator on 2018/1/4.
 */
const express=require("express");
const querystring=require("querystring");

const  bodyParser2=require("./my-body-parser");

var server=express();

server.use(bodyParser2.aaa());
server.use("/", function (req,res) {//���ʸ�Ŀ¼ִ��
    console.log(req.body);
})
server.listen(8081);