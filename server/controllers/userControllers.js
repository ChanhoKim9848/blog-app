const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/userModel");

const HttpError = require("../models/errorModel");

// =========== Register a user ============
// POST: api/users/register
// UNPROTECTED
const registerUser = async (req, res, next) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    if (!name || !email || !password) {
      return next(new HttpError("Fill in all fields", 422));
    }

    // change email to lowercase characters
    const newEmail = email.trim().toLowerCase();

    const emailExists = await User.findOne({ email: newEmail });
    if (emailExists) {
      return next(new HttpError("Email already exists", 422));
    }
    if (password.trim().length < 6) {
      return next(
        new HttpError("Password should be at least 6 characters", 422),
      );
    }

    if (password != confirmPassword) {
      return next(new HttpError("Passwords do not match", 422));
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      name,
      email: newEmail,
      password: hashedPassword,
    });
    res.status(201).json(`New user ${newUser.email} registered`);
  } catch (error) {
    return next(new HttpError("User registration failed", 422));
  }
};

// =========== Login a registered user ============
// POST: api/users/login
// UNPROTECTED
const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(new HttpError("Fill in all fields", 422));
    }
    const newEmail = email.trim().toLowerCase();

    const user = await User.findOne({ email: newEmail });
    if (!user) {
      return next(new HttpError("Invalid credentials", 422));
    }
    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      return next(new HttpError("Invalid credentials", 422));
    }

    const { _id: id, name } = user;
    const token = jwt.sign({ id, name }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.status(200).json({ token, id, name });
  } catch (error) {
    return next(new HttpError());
  }
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
