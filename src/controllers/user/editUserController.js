const User = require("./../../model/Users");

const editUser =  async (req, res) => {
    const { isAdmin, user } = req;

    try {
        const { id } = req.params;
        console.log(req.params);
        console.log('body', req.body);

        const updatedUser = isAdmin || id === user ? await User.findOneAndUpdate({_id: id}, { ...req.body }) : null;

        if(updatedUser){
            return res.redirect(`/api/users/${updatedUser._id}`)
        }

        return res.redirect(`/api/users/login`)

    } catch(error) {
        console.log('Edit User Error: ', error);
        res.redirect(`/api/users/${updatedUser._id}`);
    }
}

module.exports = editUser;