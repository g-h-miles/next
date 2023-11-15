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

// Function to apply blur to an image
function applyBlur(inputFilePath, outputFilePath, blurAmount) {
  sharp(inputFilePath)
    .blur(blurAmount)
    .toFile(outputFilePath, (err, info) => {
      if (err) {
        console.error(`Error applying blur to ${inputFilePath}: ${err}`);
      } else {
        console.log(
          `Applied blur to ${inputFilePath} and saved at ${outputFilePath}`
        );
      }
    });
}

// Read the files in the input directory
fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error(`Error reading input directory: ${err}`);
    return;
  }

  // Filter only image files (JPG, PNG, WebP, SVG)
  const imageFiles = files.filter((file) =>
    /\.(jpg|jpeg|png|webp)$/i.test(file)
  );

  // Apply blur to each image
  imageFiles.forEach((file) => {
    const inputFilePath = path.join(inputDir, file);
    const outputFilePath = path.join(outputDir, file);

    // Adjust the blur amount as needed (e.g., 5 for mild blur)
    const blurAmount = 25;

    applyBlur(inputFilePath, outputFilePath, blurAmount);
  });
});
