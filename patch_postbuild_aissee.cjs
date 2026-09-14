const fs = require('fs');
let content = fs.readFileSync('postbuild.js', 'utf8');

// Insert after exams-scholarships block
const blockToFind =   {
    path: '/exams-scholarships',
    title: 'Top Exams & Scholarships 2027 | Growtopper',
    description: 'Discover and track the best school-level entrance exams (OAV, JNV, Sainik School) and government scholarships (NMMS, PMST, NTSE).',
    urlPath: '/exams-scholarships',
    image: 'https://growtopper.app/images/exams-preview.jpg'
  };

const replacement = blockToFind + ,\n  {
    path: '/aissee2027',
    title: 'Sainik School Entrance Exam (AISSEE) 2027 Guide | Growtopper',
    description: 'Complete research playbook for All India Sainik School Entrance Exam (AISSEE) 2027. Get eligibility, exam pattern, dates, and syllabus for Class 6 & 9.',
    urlPath: '/aissee2027',
    image: 'https://growtopper.app/images/aissee2027-preview.jpg'
  };

content = content.replace(blockToFind, replacement);
fs.writeFileSync('postbuild.js', content);
