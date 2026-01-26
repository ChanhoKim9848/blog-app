// =========== Register a user ============
// POST: api/users/register
// UNPROTECTED
const registerUser = async (req, res, next) => {
  res.json("register user");
};

// =========== Login a registered user ============
// POST: api/users/login
// UNPROTECTED
const loginUser = async (req, res, next) => {
  res.json("login user");
};

// =========== User Profile ============
// GET: api/users/:id
// PROTECTED
const getUser = async (req, res, next) => {
  res.json("get user");
};

// =========== Change user avatar (profile picture) ============
// POST: api/users/change-avatar
// PROTECTED
const changeAvatar = async (req, res, next) => {
  res.json("change user avatar");
};

// =========== Get all authors ============
// GET: api/users/
// PROTECTED
const editUser = async (req, res, next) => {
  res.json("get authors");
};

// =========== Edit authors detail (from profile) ============
// GET: api/users/:id
// UNPROTECTED
const getAuthors = async (req, res, next) => {
  res.json("edit user detail");
};

module.exports = {
  registerUser,
  loginUser,
  editUser,
  getAuthors,
  changeAvatar,
  getUser,
};
