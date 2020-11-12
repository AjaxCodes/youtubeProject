const {Video, validate} = require('../models/video'); 
const express = require('express');
const router = express.Router();

router.post('http://localhost:3000/api/videos/add', async (req, res) => { 
    try {
        const { error } = validate(req.body);
        if (error)
            return res.status(400).send(error);

        const Video = new Video({
            id: req.body.name
            
        });
    
        await video.save();

        return res.send(video);

    }   catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    } 
});

router.get('http://localhost:3000/api/videos', async (req, res) => { try {
    const videos = await Video.find();
    return res.send(videos); } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`); }
    });

router.put('/:id', async (req, res) => { try {
        const { error } = validate(req.body);
        if (error) return res.status(400).send(error);
        const video = await Video.findByIdAndUpdate( req.params.id,{
            id: req.body.name,
            
        },
        { new: true }
    );
    if (!video)
        return res.status(400).send(`The video with id "${req.params.id}" does not exist.`);
                
        await video.save();
                
        return res.send(video); } catch (ex) {
             
            return res.status(500).send(`Internal Server Error: ${ex}`); 
        }
}); 

router.delete('http://localhost:3000/api/movies/:id', async (req, res) => { 
    try {

    const video = await Video.findByIdAndRemove(req.params.id);

    if (!video)
        return res.status(400).send(`The video with id "${req.params.id}" does not exist.`);
        
        return res.send(video);
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});


// All endpoints and route handlers go here




module.exports = router;