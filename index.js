import express from 'express';
import products from './backend/products.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = 3002; 
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Serve frontend static files
app.use(express.static(path.join(__dirname, 'frontend/dist')));

// API routes
app.get('/products', (req, res) => {
  res.send(products);
});

// Serve frontend index.html for any other routes
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/dist/index.html'));
});

// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
});
