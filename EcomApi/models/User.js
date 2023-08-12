const mongoose = require('mongoose')    

const UserSchema = new mongoose.Schema({
    username: { type: String, required :true, unique: true},
    email:{ type: String, required: true, unique: true},
    password:{type: String, required: true},
    inAdmin: {
        type: Boolean,
        default: false
    },
},
{timestamps: true}                   // use for when the data is added to database we get time info alse
)

module.exports = mongoose.model('User', UserSchema);