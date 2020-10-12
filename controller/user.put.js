const UserModel = require('../model/user.model')
const httpStatus = require('http-status')
module.exports = (req, res) => {
    if (!req.query.userid) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Missing User id is required")
    } else {
        UserModel.findOneAndUpdate({ _id: req.query.userid }, req.body, { new: true })
            .then(result => res.json(result)).catch(err => console.log(err))
    }
}