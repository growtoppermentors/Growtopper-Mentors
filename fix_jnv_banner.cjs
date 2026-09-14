const fs = require('fs');
let jnv = fs.readFileSync('src/pages/Jnv2027Page.jsx', 'utf8');

jnv = jnv.replace('className="w-full mb-8 overflow-hidden rounded-[32px] shadow-2xl border-4 border-white bg-gray-100"', 'className="w-full max-w-4xl mx-auto mb-8 overflow-hidden rounded-[32px] shadow-2xl border-4 border-white bg-gray-100"');

fs.writeFileSync('src/pages/Jnv2027Page.jsx', jnv);
