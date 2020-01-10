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
app.use('/img', express.static('img'));

const productsRoute = require('./routes/products');
app.use('/api/products', productsRoute);

const userRoute = require('./routes/users');
app.use('/api/users', userRoute);

const cartRoute = require('./routes/cart');
app.use('/api/cart', cartRoute);

const authRoute = require('./routes/auth');
app.use('/api/user', authRoute);

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
});
// server listen on port
app.listen(port, () => {
    console.log('app listening on port:', port, '!');
});
