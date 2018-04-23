/**
 * Created by Administrator on 2018/1/9.
 */
const jade=require("jade");

var str=jade.renderFile("./views/10.jade",{pretty:true,name:"blue",a:5,b:20});
console.log(str);