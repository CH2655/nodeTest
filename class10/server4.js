/**
 * Created by Administrator on 2018/1/4.
 */
const express=require("express");

const  bodyParser=require("body-parser");

var server=express();

server.use(function (req,res,next) {//�����κ�·��������ִ��
    req.a=12;//���ݿ��Դ��ݣ�����һ�������п����õõ�
    next();
})
server.use("/", function (req,res) {//���ʸ�Ŀ¼ִ��
    console.log(req.a);
})
server.listen(8081);