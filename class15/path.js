/**
 * Created by Administrator on 2018/1/12.
本地修改111111
 */
const path=require("path");

var str="c:\\wamp\\www\\a.html";

var obj=path.parse(str);
console.log(obj);

/*{ root: 'c:\\',
    dir: 'c:\\wamp\\www',
    base: 'a.html',
    ext: '.html',
    name: 'a' }*/
