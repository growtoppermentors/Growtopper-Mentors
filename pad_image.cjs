const sharp = require('sharp');
sharp('public/images/oav2027-preview.png')
  .resize(1200, 630, {
    fit: 'contain',
    background: { r: 255, g: 255, b: 255, alpha: 1 }
  })
  .toFile('public/images/oav2027-preview-padded.png')
  .then(() => console.log('Successfully created a safely padded 1200x630 preview image.'));
