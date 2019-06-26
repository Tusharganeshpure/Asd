var express = require('express');
var app = express();


var entityController=function(req, res){
  console.log("Entity list");
  var entity = [
    {Customerid:114, Customer:"Tushar",Amount:100000},
    {Customerid:204, Customer:"Rajesh",Amount:20000},
    {Customerid:331, Customer:"Akshay",Amount:500000}
  ];
  res.send(entity);
};
 

app.get('/entity',entityController);

var server = app.listen(7000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://localhost:8087", host, port)
})