const express= require("express");
const router= express.Router();
const BlogController=require("../controllers/BlogController");
const authController=require("../controllers/authController");


router.post("/auth/register", authController.register);
router.post("/auth/login", authController.login);
router.post("/blog/save", BlogController.saveBlog);

module.exports= router;