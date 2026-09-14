const fs = require('fs');
let footer = fs.readFileSync('src/components/layout/Footer.jsx', 'utf8');

footer = footer.replace(
  "{ label: 'Syllabus',         href: '/syllabus' },",
  "{ label: 'Syllabus',         href: '/syllabus' },\n                { label: 'Exams & Scholarships', href: '/exams-scholarships' },"
);

fs.writeFileSync('src/components/layout/Footer.jsx', footer);
