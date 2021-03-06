const mongoose = require('mongoose')


const schema = new mongoose.Schema({
  title: {type: String},
  categories: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Category'}], //关联查询
  body: {type: String}
}, {
  timestamps: true
})

module.exports = mongoose.model('Article', schema)
