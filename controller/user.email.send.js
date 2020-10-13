const UserModel = require('../model/user.model')
const httpStatus = require('http-status')
module.exports = (req, res) => {
    if (!req.query) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Missing email is required")
    } else {
        new Promise(async(resolve, reject) => {
            try {
                const questionSolve = await UserModel.find({ email: req.query.email, password: req.query.password })
                    .then(result => res.send(result))
                    .catch(err => console.log(err))
            } catch (err) {
                reject(err)
            }
        })

    }
}