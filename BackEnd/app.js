const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

const port = process.env.PORT || 5000;
const app = express();

// midlewares
app.use(bodyParser.json());
app.use(cors());
app.set('trust proxy', true);

// import Routes
const productsRoute = require('./routes/products');
app.use('/products', productsRoute);

const userRoute = require('./routes/users');
app.use('/users', userRoute);

// connect to db
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// Routes
app.get('/', (req, res) => {
  res.send('hello');
});

const db = mongoose.connection;
db.once('open', function () {
  console.log('Connected to database');
  // server listen on port
  app.listen(port, () => {
    console.log('app listening on port:', port, '!');
  });
});
