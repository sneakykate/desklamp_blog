const Post = require('./postModel');


const postController = {};

postController.getAllPosts = (req, res, next) => {
  Post.find({}, (err, posts) => {
    res.json(posts);
  });
};

postController.createPost = (req, res, next) => {
  Post.create(new Post(req.body), (err) => {
    if (err) {
      return res.status(401).json({
        err,
      });
    }
    res.send(200);
  });
};

module.exports = postController;
