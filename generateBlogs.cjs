const fs = require('fs');

const images = [
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1580519542036-ed47f3e42214?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1475721025505-1112faf0c386?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1427504494785-309014b2d116?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1513258496099-481a80442656?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
];

const authors = ["Aditi Sharma", "Growtopper Research", "Vikram Mehta", "Neha Kapoor", "Priya Rajan", "Dr. Ananya Roy"];

const topics = [
  "UGC Approves Biannual University Admissions: What It Means",
  "AICTE Makes Internships Mandatory for Engineering Students",
  "Study in India (SII) Portal Launched to Attract Global Talent",
  "Digital University of India: The End of Physical Campuses?",
  "National Credit Framework (NCrF) Implemented Across Schools",
  "JEE Main to be Conducted in 13 Regional Languages",
  "SWAYAM Plus Platform Launched to Boost Student Employability",
  "PARAKH: The New Standard for Assessing State Boards",
  "UMMEED Guidelines Issued to Prevent Student Suicides",
  "PM SHRI Schools Phase 2 Rollout Accelerates",
  "Medical College Seats Increase by 15% in 2026",
  "New Internship Rules for Foreign Medical Graduates (FMG)",
  "RTE Act Implementation Changes: Impact on EWS Admissions",
  "Nursing Education Reforms: Focus on Practical Training",
  "IITs Introduce Specialized Deep-Tech and Semiconductor Courses",
  "UPSC Overhauls Exam Pattern to Prioritize Analytical Skills",
  "CUET-PG Exam Shifts to Computer-Based Testing Only",
  "Central Universities Introduce Minimum Sports Quotas",
  "Financial Literacy Integrated into CBSE Curriculum",
  "Expanded Scholarships for Marginalized Communities Announced",
  "Universities Navigate the Use of Generative AI in Assignments",
  "Indian Student Numbers in Canada Drop Amid Diplomatic Row",
  "Australia Implements 'Genuine Student' Requirement for Visas",
  "Germany Becomes the New Favorite for Indian Engineering Students",
  "Kendriya Vidyalayas Integrate Vocational Training from Class 6",
  "UGC Proposes Open-Book Exams for Higher Education",
  "EdTech Advertising Guidelines Tightened to Protect Parents",
  "The Rise of Regional Language Technical Books by AICTE",
  "Integration of Indian Knowledge Systems (IKS) in Higher Ed",
  "NEP 2020: Focus on Holistic Report Cards Explained"
];

const generated = topics.map((topic, i) => {
  const id = topic.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const author = authors[i % authors.length];
  const authorFirstName = author.split(' ')[0];
  const image = images[i % images.length];
  
  return {
    id,
    slug: id,
    title: topic,
    excerpt: 'Discover the latest insights on ' + topic + '. How this new development impacts the future of Indian students, education policies, and career paths.',
    category: "Education News",
    readTime: (Math.floor(Math.random() * 4) + 4) + ' min read',
    date: 'Apr ' + (Math.floor(Math.random() * 28) + 1) + ', 2026',
    author,
    authorAvatar: 'https://api.dicebear.com/9.x/notionists/svg?seed=' + authorFirstName + '&backgroundColor=transparent',
    image,
    content: '<h2>Understanding the Impact of the Latest Update</h2>' +
      '<p>The landscape of Indian education is evolving rapidly. The recent news regarding <strong>' + topic + '</strong> has sent ripples through the academic community. Parents, educators, and students are now trying to navigate what this means for their immediate future.</p>' +
      '<h3>The Core Changes Explained</h3>' +
      '<p>This initiative represents a fundamental shift in policy execution. The government and educational boards are increasingly prioritizing student well-being and practical skills over mechanical learning.</p>' +
      '<ul>' +
        '<li><strong>Skill Over Memory:</strong> A major push towards conceptual understanding.</li>' +
        '<li><strong>Accessibility:</strong> Ensuring that high-quality resources reach students regardless of their geographical location.</li>' +
        '<li><strong>Global Standards:</strong> Aligning Indian curriculums with international frameworks to boost global competitiveness.</li>' +
      '</ul>' +
      '<h3>What Students Must Do Now</h3>' +
      '<p>Adaptation is the key to thriving in this new environment. Students should focus on building a robust portfolio of skills that complement their academic knowledge. Emphasizing soft skills, digital literacy, and emotional intelligence will be critical.</p>' +
      '<blockquote>"The future of education is not just about adapting to new policies; it is about anticipating the skills required for tomorrow."</blockquote>' +
      '<p>At Growtopper, our mentorship programs are perfectly designed to help students pivot and take advantage of these new structural changes. Our continuous curriculum updates ensure that our mentees are always a step ahead of the curve.</p>'
  };
});

fs.writeFileSync('src/data/moreBlogs.js', 'export const moreBlogs = ' + JSON.stringify(generated, null, 2) + ';');
