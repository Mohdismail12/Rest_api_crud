const express = require("express")
const router = new express.Router();
const Ranking = require("../models/users");
router.post('/users',async  (req, res) => {
    try{
      const addingusersRecords = new Ranking(req.body)
      console.log(req.body);
      const insertusers = await addingusersRecords.save();
      res.status(201).send(insertusers);
    }catch(e){
      res.status(400).send(e);
    }
  })
  
router.get('/users',async  (req, res) => {
    try{
      const getusers= await Ranking.find({});
      res.status(201).send(getusers);
    }catch(e){
      res.status(400).send(e);
    }
  })
  
  
router.patch('/users/:id', async  (req, res) => {
    try{
      const _id = req.params.id;
      const getusers= await Ranking.findByIdAndUpdate(_id,req.body,{
        new: true
      });
  
      res.send(getusers);
    }catch(e){
      res.status(500).send(e);
    }
  })
  
  
router.delete('/users/:id', async  (req, res) => {
    try{
      const _id = req.params.id;
      const getusers= await Ranking.findByIdAndDelete(_id);
      
  
      res.send(getusers);
    }catch(e){
      res.status(500).send(e);
    }
  })

module.exports = router;