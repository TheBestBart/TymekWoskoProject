const User = require("../../model/Users")

const deleteUser = async (req, res) => {
    const { isAdmin, user } = req;

    try {
        const { id } = req.params;
        const removedUser = (isAdmin || user === id )
            ?  await User.findOneAndRemove({ _id: id}, { new: true, useFindAndModify: false })
            :  null
        if(removedUser) {
            return res.send({ thisUserIsRemoved: id === user, isAdmin: isAdmin , success: true });
        }

        return res.render('error', {
            title: 'Node Project',
            message: "Coś poszło nie tak"
        });


    } catch (error) {
        console.log('error', error);
        return res.render('error', {
            title: 'Node Project',
            message: error
        });
    }
}

module.exports = deleteUser;