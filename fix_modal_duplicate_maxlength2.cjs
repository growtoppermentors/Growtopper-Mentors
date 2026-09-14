const fs = require('fs');
let content = fs.readFileSync('src/components/ui/ApplicationModal.jsx', 'utf8');

content = content.replace(/type="text" maxLength="80"(\s*)inputMode="numeric"/g, 'type="text"="numeric"');

fs.writeFileSync('src/components/ui/ApplicationModal.jsx', content);
