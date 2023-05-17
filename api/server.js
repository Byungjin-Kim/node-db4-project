const express = require('express');
const helmet = require('helmet');
const recipesRouter = require('./recipes/recipes-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/recipes', recipesRouter);

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customerMessage: 'something went wrong inside the recipes router',
        message: err.message,
        stack: err.stack,
    });
});

module.exports = server;