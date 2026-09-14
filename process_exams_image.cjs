const sharp = require('sharp');
const src = 'C:/Users/subha/.gemini/antigravity/brain/5642f300-c659-4b56-a70a-59fe0471110d/.user_uploaded/media_1789389369220.png';
const dest = 'public/images/exams-preview.jpg';

sharp(src)
  .resize(1200, 630, { fit: 'cover' })
  .jpeg({ quality: 85 })
  .toFile(dest)
  .then(info => {
    console.log('Image compressed and saved successfully:', info);
  })
  .catch(err => {
    console.error('Error processing image:', err);
  });
