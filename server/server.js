const express = require("express")
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require(__dirname+'/models/user_model.js')

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/parklik')

app.post("/api/signup", async function(req,res){
    console.log(req.body);
    try {
        const user = await User.create({
            firstname :req.body.firstname,
            lastname : req.body.lastname,
            email: req.body.email,
            password : req.body.password
        })
        res.json({status :'ok'})
    } catch (err){
        console.log(err)
        res.json({status: 'error', error :'duplicate email'})
    }
})

app.post("/api/login", async function(req,res){
        const user = await User.findOne({
            email: req.body.email,
            password : req.body.password
        })
        if(user){
            return res.json({status: 'ok',user: true})
        }else{
            return res.json({status: 'error', user: false})
        }
})

app.listen("5000",function(req,res){
    console.log("the port is running on port 5000")
})

