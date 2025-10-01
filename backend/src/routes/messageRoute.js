import express from 'express'

const router = express.Router()

router.get('/send', (req, res)=>{
    res.status(200).send("message route")
})

export default router