const fs = require('fs');
let jnv = fs.readFileSync('src/pages/Jnv2027Page.jsx', 'utf8');

if (!jnv.includes('import Navbar')) {
  jnv = jnv.replace("import { Link } from 'react-router-dom';", "import { Link } from 'react-router-dom';\nimport Navbar from '../components/layout/Navbar';\nimport Footer from '../components/layout/Footer';");
}

if (!jnv.includes('<Navbar')) {
  jnv = jnv.replace('<div className="min-h-screen bg-[#E9E2CD]', '<div className="min-h-screen bg-[#E9E2CD]');
  jnv = jnv.replace('font-sans allow-select">\n      \n      {/* 1. Header', 'font-sans allow-select">\n      <Navbar onRequestInvite={onRequestInvite} />\n      \n      {/* 1. Header');
}

if (!jnv.includes('<Footer')) {
  jnv = jnv.replace('</section>\n    </div>', '</section>\n      <Footer onRequestInvite={onRequestInvite} />\n    </div>');
}

fs.writeFileSync('src/pages/Jnv2027Page.jsx', jnv);
