const fs = require('fs');
let content = fs.readFileSync('src/pages/Aissee2027Page.jsx', 'utf8');

// Remove import
content = content.replace("import { Helmet } from 'react-helmet-async';\n", "");
content = content.replace("import { Helmet } from 'react-helmet-async';\r\n", "");

// Remove Helmet block
const helmetRegex = /<Helmet>[\s\S]*?<\/Helmet>/g;
content = content.replace(helmetRegex, "");

// Inject document.title into useEffect
const effectStr = "useEffect(() => {\n    window.scrollTo(0, 0);\n  }, []);";
const newEffect = "useEffect(() => {\n    window.scrollTo(0, 0);\n    document.title = 'Sainik School Entrance Exam (AISSEE) 2027 Guide | Growtopper';\n  }, []);";
content = content.replace(effectStr, newEffect);

fs.writeFileSync('src/pages/Aissee2027Page.jsx', content);
