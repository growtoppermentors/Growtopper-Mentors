const fs = require('fs');
let app = fs.readFileSync('src/App.jsx', 'utf8');

// Fix literal `n in imports
app = app.replace("import Oav2027Page from './pages/Oav2027Page';`nimport Jnv2027Page from './pages/Jnv2027Page';", "import Oav2027Page from './pages/Oav2027Page';\nimport Jnv2027Page from './pages/Jnv2027Page';");

// Fix literal `n in routes
app = app.replace("<Route path=\"/1-1-clarity-session-call\" element={<ClaritySession />} />`n        <Route path=\"/oav2027\" element={<Oav2027Page onRequestInvite={openModal} />} />\n          <Route path=\"/jnv2027\" element={<Jnv2027Page onRequestInvite={openModal} />} />", 
  "<Route path=\"/1-1-clarity-session-call\" element={<ClaritySession />} />\n        <Route path=\"/oav2027\" element={<Oav2027Page onRequestInvite={openModal} />} />\n        <Route path=\"/jnv2027\" element={<Jnv2027Page onRequestInvite={openModal} />} />");

fs.writeFileSync('src/App.jsx', app);
