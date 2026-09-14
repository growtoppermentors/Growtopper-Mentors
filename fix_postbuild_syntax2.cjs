const fs = require('fs');
let content = fs.readFileSync('postbuild.js', 'utf8');

content = content.replace('  }\r\n  },\r\n  {', '  },\r\n  {');
content = content.replace('  }\n  },\n  {', '  },\n  {');
content = content.replace('  }\r\n  },\r\n  {', '  },\r\n  {');
content = content.replace('  }\n  },\n  {', '  },\n  {');

fs.writeFileSync('postbuild.js', content);
