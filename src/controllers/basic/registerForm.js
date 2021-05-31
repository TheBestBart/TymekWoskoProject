const registerForm = (req, res) => {
    return res.clearCookie('user').clearCookie('session').render('register', {
        title: 'Node Project',
        message: ''
    })
}

module.exports = registerForm