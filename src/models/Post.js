const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  postTitle: String,
  postText: String,
  postUpVotes: Number,
  postDownVotes: Number,
});

module.exports = mongoose.model("Post", PostSchema);
