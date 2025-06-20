const express = require('express');
const router = express.Router();
const Category = require('../models/Category')

//Get all categories
router.get('/',async(req,res)=>{
    try{
        const categories = await Category.find();
        res.json(categories)
    }catch(error){
        res.status(500).json({messase: error.messase})
    }
})

//Get category By Id
router.get('/:id', async (req,res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(400).json({ message: "Category not Found" })
        }
        res.json(category)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//New Category
router.post('/', async (req, res) => {
    const category = new Category({
        name: req.body.name,
        slug: req.body.slug,
        description: req.body.description
    })

    try {
        const newCategory = await category.save();
        res.status(201).json(newCategory);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

//update the category
router.put('/update/:id', async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(400).json({ message: "Category not found" })
        }
        category.name = req.body.name || category.name;
        category.slug = req.body.slug || category.slug;
        category.description = req.body.description || category.description;
        
        category.updatedAt = Date.now();
        const updateCategory = await category.save();
        res.json(updateCategory);
    }
    catch(err){
        res.status(400).json({message: err.message})
    }
})

//Delete a category 
router.delete('/delete/:id',async(req,res) =>{
    try{
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(400).json({ message: "Category not found" })
        }

        await Category.findByIdAndDelete(category._id)
        res.status(200).json({message: "Category delete successfull"})
    }catch(err){
        res.status(400).json({message: err.message})
    }
})



module.exports = router;