const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

const app = express();

// midlewares
app.use(bodyParser.json());
app.use(cors());

// import Routes
const productsRoute = require('./routes/products');

app.use('/posts', productsRoute);

// connect to db
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('Connected to db ...')
);

// Routes
app.get('/', (req, res) => {
  res.send('hello');
});

// server listen on port
app.listen(5000);
