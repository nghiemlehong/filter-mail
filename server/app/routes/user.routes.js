const {UserService} = require('../services/user.service')
const express = require('express')
const { User } = require('../models/user.model')

const userRouter  = express.Router()

userRouter.post('/login',(req,res)=>{
    const {username, password} = req.body
    UserService.login(username, password)
    .then(user=>res.send({success : true, user}))
    .catch(res.onError)
})

userRouter.post('/signUp',(req,res)=>{
    const {username, plainPassword, name } = req.body
    UserService.signUp(username, plainPassword, name)
    .then(user=>res.send({success : true, user}))
    .catch(res.onError)
})

module.exports = {userRouter}