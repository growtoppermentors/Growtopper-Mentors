const fs = require('fs');
let content = fs.readFileSync('postbuild.js', 'utf8');

// Find where it's broken
content = content.replace(
  "    image: 'https://growtopper.app/og-exams.png'\n  }\n\n\nmainPages.forEach",
  "    image: 'https://growtopper.app/og-exams.png'\n  }\n];\n\nmainPages.forEach"
);

fs.writeFileSync('postbuild.js', content);
