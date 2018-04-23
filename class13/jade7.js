/**
 * Created by Administrator on 2018/1/9.
 */
const jade=require("jade");

var str=jade.renderFile("./views/13.jade",{pretty:true});
console.log(str);
