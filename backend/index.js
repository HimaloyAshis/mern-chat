const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const chat = require('.data/data.js')




app.get('/', (req, res)=>{
    res.send('The chat group will going to be opened soon')
})


app.listen(port, ()=>{
    console.log(`The chat group will be opened soon on port: ${port}`)
})

