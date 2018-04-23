/**
 * Created by Administrator on 2018/1/11.
 */
const ejs=require("ejs");

var str=ejs.renderFile("./views/4.ejs",{},function (err,data){
    console.log(data);
})
