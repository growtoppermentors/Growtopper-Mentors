const fs = require('fs');
let page = fs.readFileSync('src/pages/Oav2027Page.jsx', 'utf8');

page = page.replace('bg-[#F8F9FE]', 'bg-[#E9E2CD] bg-[radial-gradient(#d5ceb6_1px,transparent_1px)] [background-size:20px_20px]');
page = page.replace('aspect-[1200/630] bg-gray-100 flex items-center justify-center', 'bg-gray-100');
page = page.replace('className="w-full h-full object-cover"', 'className="w-full h-auto"');

fs.writeFileSync('src/pages/Oav2027Page.jsx', page);
