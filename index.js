require('dotenv').config()
const express = require('express')  
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/addme', (req, res)=>{
    res.send('Abcd.com')
})

app.get('/ass', (req, res)=>{
    res.send('<h1>PLzz Login</h1>');
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})