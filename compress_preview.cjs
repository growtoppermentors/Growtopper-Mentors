const sharp = require('sharp');
const fs = require('fs');

async function compressImage(filePath) {
  const buffer = fs.readFileSync(filePath);
  await sharp(buffer)
    .jpeg({ quality: 90, force: false })
    .png({ quality: 90, force: false }) 
    .toFile(filePath + '.tmp');
  fs.renameSync(filePath + '.tmp', filePath);
  
  const stats = fs.statSync(filePath);
  console.log('Compressed:', filePath, 'Size:', (stats.size / 1024).toFixed(2), 'KB');
}

compressImage('public/images/oav2027-preview.png');
