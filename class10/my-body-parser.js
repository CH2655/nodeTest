/**
 * Created by Administrator on 2018/1/4.
 */
var querystring=require("querystring");
module.exports= {
    aaa:function ()
    {
        return function (req, res, next){
            //�����κ�·��������ִ��
            var str = "";
            req.on("data", function (data) {
                str += data;
            })
            req.on("end", function () {
                req.body = querystring.parse(str);
                next()
            })
        }
    }
}