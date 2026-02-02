const { Router } = require("express");

const {
  registerUser,
  loginUser,
  editUser,
  getAuthors,
  changeAvatar,
  getUser,
} = require("../controllers/userControllers");
const authMiddleware = require("../middleware/authMiddleware");

const router = Router();

router.get("/", getAuthors);
router.get("/:id", getUser);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/change-avatar", authMiddleware, changeAvatar);
router.patch("/edit-user", authMiddleware, editUser);

module.exports = router;
