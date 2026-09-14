const fs = require('fs');
let page = fs.readFileSync('src/pages/Oav2027Page.jsx', 'utf8');
const colors = ['multi', 'orange', 'green', 'blue', 'purple', 'orange', 'multi', 'purple', 'green', 'blue', 'orange', 'multi', 'blue', 'purple', 'orange', 'green', 'multi', 'orange', 'purple', 'blue', 'green', 'multi', 'orange', 'blue', 'multi'];
let i = 0;
page = page.replace(/<GradientCard/g, () => {
  return '<GradientCard color="' + colors[i++] + '"';
});
// clean up the previous failed attempt
page = page.replace(/color="multi" color="/g, 'color="');
fs.writeFileSync('src/pages/Oav2027Page.jsx', page);
