const UserModel = require('../model/user.model')

module.exports =
    async(req, res) => {
        if (!req.body) {
            res.status(400).send("Missing Body parameter please enter parameter")
        } else {
            const Updation = new Promise(async(resolve, reject) => {
                try {
                    // const result = await UserModel.find({
                    //         email: req.body.email
                    //     })
                    // console.log(result)
                    let { email, name } = req.body
                    if (email == undefined || name == undefined) {
                        return res.status(200).json({
                            status: 400,
                            message: "Fields missing",
                            data: []
                        })

                        // return reject(
                        //     res.status(200).json({
                        //         status: 400,
                        //         message: "Fields missing",
                        //         data: []
                        //     })
                        // )
                    }
                    let getUser = await user.findOne({ $and: [{ email: email }, { name: name }] })
                    if (getUser == null) {
                        console.log("Invalid Credentials..");
                        return res.sendStatus(400);
                    } else {
                        const solve = await UserModel.findOneAndUpdate({
                            email: email,
                            name: name
                                // password: result.password

                        })
                    }
                    resolve(solve)
                } catch (err) {
                    reject(err)
                }
                // Updation.then
            })
        }
    }