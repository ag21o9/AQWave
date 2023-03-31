const mongoose = require('mongoose')
// const db = mongoose.connect('')

const schema = mongoose.Schema({
    firstname:String,
    lastname:String
})

const data = new mongoose.model('data',schema)


module.exports = data;
