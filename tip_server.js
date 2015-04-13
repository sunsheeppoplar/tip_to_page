//app requirements

var express = require('express')
var app = express();

var ejs = require('ejs')
app.set("view_engine", 'ejs')

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))

var methodOverride = require('method-override')
app.use(methodOverride('_method'))

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/blog.db')

//routes

//home redirect
app.get('/', function(req, res) {
	res.redirect('/home')
});

//show all posts
app.get('/home', function(req, res) {
	db.all("SELECT * FROM posts")
})











app.listen(8888);
console.log('You\'re listening on port 8888')