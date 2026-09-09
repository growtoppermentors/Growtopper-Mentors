import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import the combined blogs data
import { blogs } from './src/data/blogs.js';

const distDir = path.resolve(__dirname, 'dist');
const indexPath = path.resolve(distDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error("index.html not found in dist. Make sure to run vite build first.");
  process.exit(1);
}

const baseHtml = fs.readFileSync(indexPath, 'utf-8');

const generateHtml = (blog) => {
  let html = baseHtml;
  
  // Replace Title
  html = html.replace(/<title>.*?<\/title>/gi, `<title>${blog.title} | Growtopper</title>`);
  
  // Replace OG Tags (using regex to catch existing meta tags)
  html = html.replace(/<meta\s+property="og:title"\s+content=".*?"\s*\/?>/gi, `<meta property="og:title" content="${blog.title.replace(/"/g, '&quot;')}" />`);
  html = html.replace(/<meta\s+property="og:description"\s+content=".*?"\s*\/?>/gi, `<meta property="og:description" content="${blog.excerpt.replace(/"/g, '&quot;')}" />`);
  html = html.replace(/<meta\s+property="og:image"\s+content=".*?"\s*\/?>/gi, `<meta property="og:image" content="${blog.image}" />`);
  html = html.replace(/<meta\s+property="og:url"\s+content=".*?"\s*\/?>/gi, `<meta property="og:url" content="https://growtopper-mentors.vercel.app/blog/${blog.slug}" />`);
  
  // Replace Twitter Tags
  html = html.replace(/<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/gi, `<meta name="twitter:title" content="${blog.title.replace(/"/g, '&quot;')}" />`);
  html = html.replace(/<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/gi, `<meta name="twitter:description" content="${blog.excerpt.replace(/"/g, '&quot;')}" />`);
  html = html.replace(/<meta\s+name="twitter:image"\s+content=".*?"\s*\/?>/gi, `<meta name="twitter:image" content="${blog.image}" />`);

  return html;
};

// Ensure the base blog directory exists inside dist
const blogDir = path.resolve(distDir, 'blog');
if (!fs.existsSync(blogDir)) {
  fs.mkdirSync(blogDir, { recursive: true });
}

let count = 0;
blogs.forEach(blog => {
  // Create a directory for each slug to leverage Vercel's cleanUrls or default index.html serving
  const specificDir = path.resolve(blogDir, blog.slug);
  if (!fs.existsSync(specificDir)) {
    fs.mkdirSync(specificDir, { recursive: true });
  }
  
  const html = generateHtml(blog);
  fs.writeFileSync(path.resolve(specificDir, 'index.html'), html);
  count++;
});

console.log(`Successfully generated dynamic SEO HTML pages for ${count} blogs!`);
