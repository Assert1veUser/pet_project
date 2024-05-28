const express        = require('express');
const bodyParser     = require('body-parser');
const app            = express();
require('./routes')(app, {});
const port = 8080;
app.listen(port, () => {
    console.log('We are live on ' + port);
});