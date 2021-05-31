
  const logout = (req, res) => {
    return res.clearCookie('user').clearCookie('session').redirect(303, '/api/addUser')
  }

  module.exports = logout;