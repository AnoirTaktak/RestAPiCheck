
const express = require('express');
const connect = require('./config/connectdb');
const User = require('./models/User');

require('dotenv').config({ path: './config/.env' })
var app = express();
connect();
PORT = process.env.PORT || 5000 ;
app.listen(PORT, err => err ? console.log(err) : console.log('le serveur est active sur le port : '+PORT));
app.use(express.json());
app.post('/adduser',async(req,res) => {
    const {name,email,phone} = req.body;
    try {
        const newUser = new User ({
            name,
            email,
            phone,
        }) ;
        await newUser.save();
        res.send('the user '+name+' added succesfully');
    } catch (error) {
        console.log(error)
    }
});

app.get('/getusers',async(req,res) => {
   const users = await User.find();
   res.send(users);
});

app.put('/updateusers/:id',async(req,res) => {
    try {
        await User.findByIdAndUpdate(req.params.id,{...req.body});
        res.send('the user updated succesfully');
    } catch (error) {
        console.log(error)
    }
});

app.delete('/deleteusers/:id',async(req,res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.send('the user deleted succesfully');
    } catch (error) {
        console.log(error)
    }
});