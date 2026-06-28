/* ===== DATA ===== */
const profile = {
  name: 'Apoorv Verma', role: 'UI/UX Designer', company: 'Webority Technologies',
  location: 'New Delhi, India', website: 'apoorv15verma.github.io/portfolio/',
  email: 'apoorv15verma@gmail.com', phone: '+91 9643706175',
  linkedin: 'https://linkedin.com/in/apoorv15verma',
  behance: 'https://behance.net/apoorv15verma',
  availability: ['Freelance Job', 'Full Time Job'],
  stats: { projectViews: '668', appreciations: '22', following: '1' },
  about: 'UI/UX Designer with hands-on experience crafting websites, apps, and enterprise portals. Specialising in user research, wireframing, and scalable design systems — translating complex requirements into clean, intuitive experiences. Currently at Webority Technologies, building products for government and enterprise clients.',
  skills: ['UI/UX Research','Wireframing','Design Systems','Responsive Design','UI/UX Testing','UI/UX Audit','Figma','Adobe Illustrator','Branding','Visual Design','HTML / CSS / JS','Canva','Multi-lingual Design','Inclusive Design'],
  tools: ['Figma','Adobe Illustrator','Canva','VS Code','Photoshop'],
  experience: [
    {
      role:'UI/UX Designer', company:'Webority Technologies', location:'Gurugram, Haryana',
      period:'May 2025 – Present', type:'Full Time',
      bullets:[
        'Designed multiple websites, apps, and enterprise portals with a focus on usability and scalability.',
        'Designed SAMAR Portal for Quality Council of India and DRDO; collaborated with QCI officials to gather requirements.',
        'Built UI Kits for consistency and faster development across projects.',
        'Worked with Business Analysts and developers to ensure smooth execution and feasibility.',
        'Handled UI/UX + graphic design across all product verticals.',
      ]
    },
    {
      role:'UI/UX Designer', company:'CSEWhy', location:'Gurugram, Haryana',
      period:'Feb 2025 – April 2025', type:'Full Time',
      bullets:[
        'Designed UPSC Prep and Student Portal with AI chat, mock tests, and video/audio learning.',
        'Built Admin Portal for uploading videos, notes, and promotional banners.',
        'Performed audits, user testing, and research to improve usability and performance.',
      ]
    },
    {
      role:'UI/UX Designer & Developer', company:'FranConnect', location:'Noida, Uttar Pradesh',
      period:'May 2024 – Dec 2024', type:'Internship',
      bullets:[
        'Designed Candidate Portal and Subway Franchisee Portal using Figma.',
        'Developed responsive web/mobile UI with HTML, CSS, JS, and jQuery integration.',
        'Conducted user research and created user flows to support intuitive design systems.',
      ]
    },
    {
      role:'Graphic Designer', company:'Federal Outsourcing', location:'Remote',
      period:'Jan 2023 – April 2024', type:'Freelance',
      bullets:[
        'Designed logos, web banners, and social media graphics in Adobe Illustrator and Photoshop.',
        'Managed creative direction, project quality, and deadlines independently.',
        'Created mail-templates, standees, banners, and pamphlets for advertising campaigns.',
      ]
    },
  ],
  education: {
    degree:'BTech in Electronics & Communication Engineering',
    school:'Maharaja Surajmal Institute Of Technology',
    location:'New Delhi', period:'2020 – 2024', grade:'82%',
  },
  achievements: [
    'Completed Graphic Design course — visual design, branding & creative composition',
    'Web Designer, Google Developers Students Club MSIT (Sept 2022 – Jul 2023)',
  ],
};

const projects = [
  {
    id:'menteetalk', title:'MenteeTalk', subtitle:'Mobile App Design', year:'2024', category:'Mobile App',
    description:'A mentorship platform connecting mentors and mentees for professional growth and career development.',
    gradient:'linear-gradient(145deg,#e8d5ff 0%,#c4a8ff 40%,#9b59b6 100%)', accentColor:'#6200EE', isDark:false,
    tags:['UI/UX','Mobile','Product Design'], stats:{views:'12.4k',appreciations:'89',saved:'234'},
    overview:'MenteeTalk is a comprehensive mentorship platform that bridges the gap between experienced professionals and aspiring individuals through an intuitive mobile interface.',
    problem:'Young professionals struggle to find the right mentors due to fragmented networks, high costs, and difficulty scheduling. Existing platforms feel transactional rather than relationship-focused.',
    goals:['Create meaningful connections between mentors and mentees','Simplify scheduling and session management','Build a trust-based community for professional growth','Enable skill-based matching for relevant mentorship'],
    research:'Conducted user interviews with 50+ professionals and students to understand pain points. Ran competitive analysis on 8 existing platforms.',
    persona:{ name:'Rahul Sharma', age:26, role:'Junior Software Engineer', goal:'Find a senior mentor to guide his career growth in tech', frustration:'Existing networking platforms feel impersonal and expensive' },
    results:['40% increase in mentor engagement after redesign','3,200 users onboarded in beta phase','4.8/5 average app store rating','85% session completion rate'],
    learnings:'Trust signals and social proof played a crucial role in mentor discovery. Users value relationship-building features over transaction efficiency.',
    colorPalette:['#6200EE','#9B59B6','#E8D5FF','#FFFFFF','#1A1A1A'],
    typography:[{role:'Heading',name:'Inter Bold',weight:'700',size:'32px'},{role:'Body',name:'Inter Regular',weight:'400',size:'16px'},{role:'Accent',name:'Inter SemiBold',weight:'600',size:'14px'}],
    screens:['Onboarding','Mentor Discovery','Profile View','Session Booking','Dashboard','Messaging'],
    images:['design-assets/menteeTalk_01.webp','design-assets/menteeTalk_02.gif','design-assets/menteeTalk_03.webp'],
    thumbnail:'projects/menteetalk-extra/thumbnail.webp'
  },
  {
    id:'csewhy', title:'CSEWhy App', subtitle:'UI/UX Case Study', year:'2024', category:'EdTech',
    description:'UPSC CSE Preparation Made Simple — A comprehensive learning platform for civil services aspirants.',
    gradient:'linear-gradient(145deg,#fff3cd 0%,#ffc107 50%,#ff6b00 100%)', accentColor:'#FF6B00', isDark:false,
    tags:['UI/UX','Web','EdTech'], stats:{views:'8.4k',appreciations:'67',saved:'189'},
    overview:'CSEWhy is an EdTech platform designed for UPSC Civil Services Examination aspirants, providing structured learning paths, mock tests, and expert guidance in one cohesive platform.',
    problem:'UPSC preparation is overwhelming with fragmented resources. Aspirants spend significant time managing multiple books and websites without a cohesive system.',
    goals:['Centralize all UPSC preparation materials','Provide personalized study plans','Enable progress tracking and analytics','Create engaging experience to reduce dropout rates'],
    research:'Surveyed 200+ UPSC aspirants and interviewed 10 successful candidates to understand study patterns and pain points.',
    persona:{ name:'Priya Mishra', age:24, role:'UPSC Aspirant (2nd Attempt)', goal:'Pass UPSC Prelims with a structured preparation plan', frustration:'Too many resources, no clear learning path, difficulty tracking progress' },
    results:['60% reduction in study material search time','15,000+ active learners in first 6 months','78% of users completed weekly study goals','4.6/5 user satisfaction score'],
    learnings:'Personalization and progress visibility are key motivators for long-term commitment. Gamification significantly improved daily active usage by 45%.',
    colorPalette:['#FF6B00','#FFC107','#FFF3CD','#FFFFFF','#1A1A1A'],
    typography:[{role:'Heading',name:'Inter Bold',weight:'700',size:'32px'},{role:'Body',name:'Inter Regular',weight:'400',size:'16px'},{role:'Accent',name:'Inter SemiBold',weight:'600',size:'14px'}],
    screens:['Onboarding','Subject Overview','Study Plan','Mock Test','Analytics','Current Affairs'],
    images:['projects/csewhy/behance_img_1.webp','projects/csewhy/behance_img_2.gif']
  },
  {
    id:'credos', title:'Credos', subtitle:'FinTech App Design', year:'2024', category:'FinTech',
    description:'Crafted for the Credit Worthy — A modern credit management and financial wellness application.',
    gradient:'linear-gradient(145deg,#1a1a2e 0%,#16213e 50%,#0f3460 100%)', accentColor:'#00D4AA', isDark:true,
    tags:['UI/UX','FinTech','Mobile'], stats:{views:'6.2k',appreciations:'45',saved:'156'},
    overview:'Credos is a next-generation credit management app that empowers users to understand, improve, and leverage their credit score for financial wellness.',
    problem:'Credit scores remain a mystery for most people. Lack of transparent, actionable insights leads to poor financial decisions and missed opportunities.',
    goals:['Demystify credit scores with clear explanations','Provide actionable recommendations for improvement','Enable secure credit monitoring and alerts','Create personalized financial wellness roadmaps'],
    research:'Analyzed financial behavior patterns of 500+ users across different credit score ranges and income brackets.',
    persona:{ name:'Arjun Kapoor', age:31, role:'Marketing Manager', goal:'Improve credit score to qualify for home loan', frustration:'Does not understand what affects his credit score or how to improve it' },
    results:['Average credit score improvement of 45 points in 3 months','92% of users reported better understanding of credit','50,000 downloads in first month','Featured in TechCrunch FinTech roundup'],
    learnings:'Financial anxiety is a major barrier to engagement. Making the app feel non-judgmental and celebratory of small wins dramatically improved retention.',
    colorPalette:['#00D4AA','#0f3460','#16213e','#1a1a2e','#FFFFFF'],
    typography:[{role:'Heading',name:'Inter Bold',weight:'700',size:'32px'},{role:'Body',name:'Inter Regular',weight:'400',size:'16px'},{role:'Accent',name:'Inter SemiBold',weight:'600',size:'14px'}],
    screens:['Score Overview','Factor Analysis','Improvement Plan','Credit History','Alerts','Tips'],
    images:['projects/credos/behance_img_1.webp','projects/credos/behance_img_2.webp','projects/credos/behance_img_3.webp']
  },
  {
    id:'webgen', title:'AI Landing Page Generator', subtitle:'Web Design & Concept', year:'2024', category:'AI Product',
    description:'Webgen — AI-powered landing page generator with intelligent design suggestions and real-time preview.',
    gradient:'linear-gradient(145deg,#2D1B69 0%,#6200EE 60%,#9C27B0 100%)', accentColor:'#BB86FC', isDark:true,
    tags:['UI/UX','AI','Web Design'], stats:{views:'9.8k',appreciations:'78',saved:'267'},
    overview:'Webgen is an AI-powered tool that enables non-designers to create professional landing pages through intelligent automation and smart design recommendations.',
    problem:'Small businesses struggle to create professional landing pages due to high design costs and lack of technical expertise. Existing builders feel rigid and generic.',
    goals:['Democratize professional web design through AI','Reduce creation time from days to minutes','Enable intelligent personalization based on brand','Provide conversion-optimized recommendations'],
    research:'Interviewed 30 small business owners and startup founders about their website creation journey and key pain points.',
    persona:{ name:'Neha Gupta', age:29, role:'Startup Founder', goal:'Launch a professional website without hiring a designer', frustration:'Too expensive to hire designers, existing tools too complex' },
    results:['3 minutes average time to create a landing page','89% user satisfaction with AI-generated designs','2x higher conversion rates vs. generic templates','Waitlist of 10,000+ users before launch'],
    learnings:"The 'magic moment' — when users first saw their brand colors applied automatically — was the key driver of conversion from trial to paid.",
    colorPalette:['#BB86FC','#6200EE','#2D1B69','#1A1A2E','#FFFFFF'],
    typography:[{role:'Heading',name:'Inter Bold',weight:'700',size:'32px'},{role:'Body',name:'Inter Regular',weight:'400',size:'16px'},{role:'Accent',name:'Inter SemiBold',weight:'600',size:'14px'}],
    screens:['Onboarding','AI Input','Generation','Editor','Preview','Publish'],
    images:['projects/webgen/cover-image.webp']
  },
  {
    id:'bookheaven', title:'Book Store', subtitle:'Mobile App Design', year:'2024', category:'E-Commerce',
    description:'Bookheaven — A premium book discovery and purchase application with curated collections.',
    gradient:'linear-gradient(145deg,#1c1c1c 0%,#333333 60%,#ff6b35 100%)', accentColor:'#FF6B35', isDark:true,
    tags:['UI/UX','E-Commerce','Mobile'], stats:{views:'5.6k',appreciations:'39',saved:'123'},
    overview:'Bookheaven is a premium e-commerce app for book enthusiasts, offering personalized recommendations, curated collections, and a seamless purchase experience.',
    problem:'Existing book apps focus on quantity over quality, overwhelming users. Discovery lacks personalization and the purchase journey has too many friction points.',
    goals:['Create curated premium book discovery experience','Implement intelligent recommendation engine','Simplify purchase and reading list management','Build community around shared reading interests'],
    research:'Conducted reading habit surveys with 150 book buyers. Analyzed cart abandonment patterns across 3 major book platforms.',
    persona:{ name:'Aisha Khan', age:28, role:'Content Writer & Book Lover', goal:'Discover new books in her genre and manage her reading list', frustration:'Too many generic recommendations, difficult to find niche books' },
    results:['35% increase in average order value','68% of users discover new genres through recommendations','4.7/5 App Store rating','25% lower cart abandonment vs. industry average'],
    learnings:"Visual design plays a larger role in book discovery than expected. 'Cover appeal' was cited by 73% of users as the primary reason for an impulse purchase.",
    colorPalette:['#FF6B35','#1C1C1C','#333333','#F5F5F5','#FFFFFF'],
    typography:[{role:'Heading',name:'Inter Bold',weight:'700',size:'32px'},{role:'Body',name:'Inter Regular',weight:'400',size:'16px'},{role:'Accent',name:'Inter SemiBold',weight:'600',size:'14px'}],
    screens:['Home','Discovery','Book Detail','Cart','Library','Community'],
    images:['projects/bookheaven/behance_img_1.webp','projects/bookheaven/behance_img_2.webp']
  },
  {
    id:'dashboard', title:'Dashboard Design', subtitle:'Web App Design', year:'2024', category:'Web App',
    description:'Clean and modern SaaS dashboard UI with data visualization and real-time analytics.',
    gradient:'linear-gradient(145deg,#f8f9fa 0%,#e9ecef 50%,#dee2e6 100%)', accentColor:'#6200EE', isDark:false,
    tags:['UI/UX','Dashboard','Web App'], stats:{views:'7.1k',appreciations:'54',saved:'198'},
    overview:'A comprehensive SaaS dashboard design featuring intuitive data visualization, real-time analytics, and a modular component system for enterprise applications.',
    problem:'Enterprise dashboards sacrifice usability for data density. Users struggle to extract actionable insights from cluttered interfaces with poor information hierarchy.',
    goals:['Create clean scannable data visualization','Design modular components for flexible configuration','Implement progressive disclosure for complex datasets','Ensure accessibility across all user roles'],
    research:'Conducted contextual inquiries with 20 enterprise users across 4 companies to identify cognitive load triggers.',
    persona:{ name:'Vikram Singh', age:35, role:'Operations Manager', goal:'Monitor KPIs and team performance at a glance', frustration:'Current dashboard requires too many clicks to find critical information' },
    results:['45% faster data comprehension in usability testing','Zero critical accessibility issues (WCAG 2.1 AA)','90% task completion rate in user testing','Adopted by 3 enterprise clients in pilot'],
    learnings:'White space is not empty space — it directly improves data comprehension. Users reported significantly lower cognitive fatigue with the redesign.',
    colorPalette:['#6200EE','#F8F9FA','#DEE2E6','#495057','#1A1A1A'],
    typography:[{role:'Heading',name:'Inter Bold',weight:'700',size:'32px'},{role:'Body',name:'Inter Regular',weight:'400',size:'16px'},{role:'Accent',name:'Inter SemiBold',weight:'600',size:'14px'}],
    screens:['Overview','Analytics','Team View','Reports','Settings','Notifications'],
    images:['projects/dashboard/img1.webp']
  },
  {
    id:'social-media', title:'Social Media Posts', subtitle:'Graphic Design', year:'2024', category:'Graphic Design',
    description:'A collection of social media post designs crafted for brand awareness, engagement, and storytelling across platforms.',
    gradient:'linear-gradient(145deg,#ff6b6b 0%,#ee5a24 50%,#f368e0 100%)', accentColor:'#f368e0', isDark:true,
    tags:['Graphic Design','Social Media','Branding'], stats:{views:'4.2k',appreciations:'31',saved:'98'},
    images:['projects/social-media/behance_img_1.webp','projects/social-media/behance_img_2.webp','projects/social-media/behance_img_3.webp','projects/social-media/behance_img_4.webp','projects/social-media/behance_img_5.webp','projects/social-media/behance_img_6.webp','projects/social-media/behance_img_7.webp','projects/social-media/behance_img_8.webp']
  },
  {
    id:'banners', title:'Banner Designs', subtitle:'Visual Design', year:'2024', category:'Visual Design',
    description:'High-impact banner designs for web, advertising, and promotional campaigns with strong visual hierarchy.',
    gradient:'linear-gradient(145deg,#0f2027 0%,#203a43 50%,#2c5364 100%)', accentColor:'#00b4d8', isDark:true,
    tags:['Visual Design','Banners','Advertising'], stats:{views:'3.1k',appreciations:'24',saved:'72'},
    images:['projects/banners/banner1.webp','projects/banners/banner2.webp','projects/banners/banner3.webp']
  },
  {
    id:'logos', title:'Logo Designs', subtitle:'Branding & Identity', year:'2024', category:'Branding',
    description:'Brand identity and logo design work — clean, memorable marks built for scalability and versatility.',
    gradient:'linear-gradient(145deg,#1a1a2e 0%,#16213e 50%,#0f3460 100%)', accentColor:'#e94560', isDark:true,
    tags:['Branding','Logo Design','Identity'], stats:{views:'5.8k',appreciations:'47',saved:'141'},
    images:['projects/logos/logo1.webp','projects/logos/logo2.webp','projects/logos/logo3.webp','projects/logos/logo4.webp']
  }
];

/* ===== STATE ===== */
let activeTab = 'work';
let currentView = 'home'; // 'home' | 'project'
let isMobile = window.innerWidth < 768;

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  renderTabButtons();
  renderWorkPanel();
  renderInfoPanel();
  renderExperiencePanel();
  setupNavScroll();
  setupScrollReveal();
  setupProfileBarSticky();
  handleHashRoute();
});

window.addEventListener('resize', () => {
  const wasMobile = isMobile;
  isMobile = window.innerWidth < 768;
  if (wasMobile !== isMobile) renderTabButtons();
});

window.addEventListener('hashchange', handleHashRoute);

/* ===== HASH ROUTING ===== */
function handleHashRoute() {
  const hash = location.hash;
  if (hash.startsWith('#/project/')) {
    const id = hash.replace('#/project/', '');
    const project = projects.find(p => p.id === id);
    if (project) showProjectView(project);
    else showHomeView();
  } else {
    showHomeView();
  }
}

function showHomeView() {
  currentView = 'home';
  document.getElementById('home-view').style.display = '';
  document.getElementById('project-view').classList.add('hidden');
  document.getElementById('project-view').innerHTML = '';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showProjectView(project) {
  currentView = 'project';
  document.getElementById('home-view').style.display = 'none';
  const view = document.getElementById('project-view');
  view.classList.remove('hidden');
  view.style.display = 'block';
  view.innerHTML = renderProjectDetails(project);
  window.scrollTo({ top: 0 });
  setupScrollReveal();
  setupProjectStickyNav();
}

function setupProjectStickyNav() {
  const nav = document.getElementById('proj-sticky-nav');
  const hero = document.querySelector('.proj-hero-new');
  if (!nav || !hero) return;
  const observer = new IntersectionObserver(
    ([entry]) => nav.classList.toggle('visible', !entry.isIntersecting),
    { rootMargin: '-1px 0px 0px 0px', threshold: 0 }
  );
  observer.observe(hero);
}

/* ===== TAB NAVIGATION ===== */
const DESKTOP_TABS = [
  { id:'work', label:'Work' },
  { id:'info', label:'Info' },
  { id:'experience', label:'Experience' },
];
const MOBILE_TABS = [
  { id:'work', label:'Work' },
  { id:'info', label:'Info' },
  { id:'experience', label:'Experience' },
];

function renderTabButtons() {
  const tabs = isMobile ? MOBILE_TABS : DESKTOP_TABS;
  const container = document.getElementById('tab-buttons');
  if (!container) return;
  container.innerHTML = tabs.map(t => `
    <button class="nav-tab${activeTab === t.id ? ' active' : ''}" data-tab="${t.id}">${t.label}</button>
  `).join('');
  container.querySelectorAll('.nav-tab').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });
  if (!['work','info','experience'].includes(activeTab)) switchTab('work');
}

function switchTab(tabId) {
  activeTab = tabId;
  document.querySelectorAll('.nav-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabId);
  });
  const allPanels = ['work', 'info', 'experience'];
  allPanels.forEach(id => {
    const el = document.getElementById(`panel-${id}`);
    if (!el) return;
    if (id === tabId) {
      el.classList.remove('hidden');
      el.classList.add('active');
      el.style.display = 'block';
    } else {
      el.classList.remove('active');
      el.classList.add('hidden');
      el.style.display = '';
    }
  });
  setTimeout(setupScrollReveal, 50);
}

/* ===== RENDER WORK PANEL ===== */
function renderWorkPanel() {
  const panel = document.getElementById('panel-work');
  panel.style.display = 'block';
  panel.classList.add('active');
  panel.innerHTML = `
    <div class="project-grid-section">
      <div class="section-header-row">
        <div class="section-header-left">
          <h2 class="projects-heading">Projects</h2>
          <span class="projects-count">${projects.length}</span>
        </div>
      </div>
      <div class="projects-grid">
        ${projects.map((p, i) => renderProjectCard(p, i)).join('')}
      </div>
    </div>
  `;
  panel.addEventListener('click', (e) => {
    const card = e.target.closest('.project-card');
    if (card) location.hash = `/project/${card.dataset.id}`;
  });
}

function renderProjectCard(p, i) {
  const thumb = p.images && p.images.length
    ? `<img src="${p.images[0]}" alt="${p.title}" class="card-thumb-img" loading="lazy" />`
    : `<div class="card-thumb-bg" style="background:${p.gradient}">
          <div class="card-thumb-content">
            <div class="card-thumb-label ${p.isDark ? 'light' : ''}">${p.title}</div>
          </div>
          <div class="deco-circle deco-circle-1" style="background:${p.accentColor}"></div>
          <div class="deco-circle deco-circle-2" style="background:${p.accentColor}"></div>
        </div>`;
  const tagsText = p.tags ? p.tags.join(', ') : p.category;
  return `
    <div class="project-card animate-up" data-id="${p.id}" style="animation-delay:${i * 70}ms" tabindex="0" role="button" aria-label="View ${p.title} case study">
      <div class="card-thumb">
        ${thumb}
      </div>
      <div class="card-info">
        <div class="card-info-body">
          <h3 class="card-title">${p.title}</h3>
          <span class="card-tags">${tagsText}</span>
        </div>
        <span class="card-arrow">↗</span>
      </div>
    </div>
  `;
}

/* ===== RENDER INFO PANEL ===== */
function renderInfoPanel() {
  const panel = document.getElementById('panel-info');
  panel.innerHTML = `
    <div class="info-panel">
      <div class="info-block animate-up">
        <h3 class="info-block-title">About</h3>
        <p class="info-block-body">${profile.about}</p>
      </div>
      <div class="info-block animate-up">
        <h3 class="info-block-title">Skills &amp; Tools</h3>
        <div class="skills-grid">${profile.skills.map(s => `<div class="skill-pill">${s}</div>`).join('')}</div>
      </div>
      <div class="info-block animate-up">
        <h3 class="info-block-title">Education</h3>
        <div class="edu-card">
          <div class="edu-icon-wrap">🎓</div>
          <div class="edu-info">
            <h4 class="edu-degree">${profile.education.degree}</h4>
            <span class="edu-school">${profile.education.school}, ${profile.education.location}</span>
            <div class="edu-meta">
              <span class="edu-year">${profile.education.period}</span>
              <span class="edu-grade">Grade: ${profile.education.grade}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="info-block animate-up">
        <h3 class="info-block-title">Achievements</h3>
        <ul class="achievements-list">
          ${profile.achievements.map(a => `
            <li class="achievement-item"><span class="achievement-dot">★</span>${a}</li>
          `).join('')}
        </ul>
      </div>
      <div class="info-block animate-up">
        <h3 class="info-block-title">Contact</h3>
        <div class="contact-cards">
          <a href="mailto:${profile.email}" class="contact-card">
            <div class="contact-card-icon">✉️</div>
            <div class="contact-card-info"><span class="contact-card-label">Email</span><span class="contact-card-value">${profile.email}</span></div>
            <span class="contact-card-arrow">→</span>
          </a>
          <a href="tel:${profile.phone}" class="contact-card">
            <div class="contact-card-icon">📞</div>
            <div class="contact-card-info"><span class="contact-card-label">Phone</span><span class="contact-card-value">${profile.phone}</span></div>
            <span class="contact-card-arrow">→</span>
          </a>
          <a href="${profile.linkedin}" target="_blank" rel="noopener noreferrer" class="contact-card">
            <div class="contact-card-icon">💼</div>
            <div class="contact-card-info"><span class="contact-card-label">LinkedIn</span><span class="contact-card-value">linkedin.com/in/apoorv15verma</span></div>
            <span class="contact-card-arrow">→</span>
          </a>
          <a href="${profile.behance}" target="_blank" rel="noopener noreferrer" class="contact-card">
            <div class="contact-card-icon">🎨</div>
            <div class="contact-card-info"><span class="contact-card-label">Behance</span><span class="contact-card-value">behance.net/apoorv15verma</span></div>
            <span class="contact-card-arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  `;
}

/* ===== RENDER EXPERIENCE PANEL ===== */
function renderExperiencePanel() {
  const panel = document.getElementById('panel-experience');
  panel.innerHTML = `
    <div class="info-panel">
      <div class="info-block animate-up">
        <h3 class="info-block-title">Work Experience</h3>
        <div class="exp-timeline">
          ${profile.experience.map((exp, i) => `
            <div class="exp-timeline-item">
              <div class="exp-timeline-line">
                <div class="exp-timeline-dot"></div>
                ${i < profile.experience.length - 1 ? '<div class="exp-timeline-connector"></div>' : ''}
              </div>
              <div class="exp-timeline-content">
                <div class="exp-header-row">
                  <div>
                    <h4 class="exp-title">${exp.role}</h4>
                    <div class="exp-company-row">
                      <span class="exp-company-name">${exp.company}</span>
                      <span class="exp-location">· ${exp.location}</span>
                    </div>
                  </div>
                  <div class="exp-right">
                    <span class="exp-type-badge">${exp.type}</span>
                    <span class="exp-duration">${exp.period}</span>
                  </div>
                </div>
                <ul class="exp-bullets">
                  ${exp.bullets.map(b => `
                    <li class="exp-bullet-item"><span class="exp-bullet-dot"></span>${b}</li>
                  `).join('')}
                </ul>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="info-block animate-up">
        <h3 class="info-block-title">Education</h3>
        <div class="edu-card">
          <div class="edu-icon-wrap">🎓</div>
          <div class="edu-info">
            <h4 class="edu-degree">${profile.education.degree}</h4>
            <span class="edu-school">${profile.education.school}</span>
            <div class="edu-meta">
              <span class="edu-year">${profile.education.period}</span>
              <span class="edu-grade">Grade: ${profile.education.grade}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ===== RENDER PROJECT DETAILS ===== */
function renderProjectDetails(p) {
  const idx = projects.findIndex(x => x.id === p.id);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  function getPlatform(proj) {
    const sub = (proj.subtitle || '').toLowerCase();
    if (sub.includes('mobile') && sub.includes('web')) return 'Web & Mobile App';
    if (sub.includes('mobile')) return 'Mobile App';
    if (sub.includes('web')) return 'Web App';
    if (sub.includes('graphic') || sub.includes('social')) return 'Digital';
    if (sub.includes('brand') || sub.includes('logo') || sub.includes('identity')) return 'Multi-Platform';
    if (sub.includes('visual') || sub.includes('banner')) return 'Print & Digital';
    return proj.subtitle || 'Digital';
  }

  return `
    <nav class="proj-sticky-nav" id="proj-sticky-nav">
      <span class="proj-bc-link" onclick="location.hash=''">Home</span>
      <span class="proj-bc-sep">›</span>
      <span class="proj-bc-link" onclick="location.hash=''">Projects</span>
      <span class="proj-bc-sep">›</span>
      <span class="proj-bc-current">${p.title}</span>
    </nav>

    <div class="proj-hero-new">
      <div class="proj-hero-grid">${Array.from({length:8},(_,i)=>`<div class="grid-line" style="--spk-delay:${(i*0.55).toFixed(2)}s"></div>`).join('')}</div>
      <div class="proj-hero-bg-deco"></div>
      <div class="proj-hero-bg-deco-2"></div>
      <p class="proj-hero-brand">Apoorv Verma</p>
      <div class="proj-hero-breadcrumb">
        <span class="proj-bc-link" onclick="location.hash=''">Home</span>
        <span class="proj-bc-sep">›</span>
        <span class="proj-bc-link" onclick="location.hash=''">Projects</span>
        <span class="proj-bc-sep">›</span>
        <span class="proj-bc-current">Project Details</span>
      </div>
      <h1 class="proj-hero-title">${p.title}</h1>
      <div class="proj-hero-meta">
        <div class="proj-hero-meta-item">
          <span class="proj-meta-label">Scope</span>
          <span class="proj-meta-value">${p.category}</span>
        </div>
        <div class="proj-hero-meta-divider"></div>
        <div class="proj-hero-meta-item">
          <span class="proj-meta-label">Platform</span>
          <span class="proj-meta-value">${getPlatform(p)}</span>
        </div>
        <div class="proj-hero-meta-divider"></div>
        <div class="proj-hero-meta-item">
          <span class="proj-meta-label">Year</span>
          <span class="proj-meta-value">${p.year}</span>
        </div>
      </div>
    </div>

    ${p.images && p.images.length ? `
    <section class="behance-gallery">
      ${p.images.map((src, i) => `
        <div class="behance-gallery-item">
          <img src="${src}" alt="${p.title}" class="behance-gallery-img" loading="${i === 0 ? 'eager' : 'lazy'}" />
        </div>
      `).join('')}
    </section>` : ''}

    ${renderRelatedProjects(p.id)}

    <div class="details-project-nav">
      <button class="proj-nav-item" onclick="location.hash='/project/${prev.id}'">
        <span class="proj-nav-dir">← Previous</span>
        <span class="proj-nav-title">${prev.title}</span>
      </button>
      <button class="proj-nav-home" onclick="location.hash=''">View All Work</button>
      <button class="proj-nav-item proj-nav-next" onclick="location.hash='/project/${next.id}'">
        <span class="proj-nav-dir">Next →</span>
        <span class="proj-nav-title">${next.title}</span>
      </button>
    </div>
  `;
}

function renderRelatedProjects(currentId) {
  const related = projects.filter(p => p.id !== currentId).slice(0, 3);
  return `
    <section class="related-projects">
      <div class="related-projects-inner">
        <div class="related-header">
          <h2 class="related-heading"><em class="related-heading-em">Related</em> Projects</h2>
          <button class="related-see-all-btn" onclick="location.hash=''">See All &#8594;</button>
        </div>
        <div class="related-grid">
          ${related.map((p, i) => `
            <div class="project-card animate-up" data-id="${p.id}"
              onclick="location.hash='/project/${p.id}'"
              tabindex="0" role="button" aria-label="View ${p.title} case study"
              style="animation-delay:${i * 70}ms;cursor:pointer;">
              <div class="card-thumb">
                ${p.images && p.images.length
                  ? `<img src="${p.images[0]}" alt="${p.title}" class="card-thumb-img" loading="lazy" />`
                  : `<div class="card-thumb-bg" style="background:${p.gradient}">
                      <div class="card-thumb-content">
                        <div class="card-thumb-label ${p.isDark ? 'light' : ''}">${p.title}</div>
                        <div class="card-thumb-category ${p.isDark ? 'light' : ''}">${p.subtitle}</div>
                      </div>
                    </div>`
                }
                <div class="card-overlay">
                  <button class="card-cta-btn" tabindex="-1">View Case Study &#8594;</button>
                </div>
                <div class="card-tag">${p.category}</div>
              </div>
              <div class="card-info">
                <div class="card-info-main">
                  <h3 class="card-title">${p.title}</h3>
                  <span class="card-year">${p.year}</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

/* ===== STICKY SIDEBAR ===== */
function setupProfileBarSticky() {
  const sidebar = document.querySelector('.sidebar-sticky');
  const hero = document.querySelector('.hero');
  if (!sidebar || !hero) return;
  window.addEventListener('scroll', () => {
    sidebar.classList.toggle('is-sticky', hero.getBoundingClientRect().bottom <= 0);
  }, { passive: true });
}

/* ===== STICKY NAV SCROLL EFFECT ===== */
function setupNavScroll() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
}

/* ===== SCROLL REVEAL (IntersectionObserver) ===== */
function setupScrollReveal() {
  const els = document.querySelectorAll('.animate-up:not(.visible)');
  if (!els.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => observer.observe(el));
}
