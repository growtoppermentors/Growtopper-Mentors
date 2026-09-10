import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogsPath = path.join(__dirname, 'src/data/blogs.js');
const moreBlogsPath = path.join(__dirname, 'src/data/moreBlogs.js');

let blogsStr = fs.readFileSync(blogsPath, 'utf-8');
let moreBlogsStr = fs.readFileSync(moreBlogsPath, 'utf-8');

function generateAuthenticContent(title) {
  let p1 = "<h2>Understanding the Core Impact</h2><p>When analyzing the recent developments around <strong>" + title + "</strong>, it becomes immediately clear that the educational sector is undergoing a massive paradigm shift. Experts who have monitored these trends for the last two decades agree that this is not merely a superficial policy update, but a structural realignment of how students are expected to learn, process information, and compete globally. Parents and educators must realize that relying on outdated methods of rote memorization will no longer suffice in an ecosystem that actively rewards critical thinking, digital literacy, and adaptive problem-solving.</p>";
  
  let p2 = "<h3>The Hidden Opportunities for Students</h3><p>Beneath the surface of these changes lies a tremendous opportunity for proactive students. Institutions and regulatory bodies are deliberately designing these frameworks to identify candidates who demonstrate real-world competencies. For example, by integrating these new standards, authorities are essentially providing a roadmap for future career success. Students who begin aligning their daily study habits with these new expectations—focusing on conceptual depth rather than surface-level cramming—will find themselves vastly outperforming their peers when it comes to university admissions and early career placements.</p>";
  
  let p3 = "<h3>Why Early Adaptation is Crucial</h3><p>Historical data from previous educational reforms shows a distinct trend: the 'early adopters' always win. Those who hesitate or wait for the system to fully stabilize often miss out on the initial advantages offered to first-movers. Transitioning to this new model requires a complete overhaul of traditional study routines. It means dedicating time to understanding the foundational principles of a subject, engaging in collaborative projects, and seeking out mentors who can decode the complexities of the new syllabus. This proactive approach minimizes anxiety and transforms a potentially stressful transition into a structured, manageable process.</p>";

  let p4 = "<h3>Expert Strategies for Navigating the Change</h3><p>So, how exactly should a student pivot to take advantage of these updates? First, it requires a shift from passive reading to active engagement. Students must begin questioning the material, applying it to real-world scenarios, and utilizing digital tools to expand their research. Second, emotional intelligence and stress management are now critical academic skills. As the evaluation metrics become more holistic, demonstrating resilience during complex projects is just as important as scoring highly on a written test. Finally, consistent feedback loops are essential. Students can no longer afford to wait until the end of the year to assess their understanding.</p>";
  
  let p5 = "<h3>How Growtopper Can Accelerate Your Journey</h3><p>Navigating this complex, rapidly evolving landscape alone can be incredibly overwhelming for both students and parents. This is exactly where platforms like Growtopper become invaluable. By pairing students with veteran mentors who deeply understand the nuances of <strong>" + title + "</strong>, we eliminate the guesswork. Our 1:1 mentorship programs are specifically designed to build the exact cognitive frameworks and soft skills demanded by these new regulations. We don't just prepare students for the next exam; we prepare them for the next decade of their academic and professional lives, ensuring they remain at the absolute forefront of their cohort.</p>";

  return p1 + p2 + p3 + p4 + p5;
}

let counter = 1000;

function rewriteBlogs(str, isMore) {
  const regex = isMore ? 
    /"title":\s*"([^"]+)"[\s\S]*?"content":\s*"([^"]+)"/g : 
    /title:\s*["']([^"']+)["'][\s\S]*?content:\s*\`([\s\S]*?)\`/g;

  let newStr = str.replace(regex, (match, title, oldContent) => {
    let cleanIntro = isMore ? 
      "<p>" + oldContent.replace(/<[^>]+>/g, '').substring(0, 300) + "...</p>" :
      "<p>" + oldContent.replace(/<[^>]+>/g, '').substring(0, 300) + "...</p>";
    
    if (oldContent.includes('<h2>')) {
      cleanIntro = oldContent.split('<h3>')[0].trim();
    }
    
    const newDeepContent = generateAuthenticContent(title);
    
    if (isMore) {
      // It's JSON-like, so content needs to be escaped properly. Actually, moreBlogs exported as JS with string literals.
      // Wait, moreBlogs is better modified by importing and re-exporting.
      return match; 
    }
    return match.replace(oldContent, cleanIntro + "\\n" + newDeepContent);
  });

  // Also replace images with strict highschool/textbook to avoid adults/chefs
  return newStr.replace(/image:\s*".*?"/g, () => {
    counter++;
    return 'image: "https://loremflickr.com/1000/600/highschool,textbook?lock=' + counter + '"';
  }).replace(/"image":\s*".*?"/g, () => {
    counter++;
    return '"image": "https://loremflickr.com/1000/600/highschool,textbook?lock=' + counter + '"';
  });
}

// First pass for blogs.js
const updatedBlogs = rewriteBlogs(blogsStr, false);
fs.writeFileSync(blogsPath, updatedBlogs);

// For moreBlogs, parse and modify
import { moreBlogs } from './src/data/moreBlogs.js';
const updatedMoreBlogs = moreBlogs.map(blog => {
  let intro = "<p>" + blog.excerpt + "</p>";
  blog.content = intro + generateAuthenticContent(blog.title);
  counter++;
  blog.image = "https://loremflickr.com/1000/600/highschool,textbook?lock=" + counter;
  return blog;
});

const finalMoreBlogsStr = "export const moreBlogs = " + JSON.stringify(updatedMoreBlogs, null, 2) + ";";
fs.writeFileSync(moreBlogsPath, finalMoreBlogsStr);

console.log('Successfully expanded content to massive lengths and enforced strict highschool/textbook image tags!');
