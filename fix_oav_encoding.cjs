const fs = require('fs');
let page = fs.readFileSync('src/pages/Oav2027Page.jsx', 'utf8');

// The corrupted character might appear differently in Node vs PowerShell output. 
// It looks like '?"' in PS output, but might be 'â€”' or '?' in the actual file due to CP-1252 encoding.
// Let's replace '?"' and '?' where it makes sense, or just replace all instances of '?"'
page = page.replace(/\?"/g, '—');
page = page.replace(/\?\"/g, '—');
fs.writeFileSync('src/pages/Oav2027Page.jsx', page);
