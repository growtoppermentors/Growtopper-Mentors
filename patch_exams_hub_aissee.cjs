const fs = require('fs');
let content = fs.readFileSync('src/pages/ExamsScholarshipsPage.jsx', 'utf8');

// Update Sainik School status and link
content = content.replace("id: 'sainik2027',\n      title: 'All India Sainik School (AISSEE) 2027',\n      type: 'Defence School',\n      status: 'Coming Soon',\n      eligibility: 'Class VI & IX',\n      examDate: 'Jan 2027',\n      features: ['Military Training', 'NDA Prep', 'Discipline'],\n      link: '#',", "id: 'sainik2027',\n      title: 'All India Sainik School (AISSEE) 2027',\n      type: 'Defence School',\n      status: 'Active',\n      eligibility: 'Class VI & IX',\n      examDate: 'Jan 2027',\n      features: ['Military Training', 'NDA Prep', 'Discipline'],\n      link: '/aissee2027',");

fs.writeFileSync('src/pages/ExamsScholarshipsPage.jsx', content);
