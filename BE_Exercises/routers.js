
import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const app = express();

const router = express.Router();
const __dirname = '/Users/alitheali/Desktop/SWE-363/SWE-363-231-1';

// Define route for the main page
router.get('/', (req, res) => {
  res.sendFile(__dirname + '/personalBlog.html');
});

// serving all the pages


router.get('/game', (req, res) => {
  res.sendFile(__dirname + '/game.html');
});

router.get('/details', (req, res) => {
  res.sendFile(__dirname + '/detailPage.html');
});

router.get('/arabic', (req, res) => {
  res.sendFile(__dirname + '/arabicVersion.html');
});

router.get('/hireMe', (req, res) => {
  res.sendFile(__dirname + '/hireMe.html');
});

router.get('/contactUs', (req, res) => {
  res.sendFile(__dirname + '/contactUs.html');
});

router.get('/contactUs/thankYou', (req, res) => {
  res.sendFile(__dirname + '/confirmationPage.html');
});

router.get('/dog', (req, res) => {
  res.sendFile(__dirname + '/dogImages.html');
});

router.post('/submit', (req, res) => {
  const { name, email, categories, experience, proposal } = req.body; // Extract data from form
  console.log('Form Submission:', name, email); // Log the form data

  // Send a response back to the user
  res.send('Form submission received!'); // Customize this response as needed
});


// ... router configuration
export default router;
