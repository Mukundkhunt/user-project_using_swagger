const mongoose = require('mongoose')
const { Schema } = require('mongoose')
mongoose.connect('mongodb+srv://mukund:mukund123@mukund.aodqs.mongodb.net/Semicolon_Solution?retryWrites=true&w=majority', { useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: true })
    .then(() => console.log("Database is connected"))
    .catch(err => console.log(err))

module.exports =
    mongoose.model("User_info", new Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    }, {
        collation: "User_info",
        timestamps: true
    }))