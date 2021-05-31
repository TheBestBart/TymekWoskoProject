const User = require("../model/Users")
const utils = require("../utils");
const bcrypt = require('bcrypt');

const register = async (req, res, next) => {
    try {
        const object = utils.getRequestObject(req);
        console.log('object', object);

        const { username, password } = object;
        console.log('username', username)

        const user = await User.findOne({ username });

        if (user)
            return res.status(404).render('error', {
                message: "Nazwa użytkownika jest zajęta"
            });

        const salt = await bcrypt.genSalt(10);
        const secretPassword = await bcrypt.hash(password, salt);
        const newUser = new User({ ...object, password: secretPassword });
        const savedUser = await newUser.save();

        console.log('new user', savedUser)

        if (savedUser) {
            req.newUser = newUser;

            return next();
        }

        return res.render('error', {
            message: 'Coś poszlo nie tak...',
        });

    } catch (error) {
        console.log('error', error)
        return res.render('error', {
            message: error
        });
    }
}

module.exports = register;