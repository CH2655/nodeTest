/**
 * Created by Administrator on 2018/1/9.
 */
const jade=require("jade");
const fs=require("fs");

var str=jade.renderFile("./views/9.jade",{pretty:true});

fs.writeFile("./build/jade.html",str,function (err,data){
    if(err){
        console.log("д��ʧ��")
    }else{
        console.log("д��ɹ�")
    }
})
console.log(str);