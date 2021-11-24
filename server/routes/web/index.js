// const mongoose = require("mongoose");
//
// const Category = mongoose.model('Category')
// const Article = require('./models/Article')
module.exports = app => {
  const router = require('express').Router()
  const mongoose = require('mongoose')
  const Category = mongoose.model('Category')
  // const Article = mongoose.model('Article')
  const Article = require('../../models/Article')

  // const Article = mongoose.model('Article')
  router.get('/news/init', async (req, res) => {
    const parent = await Category.findOne({
      name: '新闻分类'
    })
    const cats = await Category.find().where({
      parent: parent
    }).lean()
    const newsTitles = ['后续皮肤优化计划公布【老亚瑟的答疑时间】', '嫦娥个性表情票选结果公布', '大神在线解答，金蝉超全攻略！', '互动小任务第13期-嫦娥个性表情票选开启', '2021创意互动周即将开启！源·梦新皮肤即将揭晓！', '11月25日全服不停机更新公告', '11月24日净化游戏环境声明及处罚公告', '11月24日外挂专项打击公告', '11月24日“演员”惩罚名单', '11月24日游戏内违规签名、攻略信息处罚公告', '初冬时节小雪天，共赏芳华祈丰年', '“一元福利周”活动开启公告', '【和金蝉一起“套圈圈”】活动开启公告', '新英雄金蝉上线，两大战令返场开启', '【异界好礼 抽胡桃夹子】活动开启公告', 'KPL预报丨“猫狗”再战，伪装时隔249天重返赛场', '全国大赛大区联赛决赛战火纷飞!强强对决精彩纷呈', '21秋第九周最佳阵容：武汉eStar全员上榜，花海获最佳选手', '常规赛第三轮第二周王者时刻：清融不知火舞秀翻全场', '全国大赛再上西藏，欢迎来到新高地!']
    const newsList = newsTitles.map(title => {
      const randomCats = cats.slice(0).sort((a, b) => Math.random() - 0.5)
      return {
        categories: randomCats.slice(0, 2),
        title: title
      }
    })
    await Article.deleteMany({})
    await Article.insertMany(newsList)
    res.send(newsList)

  })

  app.use('/web/api', router)
}
