/**
 * Created by Administrator on 2018/1/9.
 */
const jade=require("jade");

var str=jade.renderFile("./views/6.jade",{pretty:true,name:"blue",a:12,b:5});
console.log(str);