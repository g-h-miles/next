const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Define the input and output directories
const inputDir = './input';
const outputDir = './output';

// Create the output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Function to convert an image to WebP format
function convertToWebP(inputFilePath, outputFilePath) {
  sharp(inputFilePath)
    .webp()
    .toFile(outputFilePath, (err, info) => {
      if (err) {
        console.error(`Error converting ${inputFilePath} to WebP: ${err}`);
      } else {
        console.log(`Converted ${inputFilePath} to WebP at ${outputFilePath}`);
      }
    });
}

// Read the files in the input directory
fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error(`Error reading input directory: ${err}`);
    return;
  }

  // Filter only JPG and PNG files
  const imageFiles = files.filter((file) => /\.(jpg|jpeg|png)$/i.test(file));

  // Convert each image to WebP format
  imageFiles.forEach((file) => {
    const inputFilePath = path.join(inputDir, file);
    const outputFilePath = path.join(
      outputDir,
      path.basename(file, path.extname(file)) + '.webp'
    );
    convertToWebP(inputFilePath, outputFilePath);
  });
});
