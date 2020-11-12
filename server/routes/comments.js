const {Comment, validate} = require('../models/Comment'); 
const express = require('express');
const router = express.Router();

router.post('http://localhost:3000/api/comments/add', async (req, res) => { 
    try {
        const { error } = validate(req.body);
        if (error)
            return res.status(400).send(error);

        const Comment = new Comment({
            name: req.body.name,
            discription: req.body.discription,
            
        });
    
        await comment.save();

        return res.send(comment);

    }   catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    } 
});

router.get('http://localhost:3000/api/comments', async (req, res) => { try {
    const comments = await Comment.find();
    return res.send(comments); } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`); }
    });

router.put('/:id', async (req, res) => { try {
        const { error } = validate(req.body);
        if (error) return res.status(400).send(error);
        const comment = await Comment.findByIdAndUpdate( req.params.id,{
            name: req.body.name,
            discription: req.body.discription,
             
        },
        { new: true }
    );
    if (!comment)
        return res.status(400).send(`The video with id "${req.params.id}" does not exist.`);
                
        await comment.save();
                
        return res.send(comment); } catch (ex) {
             
            return res.status(500).send(`Internal Server Error: ${ex}`); 
        }
}); 

router.delete('http://localhost:3000/api/comments/:id', async (req, res) => { 
    try {

    const comment = await Comment.findByIdAndRemove(req.params.id);

    if (!comment)
        return res.status(400).send(`The video with id "${req.params.id}" does not exist.`);
        
        return res.send(comment);
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});


// All endpoints and route handlers go here




module.exports = router;