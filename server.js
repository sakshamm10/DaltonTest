var express = require('express');
var request = require('request');

var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/nameentry', function(req,res){
    res.write('<html> <body>')
    res.write('<form action="combine" method="POST">')
    res.write('<input type="text" name="firstname">')
    res.write('<input type="text" name="lastname">')
    res.write('<button type="submit">Combine</button>')
    res.write('</form>')
    res.write('</body> </html>')
})


app.post('/combine', function(req, res){
    var firstname = req.body.firstname
    var lastname = req.body.lastname
    var fullname = firstname + ' ' + lastname
    console.log(fullname)
    res.json({"fullname": fullname})
});

var server = app.listen(8080, function(req,res){
    console.log("server started");
})