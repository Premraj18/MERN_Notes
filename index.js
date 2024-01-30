const express = require("express")
require('dotenv').config();
const data = require('./MOCK_DATA.json')
const cors = require('cors')
const connectDB = require("./Backend/DB/Db")

const app = express();
app.use(cors())
connectDB();

app.get('/', (req,res) => {
    res.send("hello from server")
})

app.get('/api/notes', (req,res) => {
    res.send(data)
})

app.get('/api/notes/:id', (req,res) => {
    const ID = Number(req.params.id)
    const note = data.find((n) => n.id === ID)
    res.send(note)
})

app.listen(process.env.PORT, () => {
    console.log('http://localhost:'+process.env.PORT)
})