const fs = require('fs');
let page = fs.readFileSync('src/pages/Oav2027Page.jsx', 'utf8');

// Fix Title Gradient
page = page.replace(
  /className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-\[\#7280DE\] to-\[\#B28BFF\] text-white text-lg flex-shrink-0 shadow-sm"/g,
  'className="flex items-center justify-center w-10 h-10 rounded-full bg-[#5B10FF] text-white text-lg font-black flex-shrink-0 shadow-md"'
);

fs.writeFileSync('src/pages/Oav2027Page.jsx', page);
