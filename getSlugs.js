import fs from 'fs';
import path from 'path';

const blogsPath = path.join(process.cwd(), 'src/data/blogs.js');
const moreBlogsPath = path.join(process.cwd(), 'src/data/moreBlogs.js');

const blogsStr = fs.readFileSync(blogsPath, 'utf-8');
const moreBlogsStr = fs.readFileSync(moreBlogsPath, 'utf-8');

const slugs1 = [...blogsStr.matchAll(/slug:\s*["']([^"']+)["']/g)].map(m => m[1]);
const slugs2 = [...moreBlogsStr.matchAll(/"slug":\s*"([^"]+)"/g)].map(m => m[1]);

console.log(JSON.stringify([...slugs1, ...slugs2]));
