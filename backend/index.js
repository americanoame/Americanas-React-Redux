import express from 'express';
import products from './products.js';

import cors from 'cors';

const port = process.env.PORT || 3002;

const app = express();

const corsOptions = {
  origin: process.env.NODE_ENV === 'production'
    ? 'https://americanas-f1732000c767.herokuapp.com' // Production URL
    : 'http://127.0.0.1:5175', // Development URL
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions));


app.use(express.json());
app.use(express.static( "../frontend/dist"))

app.get('/products', (req, res) => {
    res.send(products)
})

app.use("*", (req, res) => {
  res.sendFile( "./index.html", {
    root: "../frontend/dist"
  })
} )

app.listen(port, console.log(`Server Listening on port ${port}`));
