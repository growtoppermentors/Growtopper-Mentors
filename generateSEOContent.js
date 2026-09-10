import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { blogs } from './src/data/blogs.js';
import { moreBlogs } from './src/data/moreBlogs.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function generateAuthenticContent(title) {
  const isExams = title.toLowerCase().includes('exam') || title.toLowerCase().includes('cbse') || title.toLowerCase().includes('cuet') || title.toLowerCase().includes('jee') || title.toLowerCase().includes('neet');
  const isGlobal = title.toLowerCase().includes('visa') || title.toLowerCase().includes('canada') || title.toLowerCase().includes('australia') || title.toLowerCase().includes('foreign');
  const isTech = title.toLowerCase().includes('tech') || title.toLowerCase().includes('ai') || title.toLowerCase().includes('digital') || title.toLowerCase().includes('coding');

  let p1 = ""; let p2 = ""; let p3 = "";

  if (isExams) {
    p1 = "<h2>Navigating the New Evaluation Landscape</h2><p>The recent announcements surrounding <strong>" + title + "</strong> have fundamentally altered the academic roadmap for millions of students. For years, the Indian testing ecosystem relied on singular, high-stakes evaluations that maximized student anxiety. However, the latest directives from educational boards emphasize a shift towards continuous assessment, analytical problem-solving, and conceptual clarity. These updates are directly aligned with the National Education Policy (NEP) 2020, which advocates for reducing rote memorization in favor of competency-based learning.</p>";
    p2 = "<h3>What Experts Are Saying</h3><p>Academic strategists point out that this is not just a surface-level change, but a complete structural overhaul. Students must now focus on understanding the core principles of their subjects rather than just scanning through textbooks. By distributing the evaluation weight across multiple formats, students are granted the psychological safety to learn from their mistakes and improve iteratively. This approach mimics real-world problem solving much closer than the traditional examination model ever did.</p>";
    p3 = "<h3>Actionable Steps for Students</h3><ul><li><strong>Transition to Conceptual Study:</strong> Move away from last-minute cramming. Start building foundational knowledge early.</li><li><strong>Leverage Mock Assessments:</strong> Regularly test yourself in simulated environments to build stamina and identify weak areas.</li><li><strong>Seek Mentorship:</strong> Platforms like Growtopper provide the 1:1 guidance necessary to decode these new exam patterns and formulate a winning strategy.</li></ul><p>Ultimately, these reforms are a massive win for student welfare, provided they adapt their preparation strategies proactively.</p>";
  } else if (isGlobal) {
    p1 = "<h2>Global Mobility and the New Academic World Order</h2><p>The latest developments regarding <strong>" + title + "</strong> carry massive implications for Indian students planning their higher education. In an increasingly interconnected world, international exposure is highly coveted, but navigating the shifting sands of visa regulations, university acceptance rates, and foreign education policies requires strategic foresight. The recent policy shifts reflect a broader global trend of tightening academic borders while simultaneously competing for top-tier international talent.</p>";
    p2 = "<h3>The Economic and Strategic Impact</h3><p>For Indian students, this means the competition is fiercer, but the rewards are significantly higher. Universities and governments are actively looking for students who bring more than just high test scores; they are looking for holistic profiles, demonstrated leadership, and specialized technical skills. As international tuition fees rise and regulations become stricter, the Return on Investment (ROI) of studying abroad must be calculated with precision. This makes choosing the right course and the right destination more critical than ever.</p>";
    p3 = "<h3>How to Future-Proof Your Application</h3><ul><li><strong>Build a Holistic Profile:</strong> Grades are just the baseline. Focus on extracurriculars, internships, and demonstrable leadership skills.</li><li><strong>Stay Policy-Aware:</strong> Visa rules and post-graduation work rights can change overnight. Always consult with updated, verified sources.</li><li><strong>Embrace Skill-Based Learning:</strong> Global universities highly value candidates with practical, real-world skills. Growtopper's mentorship programs are specifically designed to help you build and showcase these exact competencies.</li></ul><p>By staying informed and preparing a well-rounded profile, students can successfully navigate these complex global changes and secure their academic futures.</p>";
  } else if (isTech) {
    p1 = "<h2>The Integration of Next-Gen Technology in Education</h2><p>The intersection of technology and learning is evolving at an unprecedented pace, and the news regarding <strong>" + title + "</strong> is a testament to this digital revolution. As the world transitions into a highly automated, AI-driven era, the traditional classroom is undergoing a massive transformation. From digital universities to AI integration in national curriculums, the focus has shifted entirely towards equipping students with the technical fluency required for the jobs of tomorrow.</p>";
    p2 = "<h3>Why Technical Literacy is Non-Negotiable</h3><p>Industry leaders have consistently warned of a growing skills gap. The modern workforce demands a blend of technical expertise and soft skills—a combination that traditional textbook learning often fails to provide. By integrating cutting-edge technologies directly into the educational framework, students are exposed to computational thinking, data analysis, and algorithmic logic from a young age. This fundamentally rewrites how students process information and solve complex problems.</p>";
    p3 = "<h3>Leveraging the Digital Advantage</h3><ul><li><strong>Embrace New Tools:</strong> Do not shy away from using AI and digital platforms for learning. Understanding these tools is a crucial future skill.</li><li><strong>Focus on Practical Application:</strong> Theory is no longer enough. Engage in coding bootcamps, digital projects, and online internships.</li><li><strong>Guided Technological Growth:</strong> Navigating this digital landscape can be overwhelming. Expert mentorship, like the structured programs at Growtopper, helps students cut through the noise and focus on the skills that actually matter.</li></ul><p>The digital age of education is here, and early adopters will undoubtedly reap the highest rewards in their future careers.</p>";
  } else {
    p1 = "<h2>Decoding the Latest Educational Shifts</h2><p>The recent buzz surrounding <strong>" + title + "</strong> highlights a critical turning point in the academic sector. As the educational landscape continues to mature, we are seeing a distinct move away from archaic, generalized learning models towards highly specialized, student-centric frameworks. This evolution is designed to create a more resilient, adaptable, and forward-thinking generation of students who are prepared to tackle modern challenges head-on.</p>";
    p2 = "<h3>Analyzing the Broader Implications</h3><p>When we look beneath the surface of these updates, a clear pattern emerges: the system is optimizing for holistic growth. Policymakers and institutions are finally recognizing that student mental health, practical skill acquisition, and personalized learning paces are just as important as traditional academic milestones. This shift mandates a change in how parents and students approach education—moving from a mindset of fierce, toxic competition to one of collaborative, continuous self-improvement.</p>";
    p3 = "<h3>Strategic Recommendations</h3><ul><li><strong>Focus on Core Competencies:</strong> Prioritize learning skills that are universally applicable, such as critical thinking and effective communication.</li><li><strong>Adapt to Continuous Assessment:</strong> Stay consistent with your studies rather than relying on last-minute efforts. The new frameworks reward steady progress.</li><li><strong>Invest in Mentorship:</strong> The path forward requires nuanced guidance. Engaging with a structured mentorship platform like Growtopper ensures that you are always aligned with the latest educational best practices.</li></ul><p>By embracing these changes with a proactive mindset, students can turn these new policies into powerful advantages for their academic and professional journeys.</p>";
  }
  return p1 + p2 + p3;
}

// Modify moreBlogs
const updatedMoreBlogs = moreBlogs.map(blog => {
  let intro = "<p>" + blog.excerpt + "</p>";
  blog.content = intro + generateAuthenticContent(blog.title);
  return blog;
});

// Write moreBlogs back
const moreBlogsStr = "export const moreBlogs = " + JSON.stringify(updatedMoreBlogs, null, 2) + ";";
fs.writeFileSync(path.join(__dirname, 'src/data/moreBlogs.js'), moreBlogsStr);

console.log('Done mapping moreBlogs!');
