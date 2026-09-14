const sharp = require('sharp');
sharp('public/images/jnv2027-banner.png')
  .resize(630, 630, {
    fit: 'contain',
    background: { r: 255, g: 255, b: 255, alpha: 1 }
  })
  .extend({
    top: 0,
    bottom: 0,
    left: 285,
    right: 285,
    background: { r: 255, g: 255, b: 255, alpha: 1 }
  })
  .toFile('public/images/jnv2027-preview.png')
  .then(() => console.log('Successfully created JNV ultra-safe OG image.'));
