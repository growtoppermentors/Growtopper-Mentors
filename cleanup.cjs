const fs = require('fs');
let page = fs.readFileSync('src/pages/Oav2027Page.jsx', 'utf8');
page = page.replace(/ color="multi"/g, '');
fs.writeFileSync('src/pages/Oav2027Page.jsx', page);
