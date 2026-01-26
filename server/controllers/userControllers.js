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
// POST: api/users/:id
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

// =========== Edit user detail (from profile) ============
// POST: api/users/edit-user
// PROTECTED
const editUser = async (req, res, next) => {
  res.json("edit user detail");
};

// =========== Edit authors detail (from profile) ============
// POST: api/users/edit-user
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
