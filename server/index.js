const express =require('express')

const app = express()

app.set('secret','dghapohgae3423ojo') //token效验

app.use(require('cors')()) //跨域
app.use(express.json())
app.use('/uploads', express.static(__dirname+'/uploads'))
require('./routes/admin')(app)
require('./routes/web')(app)

require('./plugins/db')(app)

app.listen(3000, ()=>{
  console.log('localhost://3000')
})
