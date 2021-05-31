/* eslint-disable @typescript-eslint/no-explicit-any */
const jwt = require("jsonwebtoken");
var config = require('../../config');
const User = require("../model/Users");

module.exports = async (req, res, next) => {
    try {
        const token = req.session.token;
        console.log(token);

        if (!token)
           return res.render('error', {
                message: "Brak dostępu..."
            });

        if (token) {
            const verified = jwt.verify(token, config.SECRET);
            const { id } = verified;
            const user = await User.findOne({ _id: id});

            if(user) {
                req.user = id;
                req.isAdmin = user.is_admin;

                return next();
            } else {
                return res.render('error', {
                    message: "Użytkownik nie istnieje..."
                });
            }
        } else {
            return res.render('error', {
                message: "Błedny token..."
            });
        }
    } catch (error) {
        console.log("VERIFY TOKEN MIDDLEWARE ERRORS", error);

        return res.render('error', {
            message: error
        });
    }
}
