'use strict'
const express = require('express');
const cors = require('cors');
const port = 3001;
const app = express();
const uuid = require('node-uuid');
const bodyParser = require('body-parser')


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/subscriptions/partners', function (req, res) {
  const form = req.body;

  console.log({page: 'partners', form})
  res.status(200).json({page: 'partners', form})
})

app.post('/subscriptions/newsletters', function (req, res) {
  const form = req.body;
  console.log({page: 'newsletters', form})
  res.status(200).json({page: 'newsletters', form})
})


app.listen(port, 'localhost', function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:' + port);
});
