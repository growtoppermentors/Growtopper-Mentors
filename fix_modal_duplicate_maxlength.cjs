const fs = require('fs');
let content = fs.readFileSync('src/components/ui/ApplicationModal.jsx', 'utf8');

content = content.replace(
  'type="text" maxLength="80"\n                        inputMode="numeric"\n                        maxLength={6}',
  'type="text"\n                        inputMode="numeric"\n                        maxLength={6}'
);

fs.writeFileSync('src/components/ui/ApplicationModal.jsx', content);
