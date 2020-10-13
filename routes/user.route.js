const express = require('express')
const route = express.Router()
const userPost = require('../controller/user.post')
const userPut = require('../controller/user.put')
const userGet = require('../controller/user.get')
const userDelete = require('../controller/user.delete')


route.post('/user/post', userPost)
route.get('/user/specific', userGet)
route.put('/user/put', userPut)
route.delete('/user/delete', userDelete)
route.get('/user', require('../controller/user.allget'))
route.get('/user/emails', require('../controller/user.email.send'))
route.put('/user/update', require('../controller/user.modify'))

module.exports = route