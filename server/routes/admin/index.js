const Category = require("../../models/Category");
const {model} = require("mongoose");
module.exports = app => {
  const express = require('express')
  const router = express.Router({
    mergeParams: true //合并路由参数
  }) //子路由

  router.post('/', async (req, res) => {
    const model = await req.Model.create(req.body)
    res.send(model);
  }) // 新建分类
  router.put('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model);
  }) // 编辑分类
  router.delete('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    });
  }) // 删除分类
  router.get('/', async (req, res) => {
    const items = await req.Model.find().populate('parent').limit(10)
    res.send(items);
  }) // 查询全部分类
  router.get('/:id', async (req, res) => {
    const model = await req.Model.findById(req.params.id)
    res.send(model);
  }) // 查询指定id分类


  app.use('/admin/api/rest/:resource', async (req, res, next) => {
    const modelName = require('inflection').classify(req.params.resource) //复数转成类形式，加大写，去掉s
    req.Model = require(`../../models/${modelName}`)
    next()
  }, router)
}
