const jwt = require("jsonwebtoken");
var config = require('../../config')

const getRequestObject = req => {
    if(req.method === "POST") {
        return req.body;
    }

    if(req.mothod === 'GET') return req.query

    return;
} 

const createToken = user => {
    return jwt.sign(
        { id: user._id},
        config.SECRET, {
          expiresIn: 60 * 60
        }
      );
}


module.exports = { getRequestObject: getRequestObject, createToken: createToken };