const express = require("express");
const bodyparser = require("body-parser");
const cors = require('cors');
const multer = require('multer');
const app = express();

app.use(cors(
    {
        origin: "*",                // I'm aware this is insecure but docker moment
        optionsSuccessStatus: 200
    }
));

app.use(bodyparser.json());                         // Parses JSON data
app.use(bodyparser.urlencoded({ extended: true}));  // Parses application/www

upload = multer();
app.use(upload.array());                            // For parsing multipart data

const testEndpoints = require('./routes/test');
app.use('/test', testEndpoints);

const recipeAPIEndpoints = require('./routes/recipes');
app.use('/recipes', recipeAPIEndpoints);

// For all those epic sandwich recipes
app.use('/static', express.static("food_images"));

app.listen(5000);