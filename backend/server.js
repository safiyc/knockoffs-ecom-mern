import express from 'express';
import data from './dummyData';

const app = express();

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.listen(5000, () => { console.log('Server started') });

