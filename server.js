// var express = require('express')
// var app = express();
 
// app.configure(function(){
//     app.set('port', 18080);
//     app.set('views', __dirname + '/views');
//     app.use(express.bodyParser());
//     app.use(express.methodOverride());
//     app.use(express.cookieParser('expressdemo'));
//     app.use(express.session());
//     app.use(app.router);
//     app.use(express.errorHandler());
// });
 
// app.get('/ejs/:str', function(request, response){
//     var testStr = request.params.str;
//     response.render('ejstest.ejs', {title: testStr});
// });
 
// app.get('/jade/:str', function (request, response) {
//     var testStr = request.params.str;
//     response.render('jadetest.jade', {title: testStr});
// });
 
// app.listen(18080);


var express = require("express");
var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');

app.use(express.static(__dirname));

app.get('/', function(req, res){
    res.render('home.ejs', {name:'rocke'});
}); 

app.get('/request/:id', function(req, res){
    var locals = {name:'ROCKE', 'id':req.params['id']+' OK'};
    res.render('home.ejs', locals)
});

app.listen(18080);
