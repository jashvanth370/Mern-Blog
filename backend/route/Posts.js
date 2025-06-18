const Post = require('../models/Post');
const express = require('express');
const router = express.Router();

//Get All Posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//Get Post By Id
router.get('/:id', async (req,res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(400).json({ message: "Post not Found" })
        }
        res.json(post)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//New Post 
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
        category: req.body.category,
        author: req.body.author,
        image: req.body.image
    })

    try {
        const newPost = await post.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

//update the post 
router.put('/update/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(400).json({ message: "Post not found" })
        }
        post.title = req.body.title || post.title;
        post.content = req.body.content || post.content;
        post.category = req.body.category || post.category;
        post.image = req.body.image || post.image;
        post.author = req.body.author || post.author;
        post.updatedAt = Date.now();
        const updatePost = await post.save();
        res.json(updatePost);
    }
    catch(err){
        res.status(400).json({message: err.message})
    }
})

//Delete a post 
router.delete('/delete/:id',async(req,res) =>{
    try{
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(400).json({ message: "Post not found" })
        }

        await Post.findByIdAndDelete(post._id)
        res.status(200).json({message: "Post delete successfull"})
    }catch(err){
        res.status(400).json({message: err.message})
    }
})

module.exports = router;