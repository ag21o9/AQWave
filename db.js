const mongoose = require('mongoose')
// const db = mongoose.connect('')

const schema = mongoose.Schema({
    firstname:String,
    lastname:String
})
const schema2 = mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    mobile:String,
    desc:String

})

const data = new mongoose.model('data',schema)
const data2 = new mongoose.model('datac',schema2)


module.exports = data;
module.exports = data2;
