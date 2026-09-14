const fs = require('fs');
let app = fs.readFileSync('src/App.jsx', 'utf8');

app = app.replace("const Oav2027Page = React.lazy(() => import('./pages/Oav2027Page'));", "const Oav2027Page = React.lazy(() => import('./pages/Oav2027Page'));\nconst Jnv2027Page = React.lazy(() => import('./pages/Jnv2027Page'));");

fs.writeFileSync('src/App.jsx', app);
