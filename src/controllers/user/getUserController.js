const User = require("./../../model/Users");
const mongoose = require("mongoose");

const getUser =  async (req, res) => {
    const { isAdmin, user } = req;

    try {
        const { id } = req.params;
        const foundUser = isAdmin || id === user ? await User.findOne({_id: id}) : null;

        if(foundUser){
            return res.render('customer/list', {
                data: [foundUser],
                title: 'Lista Uzytkowników'
            })
        }

        return res.render('error', {
            message: "brak danych...",
            title: 'Node Project',
        });

    } catch(error) {
        console.log('error', error);
        return res.render('error', {
            message: error,
            title: 'Node Project',
        }); 
    }
}

module.exports = getUser;