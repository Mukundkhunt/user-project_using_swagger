const UserModel = require('../model/user.model')
const httpStatus = require('http-status')
module.exports = (req, res) => {
    if (!req.query.userid) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Missing User id  is required")
    } else {
        UserModel.findOneAndRemove({ _id: req.query.userid })
            .then(result => res.json(result)).catch(err => console.log(err))
    }
}