const loginForm = (req, res) => {
    return res.clearCookie('user').clearCookie('session').render('login', {
        title: 'Node Project',
        message: ''
    })
}

module.exports = loginForm