const fs = require('fs');
let content = fs.readFileSync('public/sitemap.xml', 'utf8');

const sitemapEntry = `  <url>
    <loc>https://growtopper.app/exams-scholarships</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;

content = content.replace('</urlset>', sitemapEntry);
fs.writeFileSync('public/sitemap.xml', content);
