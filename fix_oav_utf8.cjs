const fs = require('fs');
let page = fs.readFileSync('src/pages/Oav2027Page.jsx', 'utf8');

page = page.replace(/\?"/g, '—');
page = page.replace(/\?/g, '•');

fs.writeFileSync('src/pages/Oav2027Page.jsx', page);
