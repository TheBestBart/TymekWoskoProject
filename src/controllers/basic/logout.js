
  const logout = (req, res) => {
      console.log('tutaj jestem ale nie wiem czy dzialam')
    return res.clearCookie('user').clearCookie('session').redirect(303, '/api/addUser')
  }

  module.exports = logout;