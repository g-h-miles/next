const fs = require('fs-extra');
const glob = require('glob');

// Define the directory where your React component files are located
const componentsDir = './src/components/icons'; // Change this to your directory path

// Use glob to find all JavaScript/TypeScript files in the directory
const componentFiles = glob.sync(`${componentsDir}/**/*.ts?(x)`);

// Function to extract component name from a file
function extractComponentName(fileContent) {
  const componentNameMatch = fileContent.match(/export default function (\w+)/);
  return componentNameMatch ? componentNameMatch[1] : null;
}

// Read each component file, extract component name, and store them in an object
let iconsData = [];

componentFiles.forEach((filePath) => {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const componentName = extractComponentName(fileContent);
  const file = filePath.split('/').slice(-1).join('');

  if (componentName) {
    iconsData.push({
      file,
      name: componentName,
    });
  }
});

// Print the icons names and their file paths
console.log('Icons Data');
console.log(iconsData);

const outputData = `export const iconsData = ${JSON.stringify(
  iconsData,
  null,
  2
)};\n`;

fs.writeFileSync('./src/data/icons-data.ts', outputData, 'utf-8');
