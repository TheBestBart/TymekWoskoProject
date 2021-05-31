
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");
const Users = require("../../model/Users");
const utils = require("../../utils")

module.exports = async (
  req,
  res
) => {
  const { body, newUser } = req;

  try {
    const { password, username } = body;
    const user = await Users.findOne({ username });

    if(newUser) {
        const token = utils.createToken(newUser);
        req.session.token = token;
        req.session.admin = newUser.is_admin;
        req.isAdmin = newUser.is_admin;

        return res.cookie("user", newUser._id).redirect('/api/users');
    }

    if (!user)
      return res.render('error', {
        message: "Niepoprawny email lub hasło"
    });

    const validPass = await bcrypt.compare(
      password,
      user.password
    );

    if (!validPass)
    return res.render('error', {
        message: "Niepoprawny email lub hasło"
    });

    const token = utils.createToken(user);

    req.session.token = token;
    req.session.id = user._id;
    req.isAdmin = user.is_admin;

    return res.cookie("user", user._id).redirect('/api/users');

  } catch (error) {
    console.log("LOGIN CONTROLLER ERROR:", error);
    return res.render('error', {
        message: error
    });
  }
};
