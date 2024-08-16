const { Router } = require("express");
const User = require("../models/user.model");

const router = Router();

router.get("/signin", (req, res) => {
  return res.render("signin");
});

router.get("/signup", (req, res) => {
  return res.render("signup");
});

router.post("/signin", (req, res) => {
  const { email, password } = req.body;
  const user = User.matchPassword(email, password);
  console.log(user);
  return res.redirect("/");
});

router.post("/signup", async (req, res) => {
  const { fullName, email, password } = req.body;
  await User.create({
    fullName,
    email,
    password,
  });
  return res.redirect("/");
});

module.exports = router;
