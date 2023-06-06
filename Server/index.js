const express=require('express')
const cors=require('cors')
const todoRoute=require('./routes/todo')
const errorHandle=require('./middlewares/errorHandle')
const app=express()

app.use(cors())
app.use(express.json())


app.use('/todo',todoRoute)

app.use(errorHandle)
const PORT=5001
app.listen(PORT, () => console.log(`server listened in ${PORT} `))