const fs = require('fs');
let content = fs.readFileSync('postbuild.js', 'utf8');
content = content.replace('og-exams.png', 'images/exams-preview.jpg');
fs.writeFileSync('postbuild.js', content);
