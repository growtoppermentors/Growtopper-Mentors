const https = require('https');

https.get('https://growtopper-mentors.vercel.app/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const ogMatch = data.match(/<meta property="og:image" content="(.*?)"/i);
    console.log("Live OG Image URL in HTML:", ogMatch ? ogMatch[1] : "Not found");
  });
});

https.get('https://growtopper-mentors.vercel.app/og-custom.png', (res) => {
  console.log("Image /og-custom.png HTTP Status:", res.statusCode);
  console.log("Image /og-custom.png Content-Length:", res.headers['content-length']);
});
