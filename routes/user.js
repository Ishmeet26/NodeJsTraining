const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');

var user = require('../schema/userschema.js')

//create
router.post('/create', (req, res, next) =>{

    user.create({
        name: req.body.name,
        age: req.body.age,
        
    },  (err,data)=>{
        if(err){
            console.log(err)
        }else{
            res.json("user is added ")
        }
      })
});

//read
router.get('/read', (req ,res, next) =>{

    user.find(function(err,data){

        if(err){
            res.send(err.message)
        }else{
            res.send(data)
        }

    })

});

//update

router.put('/update/:id', (req, res, next) => {
    
    var id = req.params.id;

    var user1 = {

        name: req.body.name,
        age: req.body.age,
    
        
    };

    user.findByIdAndUpdate({_id:id}, user1, (err, data) => {
        if(err) {
            res.send("User can't be updated");
        }
        else {
            console.log(data);
            res.json("user updated successfully");
        }
    })

})
//delete
router.delete('/delete/:id', (req,res,next) => {
    var id=req.params.id;

    user.findByIdAndDelete({_id:id}, function(err, data) {
        if(err) {
            res.send('User not found');
        }
        else {
            console.log(data);
            res.json("user deleted successfully");
        }
    })
})

module.exports = router;