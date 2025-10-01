import express from 'express'
import dotenv from 'dotenv'
import authRoute from './routes/authRoute.js'
import messageRoute from './routes/messageRoute.js'
import path from 'path'

dotenv.config();
const app = express();
const __dirname = path.resolve();

const PORT = process.env.PORT

app.use('/api/auth', authRoute)
app.use('/api/message', messageRoute)

// make ready for deployment 
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("*", (_,res) =>{
        res.sendFile(path.join(__dirname, "../frontend", "dist" , "index.html"))
    })
}
app.listen(PORT, () =>{
    console.log("server started ",PORT)
})