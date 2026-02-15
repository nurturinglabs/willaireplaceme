export interface RoleIndex {
  slug: string;
  title: string;
  overallScore: number;
  tagline: string;
  category: string;
}

export const roles: RoleIndex[] = [
  // tech
  { slug: "qa-test-engineer", title: "QA / Test Engineer", overallScore: 75, tagline: "AI writes the tests. But who tests the AI?", category: "tech" },
  { slug: "it-support", title: "IT Support Specialist", overallScore: 72, tagline: "AI handles the tickets. But someone still has to reboot the server.", category: "tech" },
  { slug: "systems-administrator", title: "Systems Administrator", overallScore: 70, tagline: "AI manages the servers. Humans manage the exceptions.", category: "tech" },
  { slug: "frontend-developer", title: "Frontend Developer", overallScore: 68, tagline: "AI generates the UI. Humans craft the experience.", category: "tech" },
  { slug: "database-administrator", title: "Database Administrator", overallScore: 68, tagline: "AI tunes the queries. Humans safeguard the data.", category: "tech" },
  { slug: "full-stack-developer", title: "Full-Stack Developer", overallScore: 66, tagline: "AI builds entire apps. Humans own the product vision.", category: "tech" },
  { slug: "mobile-developer", title: "Mobile Developer", overallScore: 65, tagline: "AI codes the app. Humans craft the mobile experience.", category: "tech" },
  { slug: "software-engineer", title: "Software Engineer", overallScore: 64, tagline: "AI writes the code. Humans decide what to build and why.", category: "tech" },
  { slug: "data-engineer", title: "Data Engineer", overallScore: 62, tagline: "AI automates the pipelines. Humans design the data strategy.", category: "tech" },
  { slug: "backend-developer", title: "Backend Developer", overallScore: 62, tagline: "AI builds the APIs. Humans architect the systems.", category: "tech" },
  { slug: "data-scientist", title: "Data Scientist", overallScore: 62, tagline: "AI crunches the numbers. Humans ask the right questions.", category: "tech" },
  { slug: "devops-sre", title: "DevOps / SRE Engineer", overallScore: 58, tagline: "AI automates the ops. Humans handle the chaos.", category: "tech" },
  { slug: "cloud-architect", title: "Cloud Architect", overallScore: 52, tagline: "AI provisions the cloud. Humans design for scale, cost, and chaos.", category: "tech" },
  { slug: "ml-engineer", title: "ML Engineer", overallScore: 48, tagline: "AI helps build AI. But someone has to build the AI that builds AI.", category: "tech" },
  { slug: "cybersecurity-analyst", title: "Cybersecurity Analyst", overallScore: 45, tagline: "AI spots the patterns. Humans catch the adversaries.", category: "tech" },
  // creative
  { slug: "content-writer", title: "Content Writer", overallScore: 80, tagline: "AI writes the content. Humans provide the original insight.", category: "creative" },
  { slug: "copywriter", title: "Copywriter", overallScore: 78, tagline: "AI writes the copy. Humans write the headlines that break the internet.", category: "creative" },
  { slug: "social-media-manager", title: "Social Media Manager", overallScore: 72, tagline: "AI posts the content. Humans build the community.", category: "creative" },
  { slug: "graphic-designer", title: "Graphic Designer", overallScore: 70, tagline: "AI generates the graphics. Humans craft the brand.", category: "creative" },
  { slug: "voice-actor", title: "Voice Actor", overallScore: 68, tagline: "AI clones the voice. Humans deliver the performance.", category: "creative" },
  { slug: "video-editor", title: "Video Editor", overallScore: 65, tagline: "AI cuts the footage. Humans tell the story.", category: "creative" },
  { slug: "illustrator", title: "Illustrator", overallScore: 62, tagline: "AI generates the art. Humans create the vision.", category: "creative" },
  { slug: "motion-graphics-designer", title: "Motion Graphics Designer", overallScore: 58, tagline: "AI animates the graphics. Humans choreograph the story.", category: "creative" },
  { slug: "ui-ux-designer", title: "UI/UX Designer", overallScore: 55, tagline: "AI designs the pixels. Humans design the experience.", category: "creative" },
  { slug: "photographer", title: "Photographer", overallScore: 52, tagline: "AI generates the image. Humans capture the moment.", category: "creative" },
  // marketing
  { slug: "sdr-bdr", title: "SDR / BDR (Sales Development)", overallScore: 82, tagline: "AI sends the emails. But closing still takes a human.", category: "marketing" },
  { slug: "email-marketer", title: "Email Marketer", overallScore: 78, tagline: "AI writes the emails. Humans design the relationship.", category: "marketing" },
  { slug: "seo-specialist", title: "SEO Specialist", overallScore: 75, tagline: "AI writes the content. But search itself is being replaced by AI.", category: "marketing" },
  { slug: "digital-marketer", title: "Digital Marketer", overallScore: 72, tagline: "AI runs the campaigns. Humans craft the strategy.", category: "marketing" },
  { slug: "market-research-analyst", title: "Market Research Analyst", overallScore: 72, tagline: "AI processes the data. Humans find the insight.", category: "marketing" },
  { slug: "advertising-manager", title: "Advertising Manager", overallScore: 68, tagline: "AI optimizes the ads. Humans shape the message that moves people.", category: "marketing" },
  { slug: "growth-hacker", title: "Growth Hacker", overallScore: 65, tagline: "AI runs the experiments. Humans find the growth lever.", category: "marketing" },
  { slug: "brand-strategist", title: "Brand Strategist", overallScore: 42, tagline: "AI can execute a brand. It takes a human to build one.", category: "marketing" },
  // finance
  { slug: "tax-preparer", title: "Tax Preparer", overallScore: 82, tagline: "AI files the return. Humans navigate the gray areas.", category: "finance" },
  { slug: "accountant", title: "Accountant", overallScore: 78, tagline: "AI processes the books. Humans interpret the numbers.", category: "finance" },
  { slug: "insurance-underwriter", title: "Insurance Underwriter", overallScore: 78, tagline: "AI scores the risk. Humans make the call on edge cases.", category: "finance" },
  { slug: "loan-officer", title: "Loan Officer", overallScore: 75, tagline: "AI approves the loan. Humans build the trust.", category: "finance" },
  { slug: "financial-analyst", title: "Financial Analyst", overallScore: 70, tagline: "AI builds the model. Humans make the judgment call.", category: "finance" },
  { slug: "auditor", title: "Auditor", overallScore: 65, tagline: "AI checks the numbers. Humans check the judgment.", category: "finance" },
  { slug: "financial-advisor", title: "Financial Advisor", overallScore: 55, tagline: "AI manages the portfolio. Humans manage the emotions.", category: "finance" },
  { slug: "actuary", title: "Actuary", overallScore: 52, tagline: "AI runs the model. Humans assess the risk.", category: "finance" },
  // legal
  { slug: "legal-researcher", title: "Legal Researcher", overallScore: 80, tagline: "AI searches the cases. Humans build the argument.", category: "legal" },
  { slug: "paralegal", title: "Paralegal", overallScore: 75, tagline: "AI reads the documents. Humans build the case.", category: "legal" },
  { slug: "contract-lawyer", title: "Contract Lawyer", overallScore: 72, tagline: "AI drafts the contract. Humans negotiate the terms.", category: "legal" },
  { slug: "compliance-officer", title: "Compliance Officer", overallScore: 58, tagline: "AI monitors compliance. Humans interpret the gray areas.", category: "legal" },
  // healthcare
  { slug: "medical-transcriptionist", title: "Medical Transcriptionist", overallScore: 91, tagline: "AI transcribes the visit. This role is nearly extinct.", category: "healthcare" },
  { slug: "medical-coder", title: "Medical Coder", overallScore: 85, tagline: "AI assigns the codes. Humans catch the nuances.", category: "healthcare" },
  { slug: "pharmacist", title: "Pharmacist", overallScore: 60, tagline: "AI fills the prescription. Humans provide the care.", category: "healthcare" },
  { slug: "radiologist", title: "Radiologist", overallScore: 55, tagline: "AI reads the scan. Humans make the diagnosis.", category: "healthcare" },
  { slug: "healthcare-administrator", title: "Healthcare Administrator", overallScore: 55, tagline: "AI optimizes the operations. Humans navigate the politics.", category: "healthcare" },
  { slug: "physician", title: "Physician (MD/DO)", overallScore: 30, tagline: "AI aids the diagnosis. Humans heal the patient.", category: "healthcare" },
  { slug: "therapist", title: "Therapist / Counselor", overallScore: 28, tagline: "AI can listen. But healing requires human connection.", category: "healthcare" },
  { slug: "nurse", title: "Nurse (RN)", overallScore: 25, tagline: "AI monitors the vitals. Humans provide the care.", category: "healthcare" },
  { slug: "dentist", title: "Dentist", overallScore: 22, tagline: "AI reads the X-ray. Humans fix the tooth.", category: "healthcare" },
  // education
  { slug: "tutor", title: "Tutor", overallScore: 72, tagline: "AI tutors 24/7. But some students need a human.", category: "education" },
  { slug: "instructional-designer", title: "Instructional Designer", overallScore: 68, tagline: "AI builds the course. Humans design the learning experience.", category: "education" },
  { slug: "esl-teacher", title: "ESL Teacher", overallScore: 55, tagline: "AI teaches the grammar. Humans teach the confidence.", category: "education" },
  { slug: "college-professor", title: "College Professor", overallScore: 40, tagline: "AI delivers the lecture. Humans advance the knowledge.", category: "education" },
  { slug: "school-administrator", title: "School Administrator", overallScore: 40, tagline: "AI manages the data. Humans lead the school.", category: "education" },
  { slug: "teacher-k12", title: "Teacher (K-12)", overallScore: 32, tagline: "AI delivers the content. Humans inspire the student.", category: "education" },
  // business
  { slug: "technical-writer", title: "Technical Writer", overallScore: 75, tagline: "AI writes the docs. Humans explain the complex.", category: "business" },
  { slug: "recruiter", title: "Recruiter", overallScore: 72, tagline: "AI finds the candidates. Humans close the deal.", category: "business" },
  { slug: "executive-assistant", title: "Executive Assistant", overallScore: 72, tagline: "AI schedules the meeting. Humans manage the executive.", category: "business" },
  { slug: "business-analyst", title: "Business Analyst", overallScore: 68, tagline: "AI crunches the data. Humans define the question.", category: "business" },
  { slug: "supply-chain-manager", title: "Supply Chain Manager", overallScore: 62, tagline: "AI predicts the demand. Humans manage the disruption.", category: "business" },
  { slug: "project-manager", title: "Project Manager", overallScore: 58, tagline: "AI tracks the tasks. Humans lead the team.", category: "business" },
  { slug: "hr-manager", title: "HR Manager", overallScore: 55, tagline: "AI screens the resumes. Humans build the culture.", category: "business" },
  { slug: "customer-success-manager", title: "Customer Success Manager", overallScore: 55, tagline: "AI tracks the health score. Humans save the relationship.", category: "business" },
  { slug: "operations-manager", title: "Operations Manager", overallScore: 55, tagline: "AI optimizes the process. Humans lead the people.", category: "business" },
  { slug: "real-estate-agent", title: "Real Estate Agent", overallScore: 55, tagline: "AI lists the property. Humans close the deal.", category: "business" },
  { slug: "management-consultant", title: "Management Consultant", overallScore: 52, tagline: "AI builds the deck. Humans sell the strategy.", category: "business" },
  { slug: "product-manager", title: "Product Manager", overallScore: 45, tagline: "AI writes the spec. Humans decide what to build.", category: "business" },
  // media
  { slug: "translator", title: "Translator / Interpreter", overallScore: 72, tagline: "AI translates the words. Humans translate the meaning.", category: "media" },
  { slug: "editor", title: "Editor", overallScore: 62, tagline: "AI catches the typo. Humans shape the story.", category: "media" },
  { slug: "journalist", title: "Journalist", overallScore: 55, tagline: "AI writes the news brief. Humans break the story.", category: "media" },
];
