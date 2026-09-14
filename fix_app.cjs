const fs = require('fs');
let app = fs.readFileSync('src/App.jsx', 'utf8');

// Insert the lazy import
app = app.replace(
  "const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));",
  "const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));\nconst ExamsScholarshipsPage = React.lazy(() => import('./pages/ExamsScholarshipsPage'));"
);

// Insert the route
app = app.replace(
  '<Route path="/jnv2027" element={<Jnv2027Page onRequestInvite={openModal} />} />',
  '<Route path="/jnv2027" element={<Jnv2027Page onRequestInvite={openModal} />} />\n          <Route path="/exams-scholarships" element={<ExamsScholarshipsPage onRequestInvite={openModal} />} />'
);

fs.writeFileSync('src/App.jsx', app);
