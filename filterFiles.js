

import { readdir, copyFileSync } from 'node:fs';
import { extname, join } from 'node:path';

// Get the command-line arguments
const args = process.argv;
const sourceDir = args[2];
const targetDir = args[3];

// Read the source directory
readdir(sourceDir, (error, files) => {
  if (error) {
    console.error("Could not read directory");
    process.exit(1);
  }
  files.forEach((file) => {
    const extension = extname(file).toLowerCase();
    if (extension === '.txt' || extension === '.png') {
      const sourcePath = join(sourceDir, file);
      const targetPath = join(targetDir, file);

      // Copy the file to the target directory
      copyFileSync(sourcePath, targetPath);
      console.log(`Copied ${file} to ${targetDir}`);
    }
  });
});

 