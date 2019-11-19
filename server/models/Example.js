const mongoose = require('mongoose')
const Schema = mongoose.Schema

const exampleSchema = new Schema({
    key: {type: String, required: true}
})
const Example = mongoose.model('Example', exampleSchema)

module.exports = Example