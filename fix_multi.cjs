const fs = require('fs');

function fixMulti(file) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/from-\[#FFF0E5\] via-\[#F3E8FF\] to-\[#E0F2FE\]/g, 'from-white via-[#FCFBFF] to-[#F4F1FF]');
  content = content.replace(/from-\[#FFF4ED\] via-\[#F5F3FF\] to-\[#EFF6FF\]/g, 'from-white via-[#FCFBFF] to-[#F4F1FF]');
  fs.writeFileSync(file, content);
}

fixMulti('src/pages/Oav2027Page.jsx');
fixMulti('src/pages/Jnv2027Page.jsx');
