const User = require("./../../model/Users");
var ObjectId = require('mongodb').ObjectId;

const getAllUsers =  async (req, res) => {
    const { user, isAdmin } = req;
    try {
        const foundUsers =  isAdmin ? await User.find() : await User.findById(user);

        if(foundUsers){
            return res.render('customer/list', {
                data: isAdmin ? foundUsers : [foundUsers],
                title: 'Node Project',
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

module.exports = getAllUsers;