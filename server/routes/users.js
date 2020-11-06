const {User,validate} = require('../models/user'); 
const {Video, validate} = require('../models/video'); 
const express = require('express');
const router = express.Router();

router.post('http://localhost:3000/api/users/add', async (req, res) => { 
    try {
        const { error } = validate(req.body);
        if (error)
            return res.status(400).send(error);

        const User = new User({
            name: req.body.name,
            password:req.body.password,
        });
    
        await user.save();

        return res.send(user);

    }   catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    } 
});

router.get('http://localhost:3000/api/users', async (req, res) => { try {
    const users = await User.find();
    return res.send(users); } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`); }
});
router.put('/:id', async (req, res) => { try {
    const { error } = validate(req.body);
        if (error) return res.status(400).send(error);
    const user = await User.findByIdAndUpdate( req.params.id,{
        name: req.body.name,
        description: req.body.description, category: req.body.category,
        price: req.body.price, 
    },
    { new: true }
);
    if (!user)
             
    return res.status(400).send(`The user with id "${req.params.id}" does not exist.`);
            
    await user.save();
            
    return res.send(user); } catch (ex) {
        
        return res.status(500).send(`Internal Server Error: ${ex}`); 
    }
});

router.delete('http://localhost:3000/api/movies/:id', async (req, res) => { 
    try {

    const user = await User.findByIdAndRemove(req.params.id);

    if (!user)
        return res.status(400).send(`The user with id "${req.params.id}" does not exist.`);
    
        return res.send(user);
    } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});


// All endpoints and route handlers go here




module.exports = router;