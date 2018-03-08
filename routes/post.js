var db = require('../models');

exports.createPost = function(req, res) {
  res.render("createPost.ejs", { myVar: req.user.username });
};


