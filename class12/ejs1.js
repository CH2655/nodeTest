/**
 * Created by Administrator on 2018/1/9.
 */
const ejs=require("ejs");

ejs.renderFile("./views/1.ejs",{name:"chenhe"},function (err,data){
    if(err){
        console.log("编译失败")
    }else{
        console.log(data)
    }
});