const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        pic: { type: String, required: true, default: 'https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1692602312~exp=1692602912~hmac=e5fabe5f82c6e479405295069e6fba1fbb5b147f2bb8b055b88c9f7786bf8fa8' }
    },
    {
        timeStamps: true
    }
)

const user = mongoose.model('user', userSchema)

module.exports = user;