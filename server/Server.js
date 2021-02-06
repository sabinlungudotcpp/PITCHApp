const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8040;
const localhost = '127.0.0.1';
const okCode = 200;
const notFound = 404;
const forbiddenCode = 422;

app.use(morgan('dev'));
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Connect to MongoDB server to store the organisation data
app.listen(port, (error) => {
    if(!error) {
        return console.log(`Listening for requests on port ${port}`);
    }

    else {
        return console.error(error.message);
    }
});