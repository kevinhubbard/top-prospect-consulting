var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var port = process.env.PORT || 8080;


app.use(express.static('public'));
app.use(express.static('node_modules'));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.get('/', (req,res) => {
	res.render('index');
});

app.get('/difference', (req,res) => {
	res.render('difference');
});

app.get('/solutions', (req,res) => {
	res.render('solutions');
});

app.get('/markets', (req,res) => {
	res.render('markets');
});

app.get('/contact', (req,res) => {
	res.render('contact');
});

app.get('/apply', (req,res) =>{
	res.render('apply');
})

app.listen(port, ()=> console.log(`Listening on port ${port}`));