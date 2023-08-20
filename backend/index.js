const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const chat = require("../backend/data/data")




app.get('/', (req, res)=>{
    res.send('The chat group will going to be opened soon')
})

app.get('/app/chat', (req, res)=>{
    res.send(chat)
})


app.get('/app/chat/:id', (req, res)=>{
    const singleChat = chat.find((c)=>c._id === req.params.id)
    res.send(singleChat)
})


app.listen(port, ()=>{
    console.log(`The chat group will be opened soon on port: ${port}`)
})

