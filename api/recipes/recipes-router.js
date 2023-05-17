const express = require('express');
const Recipes = require('./recipes-model')

const router = express.Router();

router.get('/:recepie_id', (req, res, next) => {
    Recipes.getRecipeById(req.params.recipe_id)
        .then(recipe => {
            res.status(200).json(recipe);
        })
        .catch(next); // our custom err handling middleware in server.js will trap this
});

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customerMessage: 'something went wrong inside the recipes router',
        message: err.message,
        stack: err.stack,
    });
});



module.exports = router;