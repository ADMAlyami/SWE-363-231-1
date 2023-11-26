// BE Exercise 3 solution


import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';


const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

import routes from './routers.js';


app.use(express.static('/Users/alitheali/Desktop/SWE-363/SWE-363-231-1'));
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});