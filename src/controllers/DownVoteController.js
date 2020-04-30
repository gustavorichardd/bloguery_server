const mongoose = require('mongoose');
const Post = require("../models/Post");

module.exports = {
 async update(req, res) {
  const { _id } = req.body.headers;
  const { postDownVotes } = await Post.findById(_id);

  const DownVotesUpdated = await Post.findByIdAndUpdate(_id, { postDownVotes: (postDownVotes + 1) }, [mongoose.set('useFindAndModify', false)]);

  return res.json(DownVotesUpdated);
 }
}
