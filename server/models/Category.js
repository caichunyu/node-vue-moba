const mongoose = require('mongoose')


const schema = new mongoose.Schema({
  name: {type: String},
  parent: {type: mongoose.SchemaTypes.ObjectId,ref:'Category'}, //关联查询

})

module.exports = mongoose.model('Category', schema)
