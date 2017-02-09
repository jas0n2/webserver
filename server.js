const express = require('express');
const hbs  = require('hbs');
const fs  = require('fs');

var app  = express();
hbs.registerPartials(__dirname + '/views/partials')
hbs.registerHelper('currentYear',()=>{
return new Date().getFullYear();
});
app.set('view engine','hbs'); 
app.use(express.static(__dirname + '/public'));
app.use((req,res,next)=>{

});
app.use((req,res,next)=>{
	var now = new Date().toString();
	var logs = `inside tex: ${now}: ${req.baseUrl}: ${req.method}`
	fs.appendFile('server.log',logs + '\n');
	console.log(`inside tex: ${now}: ${req.baseUrl}: ${req.method}`);
	next();
});

// app.use((req,res,next)=>{
// 	res.render('maintance.hbs');
// });



app.get('/',(req, res)=>{
res.render('home.hbs');
});




app.listen(3000);