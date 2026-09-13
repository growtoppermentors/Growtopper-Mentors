const sharp = require('sharp');
const fs = require('fs');

async function compressImage(filePath) {
  const buffer = fs.readFileSync(filePath);
  await sharp(buffer)
    .jpeg({ quality: 80, force: false })
    .png({ quality: 80, force: false }) 
    .toFile(filePath + '.tmp');
  fs.renameSync(filePath + '.tmp', filePath);
  console.log('Compressed:', filePath);
}

compressImage('public/images/oav2027-banner.png');
