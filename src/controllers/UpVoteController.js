const mongoose = require('mongoose');
const Post = require("../models/Post");

module.exports = {
 async update(req, res) {
  const { _id } = req.body.headers;
  const { postUpVotes } = await Post.findById(_id)

  const upVotesUpdated = await Post.findByIdAndUpdate(_id, { postUpVotes: (postUpVotes + 1) }, [mongoose.set('useFindAndModify', false)]);

  return res.json(upVotesUpdated);
 }
}