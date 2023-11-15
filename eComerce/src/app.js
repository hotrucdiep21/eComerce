const compression = require('compression');
const express = require('express');
const { default: helmet } = require('helmet');
const morgan = require('morgan');
const app = express();

// init middelware
app.use(morgan('tiny'));
app.use(helmet());
app.use(compression())

// init db

// init route 
app.get('/',(req, res, next)=>{
    const str = "Hello Gdsdsdsdsdsuy"
    return res.status(200).json({
        message: 'Hello World',
        metadata: str.repeat(100000)
    })
})

module.exports = app