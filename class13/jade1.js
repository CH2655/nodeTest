/**
 * Created by Administrator on 2018/1/9.
 */
const jade=require("jade");

var str=jade.renderFile("./views/5.jade",{pretty:true,name:"blue"});
console.log(str);