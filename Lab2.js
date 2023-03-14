var _cal=require('./buoi3_lab2.js');
var express=require('express');
var app=express();
var bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "Lab2.html");
});

app.post("/", (req, res) => {
    console.log(req.body);
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    const phepTinh = req.body.phepTinh;

    switch(phepTinh){
        case "add":
            const tong = _cal.add(num1, num2);
            res.send('Tong cua '+num1+' va '+num2+' bang '+tong);
            break;
        case "sub":
            const hieu = _cal.sub(num1, num2);
            res.send(hieu);
            break;
        case "mul":
            const tich = _cal.mul(num1, num2);
            res.send(tich);
            break;
        case "div":
            const thuong = _cal.div(num1, num2);
            res.send(thuong);
            break;
    }


});
// app.get('/calADD',function(req,res){
//     var rs=0;
//     var a=parseInt(req.query.a);
//     var b=parseInt(req.query.b);
//     rs=_cal.add(a,b);
//     res.json(rs);
// });
// app.get('/calSUB',function(req,res){
//     var rs=0;
//     var a=parseInt(req.query.a);
//     var b=parseInt(req.query.b);
//     rs=_cal.sub(a,b);
//     res.json(rs);
// });
// app.get('/calMUL',function(req,res){
//     var rs=0;
//     var a=parseInt(req.query.a);
//     var b=parseInt(req.query.b);
//     rs=_cal.mul(a,b);
//     res.json(rs);
// });
// app.get('/calDIV',function(req,res){
//     var rs=0;
//     var a=parseInt(req.query.a);
//     var b=parseInt(req.query.b);
//     rs=_cal.div(a,b);
//     res.json(rs);
// });


app.listen(7749);

