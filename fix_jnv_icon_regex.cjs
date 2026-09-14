const fs = require('fs');
let jnv = fs.readFileSync('src/pages/Jnv2027Page.jsx', 'utf8');

jnv = jnv.replace(
  /className=\{bsolute top-6 right-6 w-12 h-12 rounded-2xl flex items-center justify-center opacity-80 \$\{iconColors\[color\]\}\}/g,
  'className={mb-6 w-14 h-14 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center shadow-sm }'
);

fs.writeFileSync('src/pages/Jnv2027Page.jsx', jnv);
