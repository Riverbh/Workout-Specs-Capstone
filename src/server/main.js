const express = require("express");
const ViteExpress = require("vite-express");
const {login, register} = require('./controllers/auth')
const db = require('./util/db')

const app = express();

app.post('/api/register', register)
app.post('/api/login', login)

db.sync()


ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
