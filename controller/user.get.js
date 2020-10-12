const UserModel = require('../model/user.model')
const httpStatus = require('http-status')
const mongoose = require('mongoose')
module.exports = (req, res) => {
    if (!req.query.userid) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Missing password is required")
    } else {
        UserModel.find({
                // password: req.query.password
                // email: req.query.email
                _id: req.query.userid
            }).then(result => res.json(result)).catch(err => console.log(err))
            // UserModel.find({ _id: mongoose.Types.ObjectId(req.query.userid) }).then(result => res.json(result)).catch(err => console.log(err))
    }
}