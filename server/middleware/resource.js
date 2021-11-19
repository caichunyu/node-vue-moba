module.exports = options => {
  return async (req, res, next) => {
    const modelName = require('inflection').classify(req.params.resource) //复数转成类形式，加大写，去掉s
    req.Model = require(`../models/${modelName}`)
    next()
  }
}

