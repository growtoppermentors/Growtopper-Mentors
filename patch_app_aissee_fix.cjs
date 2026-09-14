const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');

// Insert import
if (!content.includes('Aissee2027Page')) {
  content = content.replace(
    "const ExamsScholarshipsPage = React.lazy(() => import('./pages/ExamsScholarshipsPage'));",
    "const ExamsScholarshipsPage = React.lazy(() => import('./pages/ExamsScholarshipsPage'));\nconst Aissee2027Page = React.lazy(() => import('./pages/Aissee2027Page'));"
  );
}

// Insert route
if (!content.includes('path="/aissee2027"')) {
  content = content.replace(
    '<Route path="/exams-scholarships" element={<ExamsScholarshipsPage onRequestInvite={() => setIsModalOpen(true)} />} />',
    '<Route path="/exams-scholarships" element={<ExamsScholarshipsPage onRequestInvite={() => setIsModalOpen(true)} />} />\n              <Route path="/aissee2027" element={<Aissee2027Page onRequestInvite={() => setIsModalOpen(true)} />} />'
  );
}

fs.writeFileSync('src/App.jsx', content);
