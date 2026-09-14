const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');

if (!content.includes('path="/aissee2027"')) {
  content = content.replace(
    '<Route path="/exams-scholarships" element={<ExamsScholarshipsPage onRequestInvite={openModal} />} />',
    '<Route path="/exams-scholarships" element={<ExamsScholarshipsPage onRequestInvite={openModal} />} />\n          <Route path="/aissee2027" element={<Aissee2027Page onRequestInvite={openModal} />} />'
  );
  fs.writeFileSync('src/App.jsx', content);
}
