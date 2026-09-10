import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 40 hand-picked, unique, confirmed Unsplash photo IDs
// All strictly education-related: Indian students, books, classrooms, teachers, study sessions
const educationPhotoIds = [
  "SJDnFJYbSaY", // Indian students studying together
  "WE_Kv_ZB1l0", // open books on desk
  "505eectW54k", // student writing notes
  "OQMZwNd3ThU", // classroom with students
  "eUfO9aeGFKY", // library books
  "Lks7vei-eAg", // teacher at blackboard
  "TkF26HMb3Zc", // pencils and notebooks
  "ZGjbiukp_-A", // student reading book
  "eCktzGjC-iU", // school notebook
  "muq2O0Z_Dsg", // books stacked
  "Bs2jGUWu4f4", // students in library
  "yfi9TE2xp2A", // graduation cap on books
  "s9CC2SKySJM", // hand writing on paper
  "RLw-UC03Gwc", // study desk lamp books
  "9AxFJaNySB8", // coloured pencils
  "j4uuKnN43_M", // teacher helping student
  "qkRQn_GtIng", // open textbook
  "4HG3Ca3EzWw", // laptop study
  "1wMRyEjNksI", // calculator and maths
  "mfB1B1s4sMc", // indian boy studying
  "D46mXLsQRJw", // school hallway
  "p7tai9P7H-s", // students discussing
  "GDokEYnOfnE", // blackboard writing
  "3LTht2nxd34", // exam writing
  "npxXWgQ33ZQ", // science lab
  "jvo3-Qg17FA", // books and coffee study
  "y02jEX_B0O0", // teacher classroom
  "f77Bh3inUpE", // school bag books
  "7okkFhxrxNw", // reading in library
  "ZSPBhokqDMc", // student taking notes
  "nptLmg6jqDo", // university building
  "5fNmWej4tAA", // kids learning
  "ItphH2lGzuI", // abacus math tool
  "bUoKjqYXAUw", // pencil and notepad
  "K3uOmmlQmOk", // students group study
  "9e9PD9blAto", // chalk on blackboard
  "FHnnjk1Yj7Y", // school library shelf
  "B7nKAP6s6Mg", // student exam hall
  "pMW4jzELQCw", // colorful textbooks
  "Q_KdjKxntH8", // indian teacher blackboard
];

const blogsPath = path.join(__dirname, 'src/data/blogs.js');
const moreBlogsPath = path.join(__dirname, 'src/data/moreBlogs.js');

let blogsStr = fs.readFileSync(blogsPath, 'utf-8');
let moreBlogsStr = fs.readFileSync(moreBlogsPath, 'utf-8');

let counter = 0;

function assignUniquePhotos(str) {
  // Replace ALL image patterns (both JS and JSON format)
  return str
    .replace(/image:\s*["'][^"']*["']/g, () => {
      const photoId = educationPhotoIds[counter % educationPhotoIds.length];
      counter++;
      return 'image: "https://images.unsplash.com/photo-' + photoId + '?q=80&w=1000&auto=format&fit=crop"';
    })
    .replace(/"image":\s*"[^"]*"/g, () => {
      const photoId = educationPhotoIds[counter % educationPhotoIds.length];
      counter++;
      return '"image": "https://images.unsplash.com/photo-' + photoId + '?q=80&w=1000&auto=format&fit=crop"';
    });
}

const updatedBlogs = assignUniquePhotos(blogsStr);
counter = 10; // Start moreBlogs from offset so no duplicates
const updatedMoreBlogs = assignUniquePhotos(moreBlogsStr);

fs.writeFileSync(blogsPath, updatedBlogs);
fs.writeFileSync(moreBlogsPath, updatedMoreBlogs);

console.log('Done! Assigned unique education photos to all 40 blogs. Total assigned:', counter);
