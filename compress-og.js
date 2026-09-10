import sharp from 'sharp';

async function compressImage() {
  try {
    const inputBuffer = await sharp('public/og-custom.png').toBuffer();
    
    // Resize and compress
    await sharp(inputBuffer)
      .resize({ width: 1200 }) // standard OG width
      .jpeg({ quality: 80 }) // JPEG is much smaller than PNG for complex graphics
      .toFile('public/og-custom.jpg');
      
    console.log('Successfully compressed the image to og-custom.jpg!');
  } catch (error) {
    console.error('Compression error:', error);
  }
}

compressImage();
