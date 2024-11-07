const express= require('express')
const app = express()
const jwt= require('jsonwebtoken')
app.use(express.json())
require('dotenv').config()

const posts=[
    {
        name : "cbit",
        title: "welcome to cbit"
    },
    {
        name : "mgit",
        title: "welcome to mgit" 
    }
]


const authenticateToken=(req,res,next)=>{
    const authHeader=req.headers['authorization']
    const token= authHeader && authHeader.split(' ')[1]
    if(!token) return res.sendStatus(401)
    
    jwt.verify(toke, process.env.ACCESS_TOKEN, (err,user)=>{
        if (err){
            return res.sendStatus(403)
        }
        req.user=user
        next()
    })
}


app.post('/login', (req,res)=>{
    const username = req.body.username
    const user={ name: username}
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN)
    res.json({accesTokenis : accessToken})
})
app.use(authenticateToken)
app.get('/posts',(req,res)=>{
    console.log(req.user.name)
    res.json(posts.filter(post => post.name === req.user.name))

})
app.listen(3001)