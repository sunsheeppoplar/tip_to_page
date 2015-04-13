var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('blog.db');
db.run("INSERT INTO posts (title, text, image) VALUES (?, ?, ?)",
	'Tester', 'TEST!@#$%^&*()_', 'http://bestclipartblog.com/clipart-pics/-test-clipart-1.jpg',
	function(err) {
		if (err) {
			console.log(err);
		}
	}
)