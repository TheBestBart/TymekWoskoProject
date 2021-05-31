const User = require("../../model/Users")

const addUser = async (req, res) => {
    try {
        
        const newUser = new User(user);
        const savedUser = await newUser.save();

        if (savedUser) {
            return res.status(201).send({
                success: true,
                message: 'ok',
                savedUser
            })
        }

        return res.status(500).send({
            success: false,
            message: 'wrong',
        })


    } catch (error) {
        console.log('error', error);
        return res.status(500).send({
            success: false,
            message: 'Sometheing went wrong...',
        })
    }
}

module.exports = addUser;