const express = require('express');
const app = express();
const path = require('path')
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const config = require('config');
const port = config.port;

let user = require("./app/routes/user.router");

let options = { 
    server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }, 
    replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } 
}; 

mongoose.connect(config.mongo.url, options);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))

if(config.util.getEnv('NODE_ENV') !== 'test'){
    app.use(morgan("combined"))
}

app.use(express.static('dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text())
app.use(bodyParser.json({type: 'application/json'}))

app.get('/api/v1', (req, res)=> res.json({message: "Welcome to User API"}) );

app.route("/api/v1/users")
    .get(user.getUsers)
    .post(user.createUser)

app.route("/api/v1/users/:id")
    .get(user.getUser)
    .delete(user.deleteUser)
    .put(user.updateUser)

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(port);
console.log(`Listening on port ${port}`);

module.exports = app;