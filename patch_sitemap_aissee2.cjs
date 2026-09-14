const fs = require('fs');
let sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');

if (!sitemap.includes('/aissee2027')) {
  sitemap = sitemap.replace(
    '</urlset>',
    "  <url>\n    <loc>https://growtopper.app/aissee2027</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n</urlset>"
  );
  fs.writeFileSync('public/sitemap.xml', sitemap);
}
