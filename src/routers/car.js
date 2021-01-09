const express = require('express');
const router = new express.Router();
const CarsRanking = require('../models/fast')

// we will handle post request
router.post('/cars',async (req,res)=>{
    try{
      const addingCarsRecord =  new CarsRanking(req.body)
      console.log(req.body)
      
      //it returns the promise  so we have to use await in this line of code to handle this
    const insertCars = await addingCarsRecord.save()
    res.send(insertCars);
    }catch(e){
        res.send(e)
    }
})

// we will handle get request
router.get('/cars',async (req,res)=>{
    try{
      const getCars =  await CarsRanking.find({}).sort({"ranking":1})
    res.status(201).send(getCars);
    }catch(e){
        res.status(400).send(e)
    }
})

// we will handle single get request
router.get('/cars/:id',async (req,res)=>{
    try{
        const _id = req.params.id;
      const getCars =  await CarsRanking.findById(_id)
    res.status(201).send(getCars);
    }catch(e){
        res.status(400).send(e)
    }
})

// we will handle single update request
router.patch('/cars/:id',async (req,res)=>{
    try{
        const _id = req.params.id;
      const getCars =  await CarsRanking.findByIdAndUpdate(_id,req.body,{
          new: true
      })
    res.status(201).send(getCars);
    }catch(e){
        res.status(500).send(e)
    }
})

// we will handle single delete request
router.delete('/cars/:id',async (req,res)=>{
    try{
        const _id = req.params.id;
      const getCars =  await CarsRanking.findByIdAndDelete(_id)
    res.status(201).send(getCars);
    }catch(e){
        res.status(500).send(e)
    }
})

module.exports = router;