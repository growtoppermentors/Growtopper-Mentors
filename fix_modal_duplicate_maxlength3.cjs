const fs = require('fs');
let content = fs.readFileSync('src/components/ui/ApplicationModal.jsx', 'utf8');

content = content.replace('type="text"="numeric"', 'type="text" inputMode="numeric"');

fs.writeFileSync('src/components/ui/ApplicationModal.jsx', content);
