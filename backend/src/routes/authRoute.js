import express from 'express'

const router = express.Router();

router.get('/signup', (req, res) =>{
    res.status(200).send("endpoint reahced")
})

router.get('/login', (req, res) =>{
    res.status(200).send("logine dnpoint")
})

export default router;