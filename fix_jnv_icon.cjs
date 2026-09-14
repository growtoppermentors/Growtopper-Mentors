const fs = require('fs');
let jnv = fs.readFileSync('src/pages/Jnv2027Page.jsx', 'utf8');

jnv = jnv.replace(
  '{Icon && (\n        <div className={bsolute top-6 right-6 w-12 h-12 rounded-2xl flex items-center justify-center opacity-80 }>\n          <Icon className="w-6 h-6" />\n        </div>\n      )}',
  '{Icon && (\n        <div className={mb-6 w-12 h-12 rounded-2xl flex items-center justify-center }>\n          <Icon className="w-6 h-6" />\n        </div>\n      )}'
);

fs.writeFileSync('src/pages/Jnv2027Page.jsx', jnv);
