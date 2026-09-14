const fs = require('fs');
let content = fs.readFileSync('postbuild.js', 'utf8');

const jnvEntry = `  },
  {
    path: '/jnv2027',
    title: 'JNV Admission 2027: Class 9 & 11 Guide | Growtopper',
    description: 'Everything you need to know about Jawahar Navodaya Vidyalaya lateral entry for Class IX & XI 2027. Official guidelines, dates, and eligibility.',
    urlPath: '/jnv2027',
    image: 'https://growtopper.app/images/jnv2027-preview.jpg'
  }
];

mainPages.forEach`;

content = content.replace(/];\s*mainPages\.forEach/g, jnvEntry);
fs.writeFileSync('postbuild.js', content);
