const sharp = require('sharp');

sharp('public/images/oav2027-banner.png')
  .resize(1200, 630, { fit: 'cover' })
  .jpeg({ quality: 85 })
  .toFile('public/images/oav2027-preview.jpg')
  .then(() => console.log('OAV preview done'));

sharp('public/images/jnv2027-banner.png')
  .resize(1200, 630, { fit: 'cover' })
  .jpeg({ quality: 85 })
  .toFile('public/images/jnv2027-preview.jpg')
  .then(() => console.log('JNV preview done'));
