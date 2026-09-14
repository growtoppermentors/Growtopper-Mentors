const fs = require('fs');
let content = fs.readFileSync('postbuild.js', 'utf8');

const blockToFind = "  {\r\n    path: '/exams-scholarships',\r\n    title: 'Top Exams & Scholarships 2027 | Growtopper',\r\n    description: 'Discover and track the best school-level entrance exams (OAV, JNV, Sainik School) and government scholarships (NMMS, PMST, NTSE).',\r\n    urlPath: '/exams-scholarships',\r\n    image: 'https://growtopper.app/images/exams-preview.jpg'\r\n  }";

const replacement = blockToFind + ",\n  {\n    path: '/aissee2027',\n    title: 'Sainik School Entrance Exam (AISSEE) 2027 Guide | Growtopper',\n    description: 'Complete research playbook for All India Sainik School Entrance Exam (AISSEE) 2027. Get eligibility, exam pattern, dates, and syllabus for Class 6 & 9.',\n    urlPath: '/aissee2027',\n    image: 'https://growtopper.app/images/aissee2027-preview.jpg'\n  }";

let newContent = content.replace(blockToFind, replacement);
if(newContent === content) {
    // try fallback with \n instead of \r\n
    const blockToFind2 = "  {\n    path: '/exams-scholarships',\n    title: 'Top Exams & Scholarships 2027 | Growtopper',\n    description: 'Discover and track the best school-level entrance exams (OAV, JNV, Sainik School) and government scholarships (NMMS, PMST, NTSE).',\n    urlPath: '/exams-scholarships',\n    image: 'https://growtopper.app/images/exams-preview.jpg'\n  }";
    const replacement2 = blockToFind2 + ",\n  {\n    path: '/aissee2027',\n    title: 'Sainik School Entrance Exam (AISSEE) 2027 Guide | Growtopper',\n    description: 'Complete research playbook for All India Sainik School Entrance Exam (AISSEE) 2027. Get eligibility, exam pattern, dates, and syllabus for Class 6 & 9.',\n    urlPath: '/aissee2027',\n    image: 'https://growtopper.app/images/aissee2027-preview.jpg'\n  }";
    newContent = content.replace(blockToFind2, replacement2);
}

fs.writeFileSync('postbuild.js', newContent);
