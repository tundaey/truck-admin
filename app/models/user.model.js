const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {type: String, required: true},
    role: {type: String, required: true},
    forename: {type: String, required: true},
    surname: {type: String, required: true},
    created: {type: Date, default: Date.now},
}, {versionKey: false}
)

UserSchema.pre('save', next=> {
    now = new Date();
    if(!this.created){
        this.created = now
    }
    next()
})

module.exports = mongoose.model('User', UserSchema)