const assert = require("http-assert");
const jwt = require("jsonwebtoken");
const AdminUser = require("../models/AdminUser");
module.exports = options =>{
  return async (req, res, next) => {
    const token = String(req.headers.authorization || '').split(' ').pop()
    assert(token, 401, '请 token') //捕获异常
    const {id} = jwt.verify(token, app.get('secret'))
    assert(id, 401, '无效 token') //捕获异常
    req.user = await AdminUser.findById(id)
    assert(req.user, 401, '请先登录') //捕获异常
    // console.log(req.user)
    await next()
  }
}
