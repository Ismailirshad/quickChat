import express from 'express'
// import {PORT} from '.env'
import dotenv from 'dotenv'
import authRoute from './routes/authRoute.js'
import messageRoute from './routes/messageRoute.js'

dotenv.config();
const app = express();

const PORT = process.env.PORT

app.use('/api/auth', authRoute)
app.use('/api/message', messageRoute)


app.listen(PORT, () =>{
    console.log("server started ",PORT)
})