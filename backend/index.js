import express from 'express'
import dotenv from 'dotenv'
import AuthRoutes from './routes/Auth.routes.js'
import DbCon from './libs/db.js'
import cors from "cors";
dotenv.config()
const PORT=process.env.PORT || 4000
const app=express()

app.use(cors())

DbCon()
app.use(express.json())
app.use('/auth',AuthRoutes)
app.listen(PORT,()=>{
    console.log(`App is running on Port ${PORT}`)
})