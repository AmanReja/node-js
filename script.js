const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res) => {
  res.send('fucking bul sit')
})

app.get("/twitter",(req,res)=>{
 res.send("<button> Click me</button>")
})
app.get("/youtube",(req,res)=>{
 res.send("my name is aman")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

