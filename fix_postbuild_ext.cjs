const fs = require('fs');
let content = fs.readFileSync('postbuild.js', 'utf8');
content = content.replace(/oav2027-preview-padded\.png/g, 'oav2027-preview.jpg');
content = content.replace(/jnv2027-preview\.png/g, 'jnv2027-preview.jpg');
fs.writeFileSync('postbuild.js', content);
