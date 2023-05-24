const express = require("express");
const ViteExpress = require("vite-express");
const {login, register} = require('./controllers/auth')
const db = require('./util/db')
const {User, Post, Like, Goal} = require('./util/models')
require("dotenv").config()

const {PORT} = process.env
const app = express();
app.use(express.json())

//! associations 
User.hasMany(Post)
Post.belongsTo(User)

Like.belongsTo(Post)
Post.hasMany(Like)

Like.belongsTo(User)
User.hasMany(Like)

User.hasMany(Goal)
Goal.belongsTo(User)

app.post('/register', register)
app.post('/login', login)

db.sync()


ViteExpress.listen(app, PORT, () =>
  console.log("Server is listening on port 3003...")
);
