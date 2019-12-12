const express = require('express');                //express package to render HTML pages using JS 
const bodyParser = require('body-parser');         //body-parser to parse the JSON Data 
const cors = require('cors');                      //Package to connect middle-ware or cross-platform applications
const config = require('./config');

const app = express();                              //wrapping the new express application in app variable 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const userRoutes = require('./routes/account');

//express application using Routes from this application
app.use('/', routes);
app.use('/api/accounts', userRoutes);


//Setting up the port for server to run on 
app.listen(config.port, err => {
  console.log('Server connected at port: ' + config.port);
});
