const { Router } = require("express");

const routes = Router();

const PostController = require("./controllers/PostController");
const UpVoteController = require("./controllers/UpVoteController");
const DownVoteController = require("./controllers/DownVoteController");

routes.post("/posts/create", PostController.store);
routes.get("/posts/list", PostController.index);
routes.put("/posts/update", PostController.update);
routes.delete("/posts/delete", PostController.delete);

routes.put("/post/upvote", UpVoteController.update);
routes.put("/post/downvote", DownVoteController.update);

module.exports = routes;
