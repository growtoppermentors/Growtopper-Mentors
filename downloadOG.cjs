const fs = require('fs');

async function download() {
  const res = await fetch('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop');
  const buffer = await res.arrayBuffer();
  fs.writeFileSync('public/og-preview.jpg', Buffer.from(buffer));
  console.log('Downloaded image size:', buffer.byteLength);
}

download();
