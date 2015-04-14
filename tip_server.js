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
var db = new sqlite3.Database('blog.db')

//routes

//home redirect
app.get('/', function(req, res) {
	res.redirect('/home')
});

//show all posts
app.get('/posts', function(req, res) {
	db.all("SELECT * FROM posts", function(err, data) {
		if (err) {
			console.log(err);
		} else {
			var posts = data;
		}
		res.render('index.ejs', {posts: posts});
	});
});

//show individual post
app.get('/post/:id', function(req, res) {
	var id = req.params.id
	db.get("SELECT * FROM posts WHERE id = ?", id, function(err, data) {
		if (err) {
			console.log(err)
		} else {
			var individualPost = data;
		}
		res.render('show.ejs', {individualPost: individualPost});
	});
});

//new post form
app.get('/posts/new', function(req, res) {
	res.render('new.ejs')
});

//create a post
app.post('/posts', function(req, res) {
	var titleInput = req.body.title
	var textInput = req.body.text
	var imageInput = req.body.image
	db.run("INSERT INTO posts (title, text, image) VALUES (?, ?, ?)", titleInput, textInput, imageInput, function(err) {
			if (err) {
				console.log(err)
			} else {
				res.redirect('/posts')
			}
	});
});

//edit post form
app.get('/post/:id/edit', function(req,res) {
	var id = req.params.id
	db.get("SELECT * FROM posts WHERE id =")
})









app.listen(8888);
console.log('You\'re listening on port 8888')