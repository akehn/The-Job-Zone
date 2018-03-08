var db = require('../models');
var something = 'hellow shit face :)';

exports.homepage = function(req, res){
	res.render("homepage.ejs", { myVar: req.user.username });
}

exports.log = function(req, res){
	res.render("log.ejs");
}

exports.account = function(req, res) {
	res.render("myAccount.ejs", { username: req.user.username });
}

exports.createPost = function(req, res){
    res.render("createPost.ejs", { myVar: req.user.username });
}

exports.search = function(req, res) {
	
	q = "";
	posts = [];

	if (req.query.q) {
        q = req.query.q;
		db.Post.findAll({attributes: ['id', 'title', 'description', 'contact_info'], where: {title: { like: '%'+req.query.q+'%' } }}).success(function(posts){
			res.render("search.ejs", { q: q, title: posts.title, description: posts.description, contact_info: posts.contact_info, posts: posts, myVar: req.user.username });

		});
    } else {
		db.Post.findAll().then(function(posts){
			res.render("search.ejs", { q: q, title: posts.title, description: posts.description, contact_info: posts.contact_info, posts: posts, myVar: req.user.username });
		});
	}
	
}