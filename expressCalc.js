const express = require('express');
//const ExpressError = require('./expressError')
const { calculateMean, calculateMedian, calculateMode, parseAndValidateNums } = require('./calcHelper');

const app = express();
app.use(express.json() ); 
app.use(express.urlencoded( { extended : true } ));

app.get('/', function(req, res) {
    return res.send('Hello World!');
   
  });

app.get('/mean', parseAndValidateNums, (req, res) => {
    const mean = calculateMean(req.nums);
    res.json({ operation: "mean", value: mean });
  });
  
  app.get('/median', parseAndValidateNums, (req, res) => {
    const median = calculateMedian(req.nums);
    res.json({ operation: "median", value: median });
  });
  
  app.get('/mode', parseAndValidateNums, (req, res) => {
    const mode = calculateMode(req.nums);
    res.json({ operation: "mode", value: mode });
  });
  
  app.listen(3000, function() {
    console.log('Server started on port 3000.');
  });
  

