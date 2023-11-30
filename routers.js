import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const router = express.Router();

// Define route for the main page
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'personalBlog.html'));
});

// serving all the pages
router.get('/game', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'game.html'));
});

router.get('/details', (req, res) => {
  res.sendFile(__dirname + '/detailPage.html');
});

router.get('/arabic', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'arabic.html'));
});

router.get('/hireMe', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'hireME.html'));
});

router.get('/contactUs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contactUs.html'));
});

router.get('/contactUs/thankYou', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'confirmationPage.html'));
});

router.get('/dog', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dogImages.html'));
});
/*
router.post('/submit', (req, res) => {
  const { name, email, categories, experience, proposal } = req.body; // Extract data from form
  console.log('Form Submission:', name, email); // Log the form data

  // Send a response back to the user
  res.send('Form submission received!'); // Customize this response as needed
});
*/

// ... router configuration
export default router;
