const sharp = require('sharp');
sharp('C:/Users/subha/.gemini/antigravity/brain/5642f300-c659-4b56-a70a-59fe0471110d/.user_uploaded/media_1789345693185.png')
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
  .toFile('public/images/oav2027-preview-padded.png')
  .then(() => console.log('Successfully created ultra-safe OG image.'));
