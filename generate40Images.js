import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogsPath = path.join(__dirname, 'src/data/blogs.js');
const moreBlogsPath = path.join(__dirname, 'src/data/moreBlogs.js');

let blogsStr = fs.readFileSync(blogsPath, 'utf-8');
let moreBlogsStr = fs.readFileSync(moreBlogsPath, 'utf-8');

let counter = 100;

function generateUniqueImages(str) {
  return str.replace(/image:\s*".*?"/g, () => {
    counter++;
    return 'image: "https://loremflickr.com/1000/600/classroom,study?lock=' + counter + '"';
  }).replace(/"image":\s*".*?"/g, () => {
    counter++;
    return '"image": "https://loremflickr.com/1000/600/classroom,study?lock=' + counter + '"';
  });
}

const newBlogsStr = generateUniqueImages(blogsStr);
const newMoreBlogsStr = generateUniqueImages(moreBlogsStr);

fs.writeFileSync(blogsPath, newBlogsStr);
fs.writeFileSync(moreBlogsPath, newMoreBlogsStr);

console.log('Successfully injected 40 unique loremflickr images!');
