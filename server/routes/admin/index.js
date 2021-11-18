const Category = require("../../models/Category");
const {model} = require("mongoose");
const AdminUser = require("../../models/AdminUser");
module.exports = app => {
  const express = require('express')
  const jwt = require('jsonwebtoken')
  const AdminUser = require('../../models/AdminUser')

  const router = express.Router({
    mergeParams: true //合并路由参数
  }) //子路由

//创建资源
  router.post('/', async (req, res) => {
    const model = await req.Model.create(req.body)
    res.send(model);
  }) // 新建分类
  //更新资源
  router.put('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model);
  }) // 编辑分类
  //删除资源
  router.delete('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    });
  }) // 删除分类

  // //资源列表
  router.get('/', async (req, res, next) => {
    const token = String(req.headers.authorization || '').split(' ').pop()
    const {id} = jwt.verify(token, app.get('secret'))
    req.user = await AdminUser.findById(id)

    // console.log(req.user)
    await next()
  }, async (req, res) => {
    const queryOptions = {}
    if (req.Model.modelName === 'Category') { //增强程序健壮性，判断是否Model是Category
      queryOptions.populate = 'parent'
    }
    const items = await req.Model.find().setOptions(queryOptions).limit(10)
    res.send(items);
  }) // 查询全部分类
  router.get('/:id', async (req, res) => {
    const model = await req.Model.findById(req.params.id)
    res.send(model);
  }) // 查询指定id分类

  //资源详情
  app.use('/admin/api/rest/:resource', async (req, res, next) => {
    const modelName = require('inflection').classify(req.params.resource) //复数转成类形式，加大写，去掉s
    req.Model = require(`../../models/${modelName}`)
    next()
  }, router)

  //上传部分
  const multer = require('multer')
  const upload = multer({dest: __dirname + '/../../uploads'})
  app.post('/admin/api/upload', upload.single('file'), async (req, res) => {
    const file = req.file
    file.url = `http://localhost:3000/uploads/${file.filename}`
    res.send(file)
  })

  app.post('/admin/api/login', async (req, res) => {
    // 1 根据用户名找用户
    const {username, password} = req.body
    const user = await AdminUser.findOne({username}).select('+password')
    if (!user) {
      return res.status(422).send({
        message: '用户不存在'
      })
    }
    // 2 校验密码
    const isValid = require('bcrypt').compareSync(password, user.password)
    if (!isValid) {
      return res.status(422).send({
        message: '密码错误'
      })
    }
    // 3 返回token
    const token = jwt.sign({id: user._id}, app.get('secret'))
    res.send({token})
  })


}
