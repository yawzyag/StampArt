const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const https = require('https');
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
app.use('/api/products', productsRoute);

const userRoute = require('./routes/users');
app.use('/api/users', userRoute);

// connect to db
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// Route status
app.get('/', (req, res) => {
  res.send({ status: 'ok' });
});

const db = mongoose.connection;
db.once('open', function () {
  console.log('Connected to database');
  // server listen on port
  https.createServer(app).listen(5001, () => {
    console.log('https app listening on port:', 5001, '!');
  });
  app.listen(port, () => {
    console.log('app listening on port:', port, '!');
  });
});
