const express = require('express')
const route = express.Router()
const userPost = require('../controller/user.post')
const userPut = require('../controller/user.put')
const userGet = require('../controller/user.get')
const userDelete = require('../controller/user.delete')


route.post('/post', userPost)
route.get('/specific', userGet)
route.put('/put', userPut)
route.delete('/delete', userDelete)
route.get('/', require('../controller/user.allget'))
route.get('/emails', require('../controller/user.email.send'))

module.exports = route