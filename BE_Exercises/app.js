// BE Exercise 3 solution


import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

// Define __dirname for ES6 module
const __dirname = '/Users/alitheali/Desktop/SWE-363/SWE-363-231-1';

// serving all the pages
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/personalBlog.html');
});

app.get('/game', (req, res) => {
  res.sendFile(__dirname + '/game.html');
});

app.get('/details', (req, res) => {
  res.sendFile(__dirname + '/detailPage.html');
});

app.get('/arabic', (req, res) => {
  res.sendFile(__dirname + '/arabicVersion.html');
});

app.get('/hireMe', (req, res) => {
  res.sendFile(__dirname + '/hireMe.html');
});

app.get('/contactUs', (req, res) => {
  res.sendFile(__dirname + '/contactUs.html');
});

app.get('/contactUs/thankYou', (req, res) => {
  res.sendFile(__dirname + '/confirmationPage.html');
});

app.get('/dog', (req, res) => {
  res.sendFile(__dirname + '/dogImages.html');
});



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});