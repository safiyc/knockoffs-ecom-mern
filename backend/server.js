import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import config from './config';
import userRoute from './routes/userRoute';

import data from './dummyData';

dotenv.config();

const mongodbUrl = config.MONGODB_URL;
// connect to mongodb
mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).catch(error => console.log(error.reason));

const app = express();

app.use('/api/users', userRoute);

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.get('/api/products/:id', (req, res) => {
  const productId = req.params.id;
  const product = data.products.find(x => x._id === productId);
  // if product exists
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ mesg: "Product not found." });
  }
});

app.listen(5000, () => { console.log('Server started') });

