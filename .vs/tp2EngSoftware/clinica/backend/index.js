
const express = require('express')


const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
  res.send('App is available')

})

app.post('/',(req,res)=>{
  const login = req.body
  console.log(login)
  res.send('ok!!!')

})

app.get('/restrito',(req,res)=>{
  res.send('Essa área é restrita')
})

app.listen(3000, ()=>{
  console.log('App online')
})
