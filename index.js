const express = require('express');
const app = express();
const cors = require('cors');
const main = require("./main.js")

//Middleware
app.use(cors());

console.log(main.makeFortune())

//Routes
app.get('/', function(req, res, next) {
  res.redirect('https://badfortunes.locuroid.repl.co')
})

app.get('/fortune', function(req, res, next) {
  res.json({ "fortune": main.makeFortune() });
});

//Listen
app.listen(3000);

console.log('Listening on 3000 | %cThis Code will Crash', "color: green")
