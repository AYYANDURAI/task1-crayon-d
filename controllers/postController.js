const Post = require('../model/postModel');


exports.getAllThePosts = async (req, res) => {
    try {
        const posts = await Post.find();

        res.status(200).json({
            status: 'success',
            result: posts.length,
            posts: posts
        });
    }
    catch (err) {
        res.status(500).json({
            status: 'fail',
            message: err.message
        });
    }

}

exports.createPost = async (req, res) => {
    try {
        const newPost = await Post.create(req.body);

        res.status(201).json({
            status: 'success',
            post: newPost
        });
    } catch (err) {
        res.status(500).json({
            status: 'fail',
            message: err.message
        });
    }

}