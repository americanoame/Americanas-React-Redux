import express from 'express';
import products from './products.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = process.env.PORT || 3002;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.get('/products', (req, res) => {
  res.send(products);
});

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server Listening on port ${port}`);
});










// import express from 'express';
// import products from './products.js';

// import cors from 'cors';

// const port = process.env.PORT || 3002;

// const app = express();

// app.use(cors());

// app.use(express.json());
// app.use(express.static('../frontend/dist'));

// app.get('/products', (req, res) => {
//   res.send(products);
// });

// app.use('*', (req, res) => {
//   res.sendFile('./index.html', {
//     root: '../frontend/dist',
//   });
// });

// app.listen(port, console.log(`Server Listening on port ${port}`));
