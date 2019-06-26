var express = require('express');
var app = express();


var documentController=function(req, res){
  console.log("Entity list");
  var entity = [
    {id:1, Documents:"Files"},
    {id:2, Images:"URL"},
    {id:3, Source_code:"files"}
  ];
  res.send(document);
};
 

app.get('/document',documentController);

var server = app.listen(8087, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://localhost:8087", host, port)
})