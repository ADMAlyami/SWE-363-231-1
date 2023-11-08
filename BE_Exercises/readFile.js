const fs = require('fs').promises;
const path = require('path');


const sourceDir = process.argv[2];
const targetDir = process.argv[3];
const extensions = ['.txt', '.jpg']; // Extensions 

// Check if the source and target directories have been provided
if (!sourceDir || !targetDir) {
  console.error('Please provide the source and target directories.');
  process.exit(1);
}

// Copy files with the specific extensions
fs.readdir(sourceDir)
  .then(files => {
    files.forEach(file => {
      if (extensions.includes(path.extname(file))) {
        const srcPath = path.join(sourceDir, file);
        const destPath = path.join(targetDir, file);
        fs.copyFile(srcPath, destPath)
          .then(() => console.log(`Copied '${file}' to '${targetDir}'`))
          .catch(err => console.error(`Error copying file ${file}:`, err));
      }
    });
  })
  .catch(err => {
    console.error('Error reading source directory:', err);
    process.exit(1);
  });
