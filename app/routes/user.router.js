const User = require('../models/user.model');

function getUsers(req, res){
    let query = User.find({});
    query.exec((err, users)=> {
        if(err) res.send(err);
        res.json(users)
    })
}

function getUser(req, res){
    let id = req.params.id
    let query = User.findById(id, (err, user)=> {
        if(err) return res.send({status: false, errors: err});
        res.json(user)
    })
}

function createUser(req, res){
    let newUser = new User(req.body)
    newUser.save((err, user)=> {
        if(err) return res.send(err);
        res.json({message: "Successfully created user", user})
    })
}

function deleteUser(req, res) {
    User.remove({_id : req.params.id}, (err, result) => {
        if(err) return res.status(206).send(err)
        res.json({ message: "User successfully deleted!", result });
    });
}

function updateUser(req, res) {
    User.findById({_id: req.params.id}, (err, user) => {
        if(err) res.send(err);
        Object.assign(user, req.body).save((err, user) => {
            if(err) res.send(err);
            res.json({ message: 'User updated!', user });
        }); 
    });
}

module.exports = { getUsers, createUser, getUser, deleteUser, updateUser };