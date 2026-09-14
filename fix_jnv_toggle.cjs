const fs = require('fs');
let jnv = fs.readFileSync('src/pages/Jnv2027Page.jsx', 'utf8');

jnv = jnv.replace(
  'className="bg-white p-2 rounded-2xl shadow-lg border border-gray-200 inline-flex gap-2"',
  'className="bg-white p-2 rounded-2xl shadow-lg border border-gray-200 flex flex-col sm:flex-row w-full sm:w-auto gap-2"'
);

jnv = jnv.replace(
  /className=\{`px-8 py-3 rounded-xl font-bold text-lg transition-all \$\{activeTab === 'IX'/g,
  "className={`px-4 sm:px-8 py-3 rounded-xl font-bold text-base sm:text-lg transition-all flex-1 text-center ${activeTab === 'IX'"
);
jnv = jnv.replace(
  /className=\{`px-8 py-3 rounded-xl font-bold text-lg transition-all \$\{activeTab === 'XI'/g,
  "className={`px-4 sm:px-8 py-3 rounded-xl font-bold text-base sm:text-lg transition-all flex-1 text-center ${activeTab === 'XI'"
);

fs.writeFileSync('src/pages/Jnv2027Page.jsx', jnv);
