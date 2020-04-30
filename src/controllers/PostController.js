const mongoose = require('mongoose');
const Post = require("../models/Post");

module.exports = {
  async store(req, res) {
    const { postTitle, postText } = req.body;

    const post = await Post.create({
      postTitle,
      postText,
      postUpVotes: 0,
      postDownVotes: 0
    })

    return res.json(post)
  },

  async index(req, res) {
    const posts = await Post.find();
    
    return res.json(posts)
  },

  async update (req, res) {
    const { postTitle, postText } = req.body;
    const { postcode } = req.headers;

    const posts = await Post.replaceOne({_id: postcode}, {postTitle, postText } )

    return res.json(posts)
  },

  async delete (req, res) {
    const { postcode } = req.headers;
    const post = await Post.deleteOne({_id: postcode})

    return res.json(post)
  }
};


