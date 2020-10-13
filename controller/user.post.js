const UserModel = require('../model/user.model')
const httpStatus = require('http-status')
module.exports = (req, res) => {
    console.log(req.body);
    if (!req.body) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Body is missing")
    } else {
        await
        let model = new UserModel(req.body)
        model.save().then(result => {
            if (!result || result.length === 0) {
                res.status(400).send(result)
            } else {
                res.status(200).send(result)
            }
        }).catch(err => console.log(err))
    }
}