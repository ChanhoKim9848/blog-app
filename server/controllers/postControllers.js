const Post = require("../models/postModel");
const User = require("../models/userModel");
const path = require("path");
const fs = require("fs");
const { v4: uuid } = require("uuid");
const HttpError = require("../models/errorModel");

// ============ CREATE POST ==============
// POST: api/posts
// PROTECTED
const createPost = async (req, res, next) => {
  res.json("Create Post");
};

// ============ GET ALL POSTS ==============
// GET: api/posts
// UNPROTECTED
const getPosts = async (req, res, next) => {
  res.json("GET ALL Posts");
};

// ============ GET SINGLE POST ==============
// GET: api/posts/:id
// UNPROTECTED
const getPost = async (req, res, next) => {
  res.json("GET A Post");
};

// ============ GET POSTS BY CATEGORY ==============
// GET: api/posts/categories/:category
// UNPROTECTED
const getCatPosts = async (req, res, next) => {
  res.json("Get category post");
};

// ============ GET AUTHOR POST ==============
// GET: api/posts/users/:id
// UNPROTECTED
const getUserPosts = async (req, res, next) => {
  res.json("get user post");
};

// ============ EDIT POST ==============
// PATCH: api/posts/:id
// PROTECTED
const editPost = async (req, res, next) => {
  res.json("edit post");
};

// ============ DELETE POST ==============
// DELETE: api/posts/:id
// PROTECTED
const deletePost = async (req, res, next) => {
  res.json("Delete post");
};

module.exports = {
  createPost,
  deletePost,
  editPost,
  getPost,
  getPosts,
  getCatPosts,
  getUserPosts,
};
