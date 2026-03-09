// Vite glob – eagerly import all portfolio images at build time.
// Folders are named "Case Study N" (with spaces).
const allImages = import.meta.glob(
  '../assets/Portfolio/Case Study */**/*.{webp,jpg,jpeg,png}',
  { eager: true, import: 'default' }
);

/**
 * Helper: find a single image whose path includes every fragment in `parts`.
 * Uses boundary matching so "Case Study 1" won't match "Case Study 10".
 */
function img(...parts) {
  const key = Object.keys(allImages).find((k) =>
    parts.every((p) => k.includes('/' + p + '/') || k.endsWith('/' + p))
  );
  return key ? allImages[key] : null;
}

/**
 * Helper: find ALL images whose path includes every fragment in `parts`,
 * sorted alphabetically by filename.
 */
function imgs(...parts) {
  return Object.keys(allImages)
    .filter((k) => parts.every((p) => k.includes('/' + p + '/') || k.endsWith('/' + p)))
    .sort()
    .map((k) => allImages[k]);
}

// ─────────────────────────────────────────────────────────────────
// Cover & gallery images resolved via glob helpers
// ─────────────────────────────────────────────────────────────────

const cs1Cover  = img('Case Study 1', 'Cover');
const cs1Images = imgs('Case Study 1', 'Images');

const cs2Cover  = img('Case Study 2', 'Cover');

const cs3Cover  = img('Case Study 3', 'Cover');

const cs4Cover  = img('Case Study 4', 'Cover');

const cs5Cover  = img('Case Study 5', 'Cover');

const cs6Cover  = img('Case Study 6', 'Cover');

const cs7Cover  = img('Case Study 7', 'Cover');

const cs8Cover  = img('Case Study 8', 'Cover');
const cs8Images = imgs('Case Study 8', 'Images');

const cs9Cover  = img('Case Study 9', 'Cover');
const cs9Images = imgs('Case Study 9', 'Images');

const cs10Cover  = img('Case Study 10', 'Cover');
const cs10Images = imgs('Case Study 10', 'Images');

const cs11Cover  = img('Case Study 11', 'Cover');
const cs11Images = imgs('Case Study 11', 'Images');

const cs12Cover = img('Case Study 12', 'Cover');

const cs13Cover  = img('Case Study 13', 'Cover');
const cs13Images = imgs('Case Study 13', 'Images');

const cs15Cover  = img('Case Study 15', 'Cover');
const cs15Images = imgs('Case Study 15', 'Images');

const cs16Cover  = img('Case Study 16', 'Cover');
const cs16Images = imgs('Case Study 16', 'Images');

const cs17Cover  = img('Case Study 17', 'Cover');
const cs17Images = imgs('Case Study 17', 'Images');

const cs18Cover = img('Case Study 18', 'Cover');

const cs21Images = imgs('Case Study 21', 'Images');

const cs22Cover = img('Case Study 22', 'Cover');

const cs23Cover = img('Case Study 23', 'Cover');

const cs24Cover = img('Case Study 24', 'Cover');

const cs25Cover = img('Case Study 25', 'Cover');

const cs26Cover  = img('Case Study 26', 'Cover');
const cs26Images = imgs('Case Study 26', 'Images');

const cs27Cover  = img('Case Study 27', 'Cover');
const cs27Images = imgs('Case Study 27', 'Images');

const cs28Cover  = img('Case Study 28', 'Cover');
const cs28Images = imgs('Case Study 28', 'Images');

const cs29Cover  = img('Case Study 29', 'Cover');
const cs29Images = imgs('Case Study 29', 'Images');

const cs30Covers = imgs('Case Study 30', 'Cover');
const cs30Images = imgs('Case Study 30', 'Images');

const cs31Cover  = img('Case Study 31', 'Cover');
const cs31Images = imgs('Case Study 31', 'Images');

const cs32Cover  = img('Case Study 32', 'Cover');
const cs32Images = imgs('Case Study 32', 'Images');

const cs33Cover  = img('Case Study 33', 'Cover');
const cs33Images = imgs('Case Study 33', 'Images');

const cs34Cover  = img('Case Study 34', 'Cover');
const cs34Images = imgs('Case Study 34', 'Images');


/**
 * All real case studies, ordered by number (ascending).
 * Portfolio page reverses to show latest first.
 */
const caseStudies = [
  {
    id: 'proshno',
    number: 1,
    title: 'Proshno',
    subtitle: 'Community Knowledge Sharing Platform',
    category: 'Web & App',
    tags: ['WordPress', 'Community', 'Q&A Platform'],
    cover: cs1Cover,
    images: cs1Images,
    youtubeUrl: null,
    liveUrl: null,
    overview:
      'Proshno is a knowledge-sharing platform designed to foster community interactions by allowing users to ask questions, give answers, and engage in topic-based groups. Built on WordPress, it caters to students, professionals, and the general public.',
    challenge:
      'Creating a meaningful online space for knowledge exchange that balances simplicity with rich community features like groups, badges, and topic-based discussions — all while keeping navigation intuitive for a diverse user base.',
    solution:
      'We leveraged WordPress for flexibility and scalability, customizing it to support community-centric features including user groups, a badge/incentive system, question-and-answer flows, polls, and tags for content discovery. The design emphasized usability with a minimalistic interface.',
    features: [
      'Home feed with recent and popular questions',
      'Create and join topic-based groups',
      'Badge system for active participation',
      'Questions, polls, and tag-based categorization',
      'User profiles and FAQ onboarding',
      'Fully responsive mobile experience',
    ],
    outcome:
      'Proshno successfully launched with positive feedback for its ease of use and community focus. The platform established a solid foundation for scaling and attracting a larger community of knowledge seekers.',
    techStack: ['WordPress', 'PHP', 'MySQL', 'Custom Theme'],
    date: '2024-10-01',
  },
  {
    id: 'feedofmri-portfolio',
    number: 2,
    title: 'FeedofMRI Portfolio',
    subtitle: 'Professional Portfolio Website',
    category: 'Web & App',
    tags: ['WordPress', 'Elementor', 'SEO', 'Portfolio'],
    cover: cs2Cover,
    images: [],
    youtubeUrl: 'https://youtu.be/JPNNE6WFShc',
    liveUrl: null,
    overview:
      'The FeedofMRI portfolio website was designed to showcase the skills, work, and journey of a software engineer and UI/UX designer — a professional digital space for clients, partners, and collaborators.',
    challenge:
      'Optimizing user experience with seamless navigation while showcasing detailed project information, ensuring mobile responsiveness, and ranking well on search engines for increased visibility.',
    solution:
      'We employed WordPress with the Elementor page builder for a flexible, customizable design. Responsive design, SEO best practices, and interactive animations were implemented to create both a functional and visually appealing experience.',
    features: [
      'Custom portfolio and blog sections',
      'Engaging visual animations and transitions',
      'Mobile-first responsive design',
      'SEO-optimized structure and metadata',
      'User-centric navigation',
    ],
    outcome:
      'The portfolio website met its objectives of providing an engaging, professional online presence. Its user-friendly design and optimized features attract potential business and collaborations.',
    techStack: ['WordPress', 'Elementor', 'CSS', 'JavaScript'],
    date: '2024-10-05',
  },
  {
    id: 'boraq-space',
    number: 3,
    title: 'Boraq Space',
    subtitle: 'Tech eCommerce Platform',
    category: 'Web & App',
    tags: ['WordPress', 'WooCommerce', 'eCommerce', 'SEO'],
    cover: cs3Cover,
    images: [],
    youtubeUrl: null,
    liveUrl: null,
    overview:
      'Boraq Space is a Bangladeshi-based eCommerce platform dedicated to selling high-quality tech products — a side business of Boraq.dev, designed for a seamless shopping experience with modern aesthetics and robust performance.',
    challenge:
      'Managing diverse product categories (wearables, accessories, computing), ensuring secure payments, catering exclusively to Bangladeshi customers with localized design, and building a scalable structure for future growth.',
    solution:
      'We built a custom WooCommerce-powered platform with a sleek, minimalist design reflecting the tech focus. Responsive UI, secure payment gateways, wishlist functionality, dynamic product filtering, and heatmap integration were delivered.',
    features: [
      'Mobile-responsive design',
      'Wishlist and cart functionality',
      'Secure payment gateways',
      'SEO optimization for search visibility',
      'Heatmap integration for user behavior tracking',
      'Dynamic product filtering and categorization',
    ],
    outcome:
      'Successfully launched a user-friendly eCommerce platform that met all client requirements, with increased user engagement and positive customer feedback within the first month.',
    techStack: ['WordPress', 'WooCommerce', 'PHP', 'MySQL', 'CSS'],
    date: '2024-10-10',
  },
  {
    id: 'portfolio-html-css-js',
    number: 4,
    title: 'Portfolio Website v1',
    subtitle: 'Built with HTML, CSS & JavaScript',
    category: 'Web & App',
    tags: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
    cover: cs4Cover,
    images: [],
    youtubeUrl: 'https://youtu.be/Od-m8IB9rIQ',
    liveUrl: null,
    overview:
      'A personal portfolio website built from scratch using core web technologies — HTML, CSS, and JavaScript — without relying on CMS platforms, showcasing skills, services, and projects.',
    challenge:
      'Creating a dynamic and engaging design while keeping the codebase lightweight. The design needed to reflect growth potential while maintaining simplicity for a junior-level developer.',
    solution:
      'Designed a hero section with a dynamic typing effect, responsive navigation, contact form, and percentage-based progress bars for skill visualization. Deployed on GitHub Pages for easy access.',
    features: [
      'Responsive design across all devices',
      'Interactive typing effect in hero section',
      'Skill visualization with progress bars',
      'Service sections with room for updates',
      'Functional contact form',
    ],
    outcome:
      'Successfully launched a lightweight, visually appealing portfolio that improved online presence and made it easier for collaborators to understand services and reach out.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
    date: '2024-10-15',
  },
  {
    id: 'professional-portfolio',
    number: 5,
    title: 'Portfolio Website v2',
    subtitle: 'Modern Professional Portfolio',
    category: 'Web & App',
    tags: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
    cover: cs5Cover,
    images: [],
    youtubeUrl: null,
    liveUrl: null,
    overview:
      'A modern, responsive professional portfolio designed with clean minimalist layout to present skills, projects, and contact information — with dynamic and interactive elements for enhanced engagement.',
    challenge:
      'Showcasing diverse skills and tools in an organized and appealing layout. Balancing animations and transitions without compromising loading speed.',
    solution:
      'Built a semantic HTML structure with responsive grid layouts, CSS animations, hover effects, and JavaScript-powered scroll animations. Featured icon-based skill representations and a chronological project list.',
    features: [
      'Responsive design across all devices',
      'Icon-based skill visualization',
      'Interactive scroll animations and hover effects',
      'Detailed projects section',
      'User-friendly contact form with validation',
    ],
    outcome:
      'Provided a professional online presence, boosting credibility among peers and clients. Attracted new collaboration and freelance opportunities.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
    date: '2024-10-20',
  },
  {
    id: 'litedocs',
    number: 6,
    title: 'LiteDocs',
    subtitle: 'Lightweight Word Processing Software',
    category: 'Web & App',
    tags: ['Python', 'Tkinter', 'Desktop App', 'Open Source'],
    cover: cs6Cover,
    images: [],
    youtubeUrl: null,
    liveUrl: null,
    overview:
      'LiteDocs is a simple yet efficient word-processing software built entirely with Python and tkinter, designed for quick drafts, minimalistic editing, and hassle-free document management.',
    challenge:
      'Building a visually appealing and user-friendly interface using tkinter while balancing feature richness with simplicity, and resolving initial development bugs.',
    solution:
      'Developed a responsive, simple layout with intuitive menus. Implemented core text editing features, bullet and numbered lists, and undo-redo functionality. Published as open-source on GitHub.',
    features: [
      'Lightweight design for quick document creation',
      'Basic text formatting (bold, italic, underline)',
      'Bullet and numbered lists',
      'Undo-redo functionality',
      'Open-source under GPL license',
    ],
    outcome:
      'Successfully developed a functional word processing application that received positive feedback for its lightweight design and simplicity.',
    techStack: ['Python', 'Tkinter', 'GPL License'],
    date: '2024-11-01',
  },
  {
    id: 'campus-app',
    number: 7,
    title: 'Campus App',
    subtitle: 'Unified Educational Platform',
    category: 'Web & App',
    tags: ['Mobile App', 'Education', 'Community'],
    cover: cs7Cover,
    images: [],
    youtubeUrl: 'https://youtu.be/xFQLrF76Mqw',
    liveUrl: null,
    overview:
      'The Campus App is an innovative platform connecting students, educators, and researchers worldwide — a centralized hub for learning, communication, and collaboration within educational institutions.',
    challenge:
      'Balancing simplicity and functionality, connecting diverse user groups (students, teachers, researchers), and ensuring global accessibility regardless of location or institution.',
    solution:
      'Built an intuitive, scalable platform with a centralized feed for real-time updates, university dashboard, clubs and communities, and a messaging system for seamless communication.',
    features: [
      'Centralized feed with real-time updates',
      'University dashboard for resources and tools',
      'Club and community exploration',
      'In-app messaging system',
      'Personalized user profiles',
    ],
    outcome:
      'Successfully delivered a platform that simplifies communication and collaboration for students and educators, creating a stepping stone for a globally connected academic community.',
    techStack: ['Mobile Development', 'REST API', 'Real-time Updates'],
    date: '2024-12-01',
  },
  {
    id: 'aust-cse-carnival-3',
    number: 8,
    title: 'AUST CSE Carnival 3.0',
    subtitle: 'In Memory of Ayon Raihan — Event Branding',
    category: 'UI & Branding',
    tags: ['Graphics Design', 'Event Branding', 'Social Media'],
    cover: cs8Cover,
    images: cs8Images,
    youtubeUrl: null,
    liveUrl: null,
    overview:
      'Creative graphics design for AUST CSE Carnival 3.0, a week-long event commemorating the legacy of Ayon Raihan — featuring programming contests, UI/UX competitions, software exhibitions, and robo-soccer.',
    challenge:
      'Creating a cohesive visual identity that captured the carnival\'s energy and technical spirit while honoring the memorial theme across all materials.',
    solution:
      'Developed event banners, social media posters, custom badges and certificates, and event brochures. Every design choice — from color schemes to typography — resonated with the event\'s purpose.',
    features: [
      'Event banners capturing carnival essence',
      'Social media posters for engagement',
      'Custom badges and certificates',
      'Event brochures with visual overview',
      'Cohesive visual identity across all materials',
    ],
    outcome:
      'The event successfully celebrated the contributions of Ayon Raihan, inspiring participants to embrace innovation. Designs played a pivotal role in bringing the event to life.',
    techStack: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma'],
    date: '2024-12-10',
  },
  {
    id: 'naimul-memorial-cricket-league',
    number: 9,
    title: 'Naimul Memorial Cricket League',
    subtitle: 'AUST CSE Cricket Tournament Branding',
    category: 'UI & Branding',
    tags: ['Graphics Design', 'Event Branding', 'Sports'],
    cover: cs9Cover,
    images: cs9Images,
    youtubeUrl: null,
    liveUrl: null,
    overview:
      'Visual identity for the Naimul Memorial Cricket League Spring 2023, organized by AUST CSE Society — a tournament that brought the community together for sportsmanship and camaraderie.',
    challenge:
      'Creating a cohesive and engaging visual identity for a multi-team cricket tournament that honored the memorial theme while driving excitement and participation.',
    solution:
      'Crafted event posters, team logos and jerseys, social media posts, tournament rulesheets and group tables, and champion/participant certificates — all with a unified aesthetic.',
    features: [
      'Event posters highlighting key details',
      'Team logos and jersey designs',
      'Social media promotional posts',
      'Tournament rulesheets and group tables',
      'Champion and participant certificates',
    ],
    outcome:
      'Designs captured the essence of the event, amplifying its reach and impact with high-quality graphics that resonate with the spirit of the occasion.',
    techStack: ['Adobe Photoshop', 'Adobe Illustrator'],
    date: '2024-12-15',
  },
  {
    id: 'aust-cse-carnival-4',
    number: 10,
    title: 'Great CSE Carnival Adventure',
    subtitle: 'AUST CSE Carnival 4.0 — Brand Identity',
    category: 'UI & Branding',
    tags: ['Branding', 'Event Design', 'Digital & Print'],
    cover: cs10Cover,
    images: cs10Images,
    youtubeUrl: null,
    liveUrl: null,
    overview:
      'The official branding and visual identity for AUST CSE Carnival 4.0 — an annual event celebrating technology, innovation, and competitive excellence.',
    challenge:
      'Creating a visually compelling and cohesive design that captures the excitement of a large-scale tech event while ensuring strong brand recognition across digital and print platforms.',
    solution:
      'Designed a bold color palette, futuristic typography, and engaging graphic elements inspired by computer science and modern technology. Delivered logo, social media promotions, merchandise, and digital assets.',
    features: [
      'Logo and comprehensive brand guidelines',
      'Social media promotional graphics',
      'Event merchandise (T-shirts, banners, ID cards)',
      'Website and digital assets',
      'Consistent visual identity across all touchpoints',
    ],
    outcome:
      'Branding significantly enhanced event visibility and recognition, contributing to increased engagement, higher participation rates, and a more immersive experience.',
    techStack: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma'],
    date: '2025-01-01',
  },
  {
    id: 'auraaccess',
    number: 11,
    title: 'AuraAccess',
    subtitle: 'The Ultimate ISP Experience — Brand Identity',
    category: 'UI & Branding',
    tags: ['Branding', 'ISP', 'UI/UX', 'Marketing'],
    cover: cs11Cover,
    images: cs11Images,
    youtubeUrl: null,
    liveUrl: null,
    overview:
      'AuraAccess is a cutting-edge ISP branding project designed to establish a strong digital presence and user-centric identity, reflecting speed, reliability, and innovation.',
    challenge:
      'Creating a modern, professional, and engaging brand experience for a premium ISP service that communicates trust and technological advancement.',
    solution:
      'Built a branding strategy around a sleek, futuristic aesthetic with a clean and vibrant color palette. Delivered logo, website UI, marketing/social media assets, and print/advertising materials.',
    features: [
      'Logo symbolizing seamless connectivity',
      'Clean and intuitive website UI',
      'Social media graphics and banners',
      'Brochures, business cards, and outdoor advertising',
      'Consistent brand presence across all channels',
    ],
    outcome:
      'Successfully positioned AuraAccess as a premium service provider with a strong market presence, increasing brand trust and customer engagement.',
    techStack: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop'],
    date: '2025-01-10',
  },
  {
    id: 'campus-website-mern',
    number: 12,
    title: 'Campus Website',
    subtitle: 'Unified Educational Platform Built on MERN',
    category: 'Web & App',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'MERN'],
    cover: cs12Cover,
    images: [],
    youtubeUrl: 'https://youtu.be/CLJ_f_qJUgI',
    liveUrl: null,
    overview:
      'A comprehensive web platform built using the MERN stack to unify academic management and communication — streamlining access to course materials, announcements, and academic schedules.',
    challenge:
      'Building a secure, efficient, and scalable solution serving students, educators, and administrators with real-time content management and role-based access.',
    solution:
      'Leveraged MongoDB, Express.js, React, and Node.js for a fast, real-time experience. Implemented secure JWT authentication, role-based access, centralized dashboard, and real-time notifications.',
    features: [
      'Secure user authentication with role-based access',
      'Centralized academic dashboard',
      'Real-time notifications and updates',
      'Course and resource management',
      'Responsive and scalable design',
    ],
    outcome:
      'Significantly enhanced academic management by providing a centralized platform for communication and resource sharing, improving user engagement.',
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT'],
    date: '2025-01-20',
  },
  {
    id: 'aust-iupc-website',
    number: 13,
    title: 'AUST IUPC Website',
    subtitle: 'Inter-University Programming Contest Platform',
    category: 'Web & App',
    tags: ['Web Development', 'Event Platform', 'Registration'],
    cover: cs13Cover,
    images: cs13Images,
    youtubeUrl: null,
    liveUrl: null,
    overview:
      'The official website for AUST Inter-University Programming Contest, serving as a central hub for participants, organizers, and enthusiasts with registration, real-time updates, and resources.',
    challenge:
      'Building a user-friendly, responsive platform that provides comprehensive contest information, handles online registration, and delivers real-time updates.',
    solution:
      'Designed a responsive website with intuitive navigation, online registration system with automated confirmations, resource repository, and live leaderboard integration.',
    features: [
      'Comprehensive event details and schedules',
      'Online registration with auto-confirmation',
      'Resource repository with past problems',
      'Real-time announcements and live leaderboard',
      'FAQ section for participant support',
    ],
    outcome:
      'Improved participant engagement, streamlined event management, reduced administrative workload, and expanded the contest\'s reach to a broader audience.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    date: '2025-03-01',
  },
  {
    id: 'sahajyo-rescue-relief',
    number: 15,
    title: 'Sahajyo Rescue & Relief',
    subtitle: 'Emergency Response UI/UX Design',
    category: 'UI & Branding',
    tags: ['UI/UX', 'Emergency Response', 'Figma', 'Prototyping'],
    cover: cs15Cover,
    images: cs15Images,
    youtubeUrl: 'https://youtu.be/Dj2evwUJPG4',
    liveUrl: null,
    overview:
      'Sahajyo Rescue & Relief is a critical platform designed to streamline emergency response and relief distribution, with an intuitive user journey for both first responders and affected individuals.',
    challenge:
      'Designing for high-pressure environments where every second counts, presenting complex emergency data logically, and ensuring ease-of-use for non-technical users under stress.',
    solution:
      'Conducted stakeholder interviews and emergency service analysis. Created wireframes and high-fidelity mockups with clean typography, accessible color contrasts, and a minimalistic interface to reduce cognitive overload.',
    features: [
      'Clear layout for emergency functionality',
      'Intuitive navigation for crisis scenarios',
      'Proactive alert system',
      'Accessible design for diverse user groups',
      'Interactive prototypes with real-time feedback',
    ],
    outcome:
      'The final design provides a balance between emergency functionality and ease-of-use, contributing to faster response times and improved crisis communication.',
    techStack: ['Figma', 'Prototyping', 'User Research', 'Usability Testing'],
    date: '2025-03-10',
  },
  {
    id: 'dhaka-bakery-ui',
    number: 16,
    title: 'Dhaka Bakery Sales Management',
    subtitle: 'Bakery Operations UI/UX Design',
    category: 'UI & Branding',
    tags: ['UI/UX', 'SaaS', 'Dashboard Design', 'Figma'],
    cover: cs16Cover,
    images: cs16Images,
    youtubeUrl: null,
    liveUrl: null,
    overview:
      'An innovative platform to revolutionize how bakeries manage sales, inventory, and customer interactions — a comprehensive tool that simplifies daily operations while providing actionable insights.',
    challenge:
      'Simplifying complex sales and inventory tasks, catering to staff with varying digital literacy, and presenting real-time data in a visually digestible format.',
    solution:
      'Collaborated with bakery owners to map workflows. Designed personas and interactive prototypes with a warm, inviting palette and distinct modules for sales, inventory, and analytics.',
    features: [
      'Unified sales and inventory dashboard',
      'Real-time analytics and data visualization',
      'Role-based modules for different staff',
      'Warm, brand-aligned color palette',
      'Streamlined navigation and user comprehension',
    ],
    outcome:
      'Notably decreased training time and operational errors while increasing overall efficiency. Users have immediate access to critical data for prompt decision-making.',
    techStack: ['Figma', 'Prototyping', 'UI Design', 'User Testing'],
    date: '2025-03-15',
  },
  {
    id: 'sohojogi-ui',
    number: 17,
    title: 'Sohojogi App UI/UX',
    subtitle: 'Multi-Service Mobile App Design',
    category: 'UI & Branding',
    tags: ['UI/UX', 'Mobile App', 'Figma', 'Prototyping'],
    cover: cs17Cover,
    images: cs17Images,
    youtubeUrl: null,
    liveUrl: null,
    overview:
      'Sohojogi is a comprehensive mobile application designed to simplify everyday tasks and enhance user productivity, integrating various functionalities into a single, user-friendly platform.',
    challenge:
      'Providing diverse services without overwhelming the user, ensuring seamless task transitions, and maintaining responsive design consistency across devices.',
    solution:
      'Conducted user research, structured content hierarchy for intuitive journeys, and developed high-fidelity interactive prototypes with clean modern aesthetics and smooth animations.',
    features: [
      'Unified interface balancing multiple functionalities',
      'Smooth animations and transitions',
      'Consistent color schemes and typography',
      'Performance optimized for older devices',
      'Beta user-tested for usability refinement',
    ],
    outcome:
      'Successfully merged utility with elegance, improving user engagement and satisfaction, setting a new standard for multi-service mobile applications.',
    techStack: ['Figma', 'Prototyping', 'UI/UX Design', 'Interaction Design'],
    date: '2025-04-01',
  },
  {
    id: 'sohojogi-app',
    number: 18,
    title: 'Sohojogi',
    subtitle: 'One-Stop Home Service Solutions App',
    category: 'Web & App',
    tags: ['React Native', 'Node.js', 'MongoDB', 'Full-Stack'],
    cover: cs18Cover,
    images: [],
    youtubeUrl: 'https://youtu.be/Lwbt7yas1KI',
    liveUrl: null,
    overview:
      'SOHOJOGI is a one-stop household service platform connecting users with trusted, verified professionals — plumbers, electricians, cleaners, mechanics — with location-based matching and seamless booking.',
    challenge:
      'Ensuring cross-platform performance and scalability, integrating secure APIs for booking and payments, implementing strong authentication, and delivering real-time features.',
    solution:
      'Built a clean, scalable architecture with secure authentication, real-time booking updates, location-based matching, and a responsive interface across Android, iOS, and web.',
    features: [
      'Location-based service matching',
      'Seamless booking process',
      'Real-time updates and notifications',
      'Secure authentication and data protection',
      'Cross-platform (Android, iOS, Web)',
      'Verified professional profiles',
    ],
    outcome:
      'SOHOJOGI successfully bridges the gap between household needs and quality service delivery with a reliable and transparent ecosystem.',
    techStack: ['React Native', 'Node.js', 'MongoDB', 'Express.js', 'JWT'],
    date: '2025-04-10',
  },
  {
    id: 'email-spam-detector',
    number: 19,
    title: 'Email Spam Detector',
    subtitle: 'ML-Powered Email Classification',
    category: 'AI & Automation',
    tags: ['Python', 'Scikit-learn', 'NLP', 'Machine Learning'],
    cover: null,
    images: [],
    youtubeUrl: null,
    liveUrl: null,
    overview:
      'An end-to-end email spam detector built in Python using supervised machine learning — walking through loading, cleaning, vectorizing, training, evaluating, and exporting a spam classification model.',
    challenge:
      'Building a reliable classifier that accurately distinguishes spam from legitimate emails using text data, with proper preprocessing, feature extraction, and model evaluation.',
    solution:
      'Implemented a complete ML pipeline: data cleaning, Bag-of-Words/TF-IDF vectorization, Naive Bayes and Logistic Regression classifiers, evaluation metrics, and model persistence for deployment.',
    features: [
      'Data preprocessing with stopword removal',
      'Text vectorization (Bag-of-Words & TF-IDF)',
      'Naive Bayes and Logistic Regression models',
      'Performance evaluation with multiple metrics',
      'Model export for real-world deployment',
    ],
    outcome:
      'Delivered a practical end-to-end ML workflow that serves as a starting point for real-world spam detection and a learning resource for ML beginners.',
    techStack: ['Python', 'pandas', 'Scikit-learn', 'Jupyter Notebook'],
    date: '2025-05-01',
  },
  {
    id: 'car-price-prediction',
    number: 20,
    title: 'Car Price Prediction',
    subtitle: 'One-Hot Encoding & Linear Regression',
    category: 'AI & Automation',
    tags: ['Python', 'Scikit-learn', 'ML', 'Linear Regression'],
    cover: null,
    images: [],
    youtubeUrl: null,
    liveUrl: null,
    overview:
      'A Multiple Linear Regression model to predict car selling prices using mileage, age, and car model — with One-Hot Encoding for categorical features and data visualization with matplotlib.',
    challenge:
      'Working with a very small dataset of 13 samples while avoiding overfitting, handling categorical data encoding, and balancing feature types for accurate predictions.',
    solution:
      'Converted categorical car models into dummy variables, trained a multiple linear regression model, and achieved an R² score of ~0.94 with meaningful price predictions.',
    features: [
      'One-Hot Encoding for categorical car models',
      'Multiple Linear Regression prediction',
      'Data visualization with matplotlib',
      'High accuracy (R² ≈ 0.94)',
      'Sample predictions for real scenarios',
    ],
    outcome:
      'Demonstrated how feature encoding combined with regression can be effectively applied to mixed data types for accurate price predictions.',
    techStack: ['Python', 'pandas', 'Scikit-learn', 'matplotlib', 'Jupyter'],
    date: '2025-05-10',
  },
  {
    id: 'heart-disease-prediction',
    number: 21,
    title: 'Heart Disease Prediction',
    subtitle: 'PCA & Logistic Regression for Healthcare',
    category: 'AI & Automation',
    tags: ['Python', 'PCA', 'Logistic Regression', 'Healthcare ML'],
    cover: null,
    images: cs21Images,
    youtubeUrl: null,
    liveUrl: null,
    overview:
      'A machine learning project using PCA for dimensionality reduction on a heart disease dataset, followed by Logistic Regression — demonstrating how PCA can simplify complex medical datasets.',
    challenge:
      'High-dimensional correlated features, handling categorical variables with proper encoding, choosing the right number of principal components, and improving predictive power on medical datasets.',
    solution:
      'Standardized numerical features, one-hot encoded categorical variables, applied PCA with 8 components capturing ~99.9% variance, and trained a logistic regression classifier achieving ~68% accuracy.',
    features: [
      'PCA-based dimensionality reduction',
      'One-Hot Encoding for categorical features',
      'Logistic Regression classifier',
      'Explained variance analysis',
      'Complete ML workflow with evaluation metrics',
    ],
    outcome:
      'Provided valuable insights into how dimensionality reduction techniques can simplify complex medical datasets while maintaining useful predictive power.',
    techStack: ['Python', 'pandas', 'Scikit-learn', 'PCA', 'Jupyter'],
    date: '2025-05-20',
  },
  {
    id: 'nondan',
    number: 22,
    title: 'Nondan',
    subtitle: 'Event Management & Booking Platform',
    category: 'Web & App',
    tags: ['React', 'Node.js', 'MongoDB', 'MERN', 'Full-Stack'],
    cover: cs22Cover,
    images: [],
    youtubeUrl: 'https://youtu.be/BHVQRQ5MDLU',
    liveUrl: null,
    overview:
      'Nondan is a modern event management and booking platform simplifying how organizers create, promote, and manage events — while providing users an effortless way to discover and book experiences.',
    challenge:
      'Organizers struggled with fragmented workflows and lack of centralized dashboards. Users faced difficulty discovering events and inefficient booking systems.',
    solution:
      'Built a full-stack MERN application with React frontend, Node.js/Express backend, MongoDB database, JWT authentication, role-based access, and payment gateway integration.',
    features: [
      'Event creation and management dashboard',
      'Secure booking and payment flow',
      'Role-based access control',
      'Smart scheduling preventing double-booking',
      'Analytics dashboard with real-time insights',
      'Responsive design for mobile and desktop',
    ],
    outcome:
      '60% reduction in manual registration time, faster participant onboarding, 40% increase in attendee turnout, and seamless communication through notifications.',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
    date: '2025-06-01',
  },
  {
    id: 'nibaron-climateai',
    number: 23,
    title: 'Nibaron',
    subtitle: 'ClimateAI for Farmers',
    category: 'Web & App',
    tags: ['React', 'Laravel', 'AI', 'Agriculture', 'ClimateAI'],
    cover: cs23Cover,
    images: [],
    youtubeUrl: 'https://youtu.be/5-okao60db4',
    liveUrl: null,
    overview:
      'Nibaron empowers farmers with AI-driven climate insights and actionable recommendations for irrigation, fertilization, and crop protection — designed for Bangladesh and global agricultural ecosystems.',
    challenge:
      'Farmers suffer yield losses due to unpredictable weather, floods, and pollution. Existing forecasts lack actionable, crop-specific insights.',
    solution:
      'Built with React + Tailwind + Vite frontend and Laravel + Sanctum backend. Links climate hazards to crop growth stages, provides Bangla voice alerts, and includes a digital marketplace.',
    features: [
      'AI-driven climate insights and recommendations',
      'Crop-specific weather alerts',
      'Bangla voice alerts for accessibility',
      'Digital marketplace (Nibaron Bazaar)',
      'Location-based service matching',
    ],
    outcome:
      'Predictive alerts minimize climate-related losses, improved resource usage through AI recommendations, and enhanced accessibility via localized voice assistance.',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Laravel', 'Sanctum', 'REST API'],
    date: '2025-06-15',
  },
  {
    id: 'nibaron-app',
    number: 24,
    title: 'Nibaron App',
    subtitle: 'Empowering Campus Life Through Digital Innovation',
    category: 'Web & App',
    tags: ['React Native', 'Laravel', 'Firebase', 'Mobile App'],
    cover: cs24Cover,
    images: [],
    youtubeUrl: 'https://youtu.be/VCbtS7w1erg',
    liveUrl: null,
    overview:
      'A comprehensive mobile solution centralizing student information and campus resources — notices, housing, club activities, and study materials — in one convenient app.',
    challenge:
      'Students frequently miss important notices, struggle to find reliable housing, have limited access to organized club resources, and lack consistent learning materials.',
    solution:
      'Built with React Native for cross-platform support, connected to Laravel backend with JWT authentication. Implemented offline support, real-time push notifications via Firebase, and role-based access.',
    features: [
      'Student housing listings',
      'Academic notices and announcements',
      'Club and event updates',
      'Resource sharing and study guides',
      'Instant push notifications',
      'Role-based access control',
    ],
    outcome:
      '80% faster access to notices, improved student participation, reduced communication gap between departments, and a unified campus life platform.',
    techStack: ['React Native', 'Laravel', 'MySQL', 'JWT', 'Firebase', 'Expo'],
    date: '2025-07-01',
  },
  {
    id: 'bakery-management-system',
    number: 25,
    title: 'Bakery Management System',
    subtitle: 'Full-Stack Bakery Operations Platform',
    category: 'Web & App',
    tags: ['React', 'Node.js', 'Full-Stack', 'Inventory', 'SaaS'],
    cover: cs25Cover,
    images: [],
    youtubeUrl: 'https://youtu.be/lEE5e08Dc8M',
    liveUrl: null,
    overview:
      'A full-stack platform unifying front-end UX and back-end operational control for bakery operations — inventory management, order processing, customer engagement, and data insights.',
    challenge:
      'Manual tracking of perishable inventory leading to waste, fragmented order management, limited customer-relationship tools, and lack of real-time sales insights.',
    solution:
      'Developed a unified full-stack application with responsive web interface, robust API layer, order processing, perishable inventory alerts, and a reporting dashboard.',
    features: [
      'Inventory management with reorder alerts',
      'Order processing for standard and custom orders',
      'User roles and access control',
      'Sales and reporting dashboard',
      'Low-stock and expiry alerts',
      'Responsive interface for staff and management',
    ],
    outcome:
      'Reduced manual inventory tracking by ~50%, dropped stock-outs and wastage by ~30%, standardized order processing, and gave management visibility into sales patterns.',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
    date: '2025-07-15',
  },
  {
    id: 'star-cineplex-ui',
    number: 26,
    title: 'Star Cineplex',
    subtitle: 'Mobile Application UI/UX Design',
    category: 'UI & Branding',
    tags: ['UI/UX', 'Mobile App', 'Figma', 'Entertainment'],
    cover: cs26Cover,
    images: cs26Images,
    youtubeUrl: null,
    liveUrl: null,
    overview:
      'A comprehensive mobile application UI/UX design for Star Cineplex — delivering a premium movie-going experience through an intuitive digital interface for ticket booking, showtime browsing, and concession ordering.',
    challenge:
      'Creating a smooth and visually appealing mobile experience that simplifies cinema ticket booking while capturing the premium entertainment brand feel.',
    solution:
      'Designed a complete mobile application flow with high-fidelity screens covering movie browsing, seat selection, payment, and ticket confirmation — all with a sleek dark theme.',
    features: [
      'Movie browsing and showtime selection',
      'Interactive seat selection interface',
      'Seamless payment flow',
      'Digital ticket with QR code',
      'Dark-themed premium aesthetic',
    ],
    outcome:
      'Delivered a polished UI/UX design system ready for development, establishing a digital identity matching the premium cinema brand experience.',
    techStack: ['Figma', 'Prototyping', 'UI/UX Design'],
    date: '2025-08-01',
  },
  {
    id: 'trizen-solutions',
    number: 27,
    title: 'Trizen Solutions',
    subtitle: 'Next-Gen Tech Brand Identity',
    category: 'UI & Branding',
    tags: ['Branding', 'Logo Design', 'Visual Identity'],
    cover: cs27Cover,
    images: cs27Images,
    youtubeUrl: null,
    liveUrl: null,
    overview:
      'A future-forward visual identity for Trizen Solutions — a technology company delivering digital transformation, automation, and intelligent software solutions. The name fuses Tri + Zen.',
    challenge:
      'Reflecting the company\'s innovative spirit and technical excellence through a modern brand that symbolizes motion, confidence, and precision in the digital world.',
    solution:
      'Created a bold geometric logo with arrow-inspired "T" emblem, Navy Blue and Red color palette, rounded geometric sans-serif typography, and app icon variants.',
    features: [
      'Primary logo with arrow-inspired T emblem',
      'App icon variant for digital branding',
      'Navy Blue (#1D2A62) and Red (#E41D24) palette',
      'Rounded geometric sans-serif typography',
      'Adaptable, memorable, and scalable identity',
    ],
    outcome:
      'Positioned Trizen Solutions as a dynamic and reliable tech company ready to compete globally, capturing the dual essence of innovation and stability.',
    techStack: ['Adobe Illustrator', 'Figma', 'Brand Design'],
    date: '2025-08-10',
  },
  {
    id: 'ezs-iphone-campaign',
    number: 28,
    title: 'EZS Accessory Campaign',
    subtitle: 'iPhone 16 Pro Max Visual Campaign',
    category: 'UI & Branding',
    tags: ['Visual Design', 'Product Marketing', 'Campaign'],
    cover: cs28Cover,
    images: cs28Images,
    youtubeUrl: null,
    liveUrl: null,
    overview:
      'A modern visual campaign for EZS tech accessories brand, highlighting compatibility, premium design, and product quality for Apple\'s iPhone 16 series.',
    challenge:
      'Communicating compatibility clarity, matching Apple\'s minimal aesthetic while standing out, and creating visual storytelling that elevates everyday accessories to premium lifestyle products.',
    solution:
      'Used elegant composition and visual clarity to create informational yet high-end product presentations with compatibility cues and clean design.',
    features: [
      'Compatibility clarity for iPhone 16 models',
      'Premium brand-aligned visual aesthetic',
      'Social media-optimized compositions',
      'Product storytelling through elegant design',
    ],
    outcome:
      'Achieved instant product understanding, higher social media engagement, and brand recognition boost aligning with modern consumer tech expectations.',
    techStack: ['Adobe Photoshop', 'Adobe Illustrator', 'Product Photography'],
    date: '2025-08-15',
  },
  {
    id: 'vastra',
    number: 29,
    title: 'Vastra',
    subtitle: 'Reliable & Elegant Textile Brand Identity',
    category: 'UI & Branding',
    tags: ['Branding', 'Logo Design', 'Textile', 'Visual Identity'],
    cover: cs29Cover,
    images: cs29Images,
    youtubeUrl: null,
    liveUrl: null,
    overview:
      'Vastra is a textile and apparel brand requiring a strong, elegant, and memorable visual identity — embodying the tagline "A Thing of Reliability."',
    challenge:
      'Communicating reliability and trust without losing modern appeal, working across print and digital, and balancing industrial strength with fashion-forward elegance.',
    solution:
      'Created a distinctive "V" mark with dynamic wave forms representing fabric folds, paired with Deep Maroon, Charcoal Brown, and Black palette. Aldo The Apache for logo, Poppins for body text.',
    features: [
      'Dynamic "V" logo with fabric fold symbolism',
      'Deep Maroon and Charcoal Brown color palette',
      'Aldo The Apache logo typography',
      'Business card and letterhead design',
      'Cross-media brand consistency',
    ],
    outcome:
      'Projects trust and craftsmanship, establishes a distinctive visual presence across media, and creates an immediate impression of professionalism and quality.',
    techStack: ['Adobe Illustrator', 'Figma', 'Brand Design', 'Print Design'],
    date: '2025-08-20',
  },
  {
    id: 'node-crypto-mascot',
    number: 30,
    title: 'Node — "Neo" Mascot',
    subtitle: 'The Face of a Smarter Crypto Future',
    category: 'UI & Branding',
    tags: ['Mascot Design', 'Branding', 'Crypto', 'Visual Identity'],
    cover: cs30Covers[0] || null,
    images: [...cs30Covers.slice(1), ...cs30Images],
    youtubeUrl: null,
    liveUrl: null,
    overview:
      'Designed "Neo," a dynamic mascot personifying Node\'s vision in cryptocurrency — innovation made simple. Neo bridges technology and users by embodying trust, intelligence, and playfulness.',
    challenge:
      'Representing crypto innovation without feeling cold or corporate, building approachability for blockchain newcomers, and reflecting continuous movement and growth.',
    solution:
      'Introduced Neo with form flowing like a digital circuit, a friendly wink, vibrant green gradient (#00E676 – #1B5E20) palette, and custom rounded sans-serif typography integrating the mascot into the brand mark.',
    features: [
      'Dynamic mascot character "Neo"',
      'Custom rounded sans-serif brand typography',
      'Vibrant green gradient color palette',
      'Arrow motif representing positive momentum',
      'Cross-platform adaptable identity',
      'Mascot integrated into logo design',
    ],
    outcome:
      'Neo became the face of Node\'s ecosystem — stronger brand recall, enhanced trust perception, and cross-platform adaptability as "The Crypto Connector."',
    techStack: ['Adobe Illustrator', 'Figma', 'Character Design', 'Brand Design'],
    date: '2025-09-01',
  },
  {
    id: 'prarombho-proyas-24',
    number: 31,
    title: 'প্রারম্ভ প্রয়াস ২৪',
    subtitle: 'AUST Civilian\'s Event Identity & Collateral',
    category: 'UI & Branding',
    tags: ['Event Branding', 'Print Design', 'Merchandise', 'Identity'],
    cover: cs31Cover,
    images: cs31Images,
    youtubeUrl: null,
    liveUrl: null,
    overview:
      'Complete brand identity and merchandise system for Prarombho Proyas 24 — the flagship annual event by AUST Civilian\'s Club celebrating innovation, engineering spirit, and creative collaboration.',
    challenge:
      'Representing civil engineering\'s precision and creativity while remaining approachable for students, and delivering print-ready designs for production items.',
    solution:
      'Built a unified identity around blue & neon-green theme with skyline-style logo, geometric fonts, and construction silhouette motifs. Delivered ID cards, entrance gate design, key rings, and pen packaging.',
    features: [
      'Skyline-style event logo',
      'Event ID card with lanyard branding',
      'Entrance gate concept design',
      'Premium key ring and pen packaging',
      'Construction-inspired graphic motifs',
    ],
    outcome:
      'Strong visual identity across 8+ touchpoints, increased student participation, successful print production, and elevated organizational image.',
    techStack: ['Adobe Illustrator', 'Adobe Photoshop', 'Print Design'],
    date: '2025-09-10',
  },
  {
    id: 'moushum',
    number: 32,
    title: 'Moushum (মৌসুম)',
    subtitle: 'A Fresh Identity Rooted in Nature',
    category: 'UI & Branding',
    tags: ['Branding', 'Logo Design', 'Agriculture', 'Bangla Typography'],
    cover: cs32Cover,
    images: cs32Images,
    youtubeUrl: null,
    liveUrl: null,
    overview:
      'Moushum — meaning "season" in Bangla — is a brand inspired by the rhythm of nature, agriculture, and growth, celebrating natural abundance with simplicity and authenticity.',
    challenge:
      'Capturing growth and nature while appealing to a modern audience, merging Bangladeshi tradition with contemporary design, and working across print and digital.',
    solution:
      'Crafted a modern Bangla typography wordmark with leaf and wheat motif. Green palette (#6ED76E primary, #2E7A3F deep, #F6E67D accent) evoking balance and vitality.',
    features: [
      'Modern Bangla typography wordmark',
      'Leaf and wheat growth motif',
      'Green and yellow color palette',
      'Latin companion font for English materials',
      'Versatile across print and digital',
    ],
    outcome:
      'Memorable cultural connection, versatile brand usability, and positive emotional resonance with eco-conscious consumers.',
    techStack: ['Adobe Illustrator', 'Figma', 'Brand Design', 'Typography'],
    date: '2025-09-15',
  },
  {
    id: 'aust-cse-carnival-6-branding',
    number: 33,
    title: 'AUST CSE Carnival 6.0',
    subtitle: 'Complete Event Brand & Design System',
    category: 'UI & Branding',
    tags: ['Event Branding', 'Design System', 'Print', 'Digital'],
    cover: cs33Cover,
    images: cs33Images,
    youtubeUrl: null,
    liveUrl: null,
    overview:
      'Complete brand and design system for AUST CSE Carnival 6.0, presented by Havit — one of the largest inter-university tech festivals in Bangladesh.',
    challenge:
      'Refreshing the carnival brand while maintaining academic prestige, adapting across multiple sub-events, and ensuring premium sponsor visibility.',
    solution:
      'Designed a unified identity with Dark Emerald (#002E2E) and Electric Green (#80FF6E) palette, bold geometric sans-serifs, circuit-inspired motifs, and comprehensive collateral.',
    features: [
      'Official polo T-shirt design',
      'Promotional posters and leaflets',
      'Website launch campaign graphics',
      'Prizepool announcement design',
      'Sub-event specific branding',
      'QR-based registration posters',
    ],
    outcome:
      'Elevated AUST CSE Carnival into a digitally cohesive, high-energy brand ecosystem, setting a new standard for student tech events in Bangladesh.',
    techStack: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'Print Design'],
    date: '2025-10-01',
  },
  {
    id: 'aust-cse-carnival-6-website',
    number: 34,
    title: 'AUST CSE Carnival 6.0 Website',
    subtitle: 'Official Event Digital Hub',
    category: 'Web & App',
    tags: ['React', 'Vite', 'CSS Modules', 'Event Website'],
    cover: cs34Cover,
    images: cs34Images,
    youtubeUrl: null,
    liveUrl: 'https://austcsecarnival.vercel.app',
    overview:
      'The official website for AUST CSE Carnival 6.0, serving as the central digital hub for all segments, registration, sponsors, gallery, and event details.',
    challenge:
      'Providing a responsive experience across devices, consolidating multiple event segments, reflecting high-energy branding, and enabling easy content updates.',
    solution:
      'Utilized React with Vite for fast builds, modular file structure, CSS Modules for style encapsulation, and a UI matching the Carnival\'s tech-forward color palette.',
    features: [
      'Event segment showcase pages',
      'Online registration system',
      'Sponsor visibility sections',
      'Photo gallery',
      'Mobile-responsive design',
      'Cross-browser support',
    ],
    outcome:
      'Delivered a professional digital presence aligned with high-energy branding, providing a unified platform for exploring segments, registering, and connecting with sponsors.',
    techStack: ['React', 'Vite', 'CSS Modules', 'React Router', 'Vercel'],
    date: '2025-11-01',
  },
];

export default caseStudies;






