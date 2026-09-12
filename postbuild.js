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

const generateHtml = (meta) => {
  let html = baseHtml;
  
  // Replace Title
  html = html.replace(/<title>.*?<\/title>/gi, `<title>${meta.title}</title>`);
  html = html.replace(/<meta\s+name="description"\s+content=".*?"\s*\/?>/gi, `<meta name="description" content="${meta.description.replace(/"/g, '&quot;')}" />`);
  
  // Replace OG Tags (using regex to catch existing meta tags)
  html = html.replace(/<meta\s+property="og:title"\s+content=".*?"\s*\/?>/gi, `<meta property="og:title" content="${meta.title.replace(/"/g, '&quot;')}" />`);
  html = html.replace(/<meta\s+property="og:description"\s+content=".*?"\s*\/?>/gi, `<meta property="og:description" content="${meta.description.replace(/"/g, '&quot;')}" />`);
  if (meta.image) {
    html = html.replace(/<meta\s+property="og:image"\s+content=".*?"\s*\/?>/gi, `<meta property="og:image" content="${meta.image}" />`);
  }
  html = html.replace(/<meta\s+property="og:url"\s+content=".*?"\s*\/?>/gi, `<meta property="og:url" content="https://growtopper.app${meta.urlPath}" />`);
  
  // Replace Twitter Tags
  html = html.replace(/<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/gi, `<meta name="twitter:title" content="${meta.title.replace(/"/g, '&quot;')}" />`);
  html = html.replace(/<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/gi, `<meta name="twitter:description" content="${meta.description.replace(/"/g, '&quot;')}" />`);
  if (meta.image) {
    html = html.replace(/<meta\s+name="twitter:image"\s+content=".*?"\s*\/?>/gi, `<meta name="twitter:image" content="${meta.image}" />`);
  }

  // Replace Canonical
  html = html.replace(/<link\s+rel="canonical"\s+href=".*?"\s*\/?>/gi, `<link rel="canonical" href="https://growtopper.app${meta.urlPath}" />`);

  return html;
};

// --- 1. GENERATE STATIC PAGES FOR MAIN ROUTES ---
const mainPages = [
  {
    path: '/30-days-growth-challenge',
    title: '30-Day Growth Challenge | Growtopper Mentors',
    description: 'Master Math, Science, AI, and Business in just 30 days. Join the #1 mentor-led student growth program in India.',
    urlPath: '/30-days-growth-challenge'
  },
  {
    path: '/clarity-session',
    title: '1-1 Clarity Session Call | Growtopper Mentors',
    description: 'Book a 1-on-1 Clarity Session with an expert mentor. Get an AI-driven SWOT analysis and a personalized growth roadmap for your child.',
    urlPath: '/clarity-session'
  },
  {
    path: '/pricing',
    title: 'Pricing & Plans | Growtopper Mentors',
    description: 'View pricing for our Clarity Session, 30-Day Growth Challenge, and Elite/Pro Long-Term Mentorship plans.',
    urlPath: '/pricing'
  },
  {
    path: '/syllabus',
    title: 'Curriculum & Syllabus | Growtopper Mentors',
    description: 'Explore the full 30-day curriculum covering Mathematics, Science, Technology, Financial Literacy, and Communication skills.',
    urlPath: '/syllabus'
  },
  {
    path: '/blog',
    title: 'Blog & Resources | Growtopper Mentors',
    description: 'Insights, tips, and strategies for students and parents on education, career building, and holistic growth.',
    urlPath: '/blog'
  }
];

mainPages.forEach(page => {
  const specificDir = path.resolve(distDir, page.path.replace(/^\//, '')); // remove leading slash
  if (!fs.existsSync(specificDir)) {
    fs.mkdirSync(specificDir, { recursive: true });
  }
  const html = generateHtml(page);
  fs.writeFileSync(path.resolve(specificDir, 'index.html'), html);
});
console.log(`Successfully generated static HTML pages for ${mainPages.length} main routes!`);

// --- 2. GENERATE STATIC PAGES FOR BLOGS ---
const blogDir = path.resolve(distDir, 'blog');
if (!fs.existsSync(blogDir)) {
  fs.mkdirSync(blogDir, { recursive: true });
}

let count = 0;
blogs.forEach(blog => {
  const specificDir = path.resolve(blogDir, blog.slug);
  if (!fs.existsSync(specificDir)) {
    fs.mkdirSync(specificDir, { recursive: true });
  }
  
  const meta = {
    title: `${blog.title} | Growtopper Mentors`,
    description: blog.excerpt,
    image: blog.image,
    urlPath: `/blog/${blog.slug}`
  };

  const html = generateHtml(meta);
  fs.writeFileSync(path.resolve(specificDir, 'index.html'), html);
  count++;
});

console.log(`Successfully generated static HTML pages for ${count} blogs!`);

// --- 3. APPEND BLOGS TO SITEMAP.XML ---
const sitemapPath = path.resolve(__dirname, 'public/sitemap.xml');
const distSitemapPath = path.resolve(distDir, 'sitemap.xml');

let sitemapContent = '';
if (fs.existsSync(distSitemapPath)) {
  sitemapContent = fs.readFileSync(distSitemapPath, 'utf-8');
} else if (fs.existsSync(sitemapPath)) {
  sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
}

if (sitemapContent) {
  let blogUrls = '';
  blogs.forEach(blog => {
    blogUrls += `
  <url>
    <loc>https://growtopper.app/blog/${blog.slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
  });
  
  sitemapContent = sitemapContent.replace('</urlset>', blogUrls + '\n</urlset>');
  fs.writeFileSync(distSitemapPath, sitemapContent);
  console.log('Successfully updated sitemap.xml with blog URLs!');
}
