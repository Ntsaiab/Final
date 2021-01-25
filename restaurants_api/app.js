require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = process.env.PORT || 3000;
const collectionController = require('./controllers/collections');
const commentsController = require('./controllers/comments')
const MONGOURI = process.env.MONGODB_URI;
const User = require('./models/user');

const SECRET = 'thisisthebestlifeeversomanygoodthingsyettobedonewiththesehandsofmine'

app.use(cors());
app.use(express.json());

mongoose.connect(MONGOURI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: true
})

mongoose.connection.on('error', (err) => {
    console.log(err.message)
}) 
mongoose.connection.on('disconnected', () => {
    console.log('Baby, come back...you can blame it all on me')
})
mongoose.connection.once('open', () => {
    console.log('Connected, United and Protected')
})

app.use('/collections', collectionController);
app.use('/comments', commentsController);

// authentication route
app.post('/api/register', (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    User.create(req.body, (err, createdUser) => {
        if(err) {
            res.status(400).json(err)
        } else {
            res.status(200).json(createdUser)
        }
    })
})
// find user and compare passwords
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    try{
        const user = await User.findOne({ username })
        if(bcrypt.compareSync(password, user.password)) {
            const token = jwt.sign({
                username: user.username
            }, SECRET)
            res.status(200).json({
                token,
                username, 
                authenticated: true
            })
        }
    } catch (error){
        res.status(400).json(error)
    }
})

app.listen(PORT, () => {
    console.log('Keep Calm and Show Trust', PORT, '%');
});

module.exports = app;