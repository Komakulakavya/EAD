const express = require('express')
const router = express.Router()
const Student = require('../models/one')


router.get('/', async(req,res) => 
{
    try
    {
           const ss = await Student.find()
           res.json(ss)
    }
    catch(err)
    {
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => 
{
    try
    {
           const student = await Student.findById(req.params.id)
           res.json(student)
    }

catch(err)
{
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => 
{
    const ss = new Student
   ({
        name: req.body.name,
        rollno: req.body.rollno,
        tech: req.body.tech,
        email: req.body.email,
        porf: req.body.porf || false
    })

    try
   {
        const a1 =  await ss.save() 
        res.json(a1)
    }
catch(err)
   {
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> 
{
    try
   {
        const ss = await Student.findById(req.params.id) 
        ss.email = req.body.email
        const s1 = await ss.save()
        res.json(s1)   
    }
catch(err)
   {
        res.send('Error')
    }

})

module.exports = router
