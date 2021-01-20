const express = require('express');
const router = express.Router();
const Question = require('../models/Questions');

// Get all questions
router.get('/', async (req,res) => {
    try{
        const questions = await Question.find();
        res.json(questions);
    }catch(err){
        res.json({message: err});
    }
});

// Get question by id
router.get('/:questionId', async (req,res) => {
    try{
        const question = await Question.findById(req.params.questionId);
        res.json(question);
    }catch(err){
        res.json({message: err});
    }
});

// Add new question
router.post('/', async (req, res) => {
    const question = new Question({
        title: req.body.title,
        description: req.body.description
    });

    try{
        const savedQuestions = await question.save();
        res.json(savedQuestions);
    }catch(err){
        res.json({message: err});
    }
    
});

module.exports = router;