/**
 * Created by Administrator on 2018/1/12.
 */
const express=require('express');
const bodyParser=require('body-parser');
const multer=require('multer');
const fs=require('fs');
const path=require('path');

var multerObj=multer({dest:'./www/upload'});
var server=express();

//server.use(bodyParser.urlencoded({extended:false}));//只能接受数值型的数据
server.use(multerObj.any());//能够接收文件型的数据
server.post("/",function (req,res){
    var originalName=req.files[0].originalname;
    //新文件名：原始文件名+"扩展名"
     var newNanme=req.files[0].path+path.parse(originalName).ext
    //1.原始文件的扩展名
    //2.文件重命名
    fs.rename(req.files[0].path,newNanme,function (err){
        if(err){
            res.send("上传失败");
        }else{
            res.send("上传成功");
        }
        res.end();
    })
})
server.listen(8081);