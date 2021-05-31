
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session')
var config = require('./config')
var path = require('path');
const loginForm = require('./src/controllers/basic/loginForm');

const userRouter = require("./src/routes/user")
const baseRouter = require("./src/routes/basic")


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieSession({
  name: 'session',
  keys: config.keySession,
  maxAge: config.maxAgeSession
}))

const port = process.env.PORT || 5000;
mongoose.connect(`mongodb+srv://${config.dbUser}:${config.dbPassword}@cluster0.wodwq.mongodb.net/node`, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('connected to db'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', baseRouter)
app.use('/api', userRouter);
app.use("*", (req, res) => { 
  return res
    .clearCookie("user")
    .clearCookie("session")
    .render("notFound", { title: "Node Project"})});

app.listen(port, () => console.log('Server up and running on http://localhost:5000'));