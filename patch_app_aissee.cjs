const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');

// Add import
const importStr = "const ExamsScholarshipsPage = lazy(() => import('./pages/ExamsScholarshipsPage'));\nconst Aissee2027Page = lazy(() => import('./pages/Aissee2027Page'));";
content = content.replace("const ExamsScholarshipsPage = lazy(() => import('./pages/ExamsScholarshipsPage'));", importStr);

// Add Route
const routeStr = "<Route path=\"/exams-scholarships\" element={<ExamsScholarshipsPage onRequestInvite={() => setIsModalOpen(true)} />} />\n              <Route path=\"/aissee2027\" element={<Aissee2027Page onRequestInvite={() => setIsModalOpen(true)} />} />";
content = content.replace("<Route path=\"/exams-scholarships\" element={<ExamsScholarshipsPage onRequestInvite={() => setIsModalOpen(true)} />} />", routeStr);

fs.writeFileSync('src/App.jsx', content);
