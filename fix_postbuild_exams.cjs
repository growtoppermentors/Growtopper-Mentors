const fs = require('fs');
let content = fs.readFileSync('postbuild.js', 'utf8');

const entry = `  },
  {
    path: '/exams-scholarships',
    title: 'Top Exams & Scholarships 2027 | Growtopper',
    description: 'Discover and track the best school-level entrance exams (OAV, JNV, Sainik School) and government scholarships (NMMS, PMST, NTSE).',
    urlPath: '/exams-scholarships',
    image: 'https://growtopper.app/og-exams.png'
  }
];

mainPages.forEach`;

content = content.replace(/];\s*mainPages\.forEach/g, entry);
fs.writeFileSync('postbuild.js', content);
