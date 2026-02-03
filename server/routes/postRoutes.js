const { Router } = require("express");

const {
  createPost,
  deletePost,
  editPost,
  getPost,
  getPosts,
  getCatPosts,
  getUserPosts,
} = require("../controllers/postControllers");

const authMiddleware = require("../middleware/authMiddleware");

const router = Router();

router.post("/", authMiddleware, createPost);
router.get("/", getPosts);
router.get("/:id", getPost);
router.get("/users/:id", getUserPosts);
router.get("/categories/:category", getCatPosts);
router.patch("/:id", authMiddleware, editPost);
router.delete("/:id", authMiddleware, deletePost);

router.get("/", (req, res, next) => {
  res.json("this is post route");
});

module.exports = router;
