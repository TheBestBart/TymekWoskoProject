const User = require("./../../model/Users");

const editUser =  async (req, res) => {
    const { isAdmin, user } = req;
    try {
        const { id } = req.params;
        console.log("body", req.body);
        const updatedUser = isAdmin || id === user ? await User.findOneAndUpdate({_id: id}, { ...req.body }) : null;

        if(updatedUser){
            console.log('tutaj')
            return res.send({ 
                userId: updatedUser._id,
                success: true 
            });
        }

        console.log('wyszedlem');
        return res.redirect(303, `/api/users/login`)

    } catch(error) {
        console.log('Edit User Error: ', error);
        return res.redirect(303, `/api/users/login`);
    }
}

module.exports = editUser;