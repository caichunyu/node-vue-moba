const express =require('express')

const app = express()

app.use(require('cors')()) //跨域
app.use(express.json())
app.use('/uploads', express.static(__dirname+'/uploads'))
require('./routes/admin')(app)
require('./plugins/db')(app)


app.listen(3000, ()=>{
  console.log('localhost://3000')
})
