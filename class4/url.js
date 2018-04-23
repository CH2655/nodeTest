/**
 * Created by Administrator on 2017/12/27.
 */
var urlLib=require("url");

var obj=urlLib.parse("http://www.baidu.com/index/search?a=5&b=2");

console.log(obj);
console.log(obj.pathname);//请求路径
console.log(obj.query);//前端传过来的数据