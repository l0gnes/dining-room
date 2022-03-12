const express = require("express");
const app = express();

const testEndpoints = require('./routes/test');

app.use('/test', testEndpoints);

app.listen(5000);