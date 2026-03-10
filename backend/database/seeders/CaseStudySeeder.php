<?php

namespace Database\Seeders;

use App\Models\CaseStudy;
use App\Models\CaseStudyTag;
use App\Models\CaseStudyTechStack;
use App\Models\CaseStudyFeature;
use Illuminate\Database\Seeder;

class CaseStudySeeder extends Seeder
{
    public function run(): void
    {
        $studies = [
            [
                'slug' => 'proshno', 'number' => 1, 'title' => 'Proshno', 'subtitle' => 'Community Knowledge Sharing Platform', 'category' => 'Web & App',
                'cover_image_path' => 'portfolio/case-study-1/cover.jpg', 'youtube_url' => null, 'live_url' => null, 'date' => '2024-10-01',
                'overview' => 'Proshno is a knowledge-sharing platform designed to foster community interactions by allowing users to ask questions, give answers, and engage in topic-based groups.',
                'challenge' => 'Creating a meaningful online space for knowledge exchange that balances simplicity with rich community features like groups, badges, and topic-based discussions.',
                'solution' => 'We leveraged WordPress for flexibility and scalability, customizing it to support community-centric features including user groups, a badge/incentive system, question-and-answer flows, polls, and tags for content discovery.',
                'outcome' => 'Proshno successfully launched with positive feedback for its ease of use and community focus.',
                'tags' => ['WordPress', 'Community', 'Q&A Platform'],
                'techStack' => ['WordPress', 'PHP', 'MySQL', 'Custom Theme'],
                'features' => ['Home feed with recent and popular questions', 'Create and join topic-based groups', 'Badge system for active participation', 'Questions, polls, and tag-based categorization', 'User profiles and FAQ onboarding', 'Fully responsive mobile experience'],
            ],
            [
                'slug' => 'feedofmri-portfolio', 'number' => 2, 'title' => 'FeedofMRI Portfolio', 'subtitle' => 'Professional Portfolio Website', 'category' => 'Web & App',
                'cover_image_path' => 'portfolio/case-study-2/cover.jpg', 'youtube_url' => 'https://youtu.be/JPNNE6WFShc', 'live_url' => null, 'date' => '2024-10-05',
                'overview' => 'The FeedofMRI portfolio website was designed to showcase the skills, work, and journey of a software engineer and UI/UX designer.',
                'challenge' => 'Optimizing user experience with seamless navigation while showcasing detailed project information, ensuring mobile responsiveness, and ranking well on search engines.',
                'solution' => 'We employed WordPress with the Elementor page builder for a flexible, customizable design with responsive design, SEO best practices, and interactive animations.',
                'outcome' => 'The portfolio website met its objectives of providing an engaging, professional online presence.',
                'tags' => ['WordPress', 'Elementor', 'SEO', 'Portfolio'],
                'techStack' => ['WordPress', 'Elementor', 'CSS', 'JavaScript'],
                'features' => ['Custom portfolio and blog sections', 'Engaging visual animations and transitions', 'Mobile-first responsive design', 'SEO-optimized structure and metadata', 'User-centric navigation'],
            ],
            [
                'slug' => 'boraq-space', 'number' => 3, 'title' => 'Boraq Space', 'subtitle' => 'Tech eCommerce Platform', 'category' => 'Web & App',
                'cover_image_path' => 'portfolio/case-study-3/cover.jpg', 'youtube_url' => null, 'live_url' => null, 'date' => '2024-10-10',
                'overview' => 'Boraq Space is a Bangladeshi-based eCommerce platform dedicated to selling high-quality tech products.',
                'challenge' => 'Managing diverse product categories, ensuring secure payments, catering exclusively to Bangladeshi customers with localized design, and building a scalable structure.',
                'solution' => 'We built a custom WooCommerce-powered platform with a sleek, minimalist design reflecting the tech focus.',
                'outcome' => 'Successfully launched a user-friendly eCommerce platform with increased user engagement and positive customer feedback.',
                'tags' => ['WordPress', 'WooCommerce', 'eCommerce', 'SEO'],
                'techStack' => ['WordPress', 'WooCommerce', 'PHP', 'MySQL', 'CSS'],
                'features' => ['Mobile-responsive design', 'Wishlist and cart functionality', 'Secure payment gateways', 'SEO optimization for search visibility', 'Heatmap integration for user behavior tracking', 'Dynamic product filtering and categorization'],
            ],
            [
                'slug' => 'portfolio-html-css-js', 'number' => 4, 'title' => 'Portfolio Website v1', 'subtitle' => 'Built with HTML, CSS & JavaScript', 'category' => 'Web & App',
                'cover_image_path' => 'portfolio/case-study-4/cover.jpg', 'youtube_url' => 'https://youtu.be/Od-m8IB9rIQ', 'live_url' => null, 'date' => '2024-10-15',
                'overview' => 'A personal portfolio website built from scratch using core web technologies.',
                'challenge' => 'Creating a dynamic and engaging design while keeping the codebase lightweight.',
                'solution' => 'Designed a hero section with a dynamic typing effect, responsive navigation, contact form, and skill visualization.',
                'outcome' => 'Successfully launched a lightweight, visually appealing portfolio that improved online presence.',
                'tags' => ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
                'techStack' => ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
                'features' => ['Responsive design across all devices', 'Interactive typing effect in hero section', 'Skill visualization with progress bars', 'Service sections with room for updates', 'Functional contact form'],
            ],
            [
                'slug' => 'professional-portfolio', 'number' => 5, 'title' => 'Portfolio Website v2', 'subtitle' => 'Modern Professional Portfolio', 'category' => 'Web & App',
                'cover_image_path' => 'portfolio/case-study-5/cover.jpg', 'youtube_url' => null, 'live_url' => null, 'date' => '2024-10-20',
                'overview' => 'A modern, responsive professional portfolio designed with clean minimalist layout.',
                'challenge' => 'Showcasing diverse skills and tools in an organized and appealing layout.',
                'solution' => 'Built a semantic HTML structure with responsive grid layouts, CSS animations, hover effects, and JavaScript-powered scroll animations.',
                'outcome' => 'Provided a professional online presence, boosting credibility among peers and clients.',
                'tags' => ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
                'techStack' => ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
                'features' => ['Responsive design across all devices', 'Icon-based skill visualization', 'Interactive scroll animations and hover effects', 'Detailed projects section', 'User-friendly contact form with validation'],
            ],
            [
                'slug' => 'litedocs', 'number' => 6, 'title' => 'LiteDocs', 'subtitle' => 'Lightweight Word Processing Software', 'category' => 'Web & App',
                'cover_image_path' => 'portfolio/case-study-6/cover.jpg', 'youtube_url' => null, 'live_url' => null, 'date' => '2024-11-01',
                'overview' => 'LiteDocs is a simple yet efficient word-processing software built entirely with Python and tkinter.',
                'challenge' => 'Building a visually appealing and user-friendly interface using tkinter while balancing feature richness with simplicity.',
                'solution' => 'Developed a responsive, simple layout with intuitive menus. Implemented core text editing features.',
                'outcome' => 'Successfully developed a functional word processing application with positive feedback.',
                'tags' => ['Python', 'Tkinter', 'Desktop App', 'Open Source'],
                'techStack' => ['Python', 'Tkinter', 'GPL License'],
                'features' => ['Lightweight design for quick document creation', 'Basic text formatting (bold, italic, underline)', 'Bullet and numbered lists', 'Undo-redo functionality', 'Open-source under GPL license'],
            ],
            [
                'slug' => 'campus-app', 'number' => 7, 'title' => 'Campus App', 'subtitle' => 'Unified Educational Platform', 'category' => 'Web & App',
                'cover_image_path' => 'portfolio/case-study-7/cover.jpg', 'youtube_url' => 'https://youtu.be/xFQLrF76Mqw', 'live_url' => null, 'date' => '2024-12-01',
                'overview' => 'The Campus App is an innovative platform connecting students, educators, and researchers worldwide.',
                'challenge' => 'Balancing simplicity and functionality, connecting diverse user groups, and ensuring global accessibility.',
                'solution' => 'Built an intuitive, scalable platform with a centralized feed, university dashboard, clubs and communities, and a messaging system.',
                'outcome' => 'Successfully delivered a platform that simplifies communication and collaboration for students and educators.',
                'tags' => ['Mobile App', 'Education', 'Community'],
                'techStack' => ['Mobile Development', 'REST API', 'Real-time Updates'],
                'features' => ['Centralized feed with real-time updates', 'University dashboard for resources and tools', 'Club and community exploration', 'In-app messaging system', 'Personalized user profiles'],
            ],
            [
                'slug' => 'aust-cse-carnival-3', 'number' => 8, 'title' => 'AUST CSE Carnival 3.0', 'subtitle' => 'In Memory of Ayon Raihan — Event Branding', 'category' => 'UI & Branding',
                'cover_image_path' => 'portfolio/case-study-8/cover.jpg', 'youtube_url' => null, 'live_url' => null, 'date' => '2024-12-10',
                'overview' => 'Creative graphics design for AUST CSE Carnival 3.0, a week-long event commemorating the legacy of Ayon Raihan.',
                'challenge' => "Creating a cohesive visual identity that captured the carnival's energy and technical spirit while honoring the memorial theme.",
                'solution' => 'Developed event banners, social media posters, custom badges and certificates, and event brochures.',
                'outcome' => 'The event successfully celebrated the contributions of Ayon Raihan, inspiring participants.',
                'tags' => ['Graphics Design', 'Event Branding', 'Social Media'],
                'techStack' => ['Adobe Photoshop', 'Adobe Illustrator', 'Figma'],
                'features' => ['Event banners capturing carnival essence', 'Social media posters for engagement', 'Custom badges and certificates', 'Event brochures with visual overview', 'Cohesive visual identity across all materials'],
            ],
            [
                'slug' => 'naimul-memorial-cricket-league', 'number' => 9, 'title' => 'Naimul Memorial Cricket League', 'subtitle' => 'AUST CSE Cricket Tournament Branding', 'category' => 'UI & Branding',
                'cover_image_path' => 'portfolio/case-study-9/cover.jpg', 'youtube_url' => null, 'live_url' => null, 'date' => '2024-12-15',
                'overview' => 'Visual identity for the Naimul Memorial Cricket League Spring 2023.',
                'challenge' => 'Creating a cohesive and engaging visual identity for a multi-team cricket tournament.',
                'solution' => 'Crafted event posters, team logos and jerseys, social media posts, tournament rulesheets and group tables, and certificates.',
                'outcome' => 'Designs captured the essence of the event, amplifying its reach and impact.',
                'tags' => ['Graphics Design', 'Event Branding', 'Sports'],
                'techStack' => ['Adobe Photoshop', 'Adobe Illustrator'],
                'features' => ['Event posters highlighting key details', 'Team logos and jersey designs', 'Social media promotional posts', 'Tournament rulesheets and group tables', 'Champion and participant certificates'],
            ],
            [
                'slug' => 'aust-cse-carnival-4', 'number' => 10, 'title' => 'Great CSE Carnival Adventure', 'subtitle' => 'AUST CSE Carnival 4.0 — Brand Identity', 'category' => 'UI & Branding',
                'cover_image_path' => 'portfolio/case-study-10/cover.jpg', 'youtube_url' => null, 'live_url' => null, 'date' => '2025-01-01',
                'overview' => 'The official branding and visual identity for AUST CSE Carnival 4.0.',
                'challenge' => 'Creating a visually compelling and cohesive design that captures the excitement of a large-scale tech event.',
                'solution' => 'Designed a bold color palette, futuristic typography, and engaging graphic elements.',
                'outcome' => 'Branding significantly enhanced event visibility and recognition.',
                'tags' => ['Branding', 'Event Design', 'Digital & Print'],
                'techStack' => ['Adobe Illustrator', 'Adobe Photoshop', 'Figma'],
                'features' => ['Logo and comprehensive brand guidelines', 'Social media promotional graphics', 'Event merchandise (T-shirts, banners, ID cards)', 'Website and digital assets', 'Consistent visual identity across all touchpoints'],
            ],
            [
                'slug' => 'auraaccess', 'number' => 11, 'title' => 'AuraAccess', 'subtitle' => 'The Ultimate ISP Experience — Brand Identity', 'category' => 'UI & Branding',
                'cover_image_path' => 'portfolio/case-study-11/cover.jpg', 'youtube_url' => null, 'live_url' => null, 'date' => '2025-01-10',
                'overview' => 'AuraAccess is a cutting-edge ISP branding project designed to establish a strong digital presence.',
                'challenge' => 'Creating a modern, professional, and engaging brand experience for a premium ISP service.',
                'solution' => 'Built a branding strategy around a sleek, futuristic aesthetic with a clean and vibrant color palette.',
                'outcome' => 'Successfully positioned AuraAccess as a premium service provider with a strong market presence.',
                'tags' => ['Branding', 'ISP', 'UI/UX', 'Marketing'],
                'techStack' => ['Figma', 'Adobe Illustrator', 'Adobe Photoshop'],
                'features' => ['Logo symbolizing seamless connectivity', 'Clean and intuitive website UI', 'Social media graphics and banners', 'Brochures, business cards, and outdoor advertising', 'Consistent brand presence across all channels'],
            ],
            [
                'slug' => 'campus-website-mern', 'number' => 12, 'title' => 'Campus Website', 'subtitle' => 'Unified Educational Platform Built on MERN', 'category' => 'Web & App',
                'cover_image_path' => 'portfolio/case-study-12/cover.jpg', 'youtube_url' => 'https://youtu.be/CLJ_f_qJUgI', 'live_url' => null, 'date' => '2025-01-20',
                'overview' => 'A comprehensive web platform built using the MERN stack to unify academic management and communication.',
                'challenge' => 'Building a secure, efficient, and scalable solution serving students, educators, and administrators.',
                'solution' => 'Leveraged MongoDB, Express.js, React, and Node.js for a fast, real-time experience.',
                'outcome' => 'Significantly enhanced academic management by providing a centralized platform.',
                'tags' => ['MongoDB', 'Express.js', 'React', 'Node.js', 'MERN'],
                'techStack' => ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT'],
                'features' => ['Secure user authentication with role-based access', 'Centralized academic dashboard', 'Real-time notifications and updates', 'Course and resource management', 'Responsive and scalable design'],
            ],
            [
                'slug' => 'aust-iupc-website', 'number' => 13, 'title' => 'AUST IUPC Website', 'subtitle' => 'Inter-University Programming Contest Platform', 'category' => 'Web & App',
                'cover_image_path' => 'portfolio/case-study-13/cover.jpg', 'youtube_url' => null, 'live_url' => null, 'date' => '2025-03-01',
                'overview' => 'The official website for AUST Inter-University Programming Contest.',
                'challenge' => 'Building a user-friendly, responsive platform that provides comprehensive contest information.',
                'solution' => 'Designed a responsive website with intuitive navigation, online registration system, and live leaderboard.',
                'outcome' => "Improved participant engagement, streamlined event management, and expanded the contest's reach.",
                'tags' => ['Web Development', 'Event Platform', 'Registration'],
                'techStack' => ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
                'features' => ['Comprehensive event details and schedules', 'Online registration with auto-confirmation', 'Resource repository with past problems', 'Real-time announcements and live leaderboard', 'FAQ section for participant support'],
            ],
            [
                'slug' => 'sahajyo-rescue-relief', 'number' => 15, 'title' => 'Sahajyo Rescue & Relief', 'subtitle' => 'Emergency Response UI/UX Design', 'category' => 'UI & Branding',
                'cover_image_path' => 'portfolio/case-study-15/cover.jpg', 'youtube_url' => 'https://youtu.be/Dj2evwUJPG4', 'live_url' => null, 'date' => '2025-03-10',
                'overview' => 'Sahajyo Rescue & Relief is a critical platform designed to streamline emergency response and relief distribution.',
                'challenge' => 'Designing for high-pressure environments where every second counts.',
                'solution' => 'Conducted stakeholder interviews and emergency service analysis. Created wireframes and high-fidelity mockups.',
                'outcome' => 'The final design provides a balance between emergency functionality and ease-of-use.',
                'tags' => ['UI/UX', 'Emergency Response', 'Figma', 'Prototyping'],
                'techStack' => ['Figma', 'Prototyping', 'User Research', 'Usability Testing'],
                'features' => ['Clear layout for emergency functionality', 'Intuitive navigation for crisis scenarios', 'Proactive alert system', 'Accessible design for diverse user groups', 'Interactive prototypes with real-time feedback'],
            ],
            [
                'slug' => 'dhaka-bakery-ui', 'number' => 16, 'title' => 'Dhaka Bakery Sales Management', 'subtitle' => 'Bakery Operations UI/UX Design', 'category' => 'UI & Branding',
                'cover_image_path' => 'portfolio/case-study-16/cover.jpg', 'youtube_url' => null, 'live_url' => null, 'date' => '2025-03-15',
                'overview' => 'An innovative platform to revolutionize how bakeries manage sales, inventory, and customer interactions.',
                'challenge' => 'Simplifying complex sales and inventory tasks, catering to staff with varying digital literacy.',
                'solution' => 'Collaborated with bakery owners to map workflows. Designed personas and interactive prototypes.',
                'outcome' => 'Notably decreased training time and operational errors while increasing overall efficiency.',
                'tags' => ['UI/UX', 'SaaS', 'Dashboard Design', 'Figma'],
                'techStack' => ['Figma', 'Prototyping', 'UI Design', 'User Testing'],
                'features' => ['Unified sales and inventory dashboard', 'Real-time analytics and data visualization', 'Role-based modules for different staff', 'Warm, brand-aligned color palette', 'Streamlined navigation and user comprehension'],
            ],
            [
                'slug' => 'sohojogi-ui', 'number' => 17, 'title' => 'Sohojogi App UI/UX', 'subtitle' => 'Multi-Service Mobile App Design', 'category' => 'UI & Branding',
                'cover_image_path' => 'portfolio/case-study-17/cover.jpg', 'youtube_url' => null, 'live_url' => null, 'date' => '2025-04-01',
                'overview' => 'Sohojogi is a comprehensive mobile application designed to simplify everyday tasks and enhance user productivity.',
                'challenge' => 'Providing diverse services without overwhelming the user.',
                'solution' => 'Conducted user research, structured content hierarchy, and developed high-fidelity interactive prototypes.',
                'outcome' => 'Successfully merged utility with elegance, improving user engagement and satisfaction.',
                'tags' => ['UI/UX', 'Mobile App', 'Figma', 'Prototyping'],
                'techStack' => ['Figma', 'Prototyping', 'UI/UX Design', 'Interaction Design'],
                'features' => ['Unified interface balancing multiple functionalities', 'Smooth animations and transitions', 'Consistent color schemes and typography', 'Performance optimized for older devices', 'Beta user-tested for usability refinement'],
            ],
            [
                'slug' => 'sohojogi-app', 'number' => 18, 'title' => 'Sohojogi', 'subtitle' => 'One-Stop Home Service Solutions App', 'category' => 'Web & App',
                'cover_image_path' => 'portfolio/case-study-18/cover.jpg', 'youtube_url' => 'https://youtu.be/Lwbt7yas1KI', 'live_url' => null, 'date' => '2025-04-10',
                'overview' => 'SOHOJOGI is a one-stop household service platform connecting users with trusted, verified professionals.',
                'challenge' => 'Ensuring cross-platform performance and scalability, integrating secure APIs.',
                'solution' => 'Built a clean, scalable architecture with secure authentication and real-time booking updates.',
                'outcome' => 'SOHOJOGI successfully bridges the gap between household needs and quality service delivery.',
                'tags' => ['React Native', 'Node.js', 'MongoDB', 'Full-Stack'],
                'techStack' => ['React Native', 'Node.js', 'MongoDB', 'Express.js', 'JWT'],
                'features' => ['Location-based service matching', 'Seamless booking process', 'Real-time updates and notifications', 'Secure authentication and data protection', 'Cross-platform (Android, iOS, Web)', 'Verified professional profiles'],
            ],
            [
                'slug' => 'email-spam-detector', 'number' => 19, 'title' => 'Email Spam Detector', 'subtitle' => 'ML-Powered Email Classification', 'category' => 'AI & Automation',
                'cover_image_path' => null, 'youtube_url' => null, 'live_url' => null, 'date' => '2025-05-01',
                'overview' => 'An end-to-end email spam detector built in Python using supervised machine learning.',
                'challenge' => 'Building a reliable classifier that accurately distinguishes spam from legitimate emails.',
                'solution' => 'Implemented a complete ML pipeline: data cleaning, vectorization, classifiers, evaluation, and model persistence.',
                'outcome' => 'Delivered a practical end-to-end ML workflow for real-world spam detection.',
                'tags' => ['Python', 'Scikit-learn', 'NLP', 'Machine Learning'],
                'techStack' => ['Python', 'pandas', 'Scikit-learn', 'Jupyter Notebook'],
                'features' => ['Data preprocessing with stopword removal', 'Text vectorization (Bag-of-Words & TF-IDF)', 'Naive Bayes and Logistic Regression models', 'Performance evaluation with multiple metrics', 'Model export for real-world deployment'],
            ],
            [
                'slug' => 'car-price-prediction', 'number' => 20, 'title' => 'Car Price Prediction', 'subtitle' => 'One-Hot Encoding & Linear Regression', 'category' => 'AI & Automation',
                'cover_image_path' => null, 'youtube_url' => null, 'live_url' => null, 'date' => '2025-05-10',
                'overview' => 'A Multiple Linear Regression model to predict car selling prices.',
                'challenge' => 'Working with a very small dataset while avoiding overfitting and handling categorical data.',
                'solution' => 'Converted categorical car models into dummy variables, trained a multiple linear regression model.',
                'outcome' => 'Demonstrated how feature encoding combined with regression can be effectively applied.',
                'tags' => ['Python', 'Scikit-learn', 'ML', 'Linear Regression'],
                'techStack' => ['Python', 'pandas', 'Scikit-learn', 'matplotlib', 'Jupyter'],
                'features' => ['One-Hot Encoding for categorical car models', 'Multiple Linear Regression prediction', 'Data visualization with matplotlib', 'High accuracy (R² ≈ 0.94)', 'Sample predictions for real scenarios'],
            ],
            [
                'slug' => 'heart-disease-prediction', 'number' => 21, 'title' => 'Heart Disease Prediction', 'subtitle' => 'PCA & Logistic Regression for Healthcare', 'category' => 'AI & Automation',
                'cover_image_path' => null, 'youtube_url' => null, 'live_url' => null, 'date' => '2025-05-20',
                'overview' => 'A machine learning project using PCA for dimensionality reduction on a heart disease dataset.',
                'challenge' => 'High-dimensional correlated features, handling categorical variables, and improving predictive power.',
                'solution' => 'Standardized numerical features, one-hot encoded categorical variables, applied PCA with 8 components.',
                'outcome' => 'Provided valuable insights into how dimensionality reduction techniques can simplify complex medical datasets.',
                'tags' => ['Python', 'PCA', 'Logistic Regression', 'Healthcare ML'],
                'techStack' => ['Python', 'pandas', 'Scikit-learn', 'PCA', 'Jupyter'],
                'features' => ['PCA-based dimensionality reduction', 'One-Hot Encoding for categorical features', 'Logistic Regression classifier', 'Explained variance analysis', 'Complete ML workflow with evaluation metrics'],
            ],
            [
                'slug' => 'nondan', 'number' => 22, 'title' => 'Nondan', 'subtitle' => 'Event Management & Booking Platform', 'category' => 'Web & App',
                'cover_image_path' => 'portfolio/case-study-22/cover.jpg', 'youtube_url' => 'https://youtu.be/BHVQRQ5MDLU', 'live_url' => null, 'date' => '2025-06-01',
                'overview' => 'Nondan is a modern event management and booking platform.',
                'challenge' => 'Organizers struggled with fragmented workflows and lack of centralized dashboards.',
                'solution' => 'Built a full-stack MERN application with React frontend, Node.js/Express backend, MongoDB database.',
                'outcome' => '60% reduction in manual registration time, 40% increase in attendee turnout.',
                'tags' => ['React', 'Node.js', 'MongoDB', 'MERN', 'Full-Stack'],
                'techStack' => ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
                'features' => ['Event creation and management dashboard', 'Secure booking and payment flow', 'Role-based access control', 'Smart scheduling preventing double-booking', 'Analytics dashboard with real-time insights', 'Responsive design for mobile and desktop'],
            ],
            [
                'slug' => 'nibaron-climateai', 'number' => 23, 'title' => 'Nibaron', 'subtitle' => 'ClimateAI for Farmers', 'category' => 'Web & App',
                'cover_image_path' => 'portfolio/case-study-23/cover.jpg', 'youtube_url' => 'https://youtu.be/5-okao60db4', 'live_url' => null, 'date' => '2025-06-15',
                'overview' => 'Nibaron empowers farmers with AI-driven climate insights and actionable recommendations.',
                'challenge' => 'Farmers suffer yield losses due to unpredictable weather, floods, and pollution.',
                'solution' => 'Built with React + Tailwind + Vite frontend and Laravel + Sanctum backend.',
                'outcome' => 'Predictive alerts minimize climate-related losses, improved resource usage through AI recommendations.',
                'tags' => ['React', 'Laravel', 'AI', 'Agriculture', 'ClimateAI'],
                'techStack' => ['React', 'Vite', 'Tailwind CSS', 'Laravel', 'Sanctum', 'REST API'],
                'features' => ['AI-driven climate insights and recommendations', 'Crop-specific weather alerts', 'Bangla voice alerts for accessibility', 'Digital marketplace (Nibaron Bazaar)', 'Location-based service matching'],
            ],
            [
                'slug' => 'nibaron-app', 'number' => 24, 'title' => 'Nibaron App', 'subtitle' => 'Empowering Campus Life Through Digital Innovation', 'category' => 'Web & App',
                'cover_image_path' => 'portfolio/case-study-24/cover.jpg', 'youtube_url' => 'https://youtu.be/VCbtS7w1erg', 'live_url' => null, 'date' => '2025-07-01',
                'overview' => 'A comprehensive mobile solution centralizing student information and campus resources.',
                'challenge' => 'Students frequently miss important notices, struggle to find reliable housing.',
                'solution' => 'Built with React Native for cross-platform support, connected to Laravel backend.',
                'outcome' => '80% faster access to notices, improved student participation.',
                'tags' => ['React Native', 'Laravel', 'Firebase', 'Mobile App'],
                'techStack' => ['React Native', 'Laravel', 'MySQL', 'JWT', 'Firebase', 'Expo'],
                'features' => ['Student housing listings', 'Academic notices and announcements', 'Club and event updates', 'Resource sharing and study guides', 'Instant push notifications', 'Role-based access control'],
            ],
            [
                'slug' => 'bakery-management-system', 'number' => 25, 'title' => 'Bakery Management System', 'subtitle' => 'Full-Stack Bakery Operations Platform', 'category' => 'Web & App',
                'cover_image_path' => 'portfolio/case-study-25/cover.jpg', 'youtube_url' => 'https://youtu.be/lEE5e08Dc8M', 'live_url' => null, 'date' => '2025-07-15',
                'overview' => 'A full-stack platform unifying front-end UX and back-end operational control for bakery operations.',
                'challenge' => 'Manual tracking of perishable inventory leading to waste, fragmented order management.',
                'solution' => 'Developed a unified full-stack application with responsive web interface and robust API layer.',
                'outcome' => 'Reduced manual inventory tracking by ~50%, dropped stock-outs and wastage by ~30%.',
                'tags' => ['React', 'Node.js', 'Full-Stack', 'Inventory', 'SaaS'],
                'techStack' => ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
                'features' => ['Inventory management with reorder alerts', 'Order processing for standard and custom orders', 'User roles and access control', 'Sales and reporting dashboard', 'Low-stock and expiry alerts', 'Responsive interface for staff and management'],
            ],
            [
                'slug' => 'star-cineplex-ui', 'number' => 26, 'title' => 'Star Cineplex', 'subtitle' => 'Mobile Application UI/UX Design', 'category' => 'UI & Branding',
                'cover_image_path' => 'portfolio/case-study-26/cover.jpg', 'youtube_url' => null, 'live_url' => null, 'date' => '2025-08-01',
                'overview' => 'A comprehensive mobile application UI/UX design for Star Cineplex.',
                'challenge' => 'Creating a smooth and visually appealing mobile experience that simplifies cinema ticket booking.',
                'solution' => 'Designed a complete mobile application flow with high-fidelity screens.',
                'outcome' => 'Delivered a polished UI/UX design system ready for development.',
                'tags' => ['UI/UX', 'Mobile App', 'Figma', 'Entertainment'],
                'techStack' => ['Figma', 'Prototyping', 'UI/UX Design'],
                'features' => ['Movie browsing and showtime selection', 'Interactive seat selection interface', 'Seamless payment flow', 'Digital ticket with QR code', 'Dark-themed premium aesthetic'],
            ],
            [
                'slug' => 'trizen-solutions', 'number' => 27, 'title' => 'Trizen Solutions', 'subtitle' => 'Next-Gen Tech Brand Identity', 'category' => 'UI & Branding',
                'cover_image_path' => 'portfolio/case-study-27/cover.jpg', 'youtube_url' => null, 'live_url' => null, 'date' => '2025-08-10',
                'overview' => 'A future-forward visual identity for Trizen Solutions.',
                'challenge' => "Reflecting the company's innovative spirit and technical excellence through a modern brand.",
                'solution' => 'Created a bold geometric logo with arrow-inspired "T" emblem.',
                'outcome' => 'Positioned Trizen Solutions as a dynamic and reliable tech company ready to compete globally.',
                'tags' => ['Branding', 'Logo Design', 'Visual Identity'],
                'techStack' => ['Adobe Illustrator', 'Figma', 'Brand Design'],
                'features' => ['Primary logo with arrow-inspired T emblem', 'App icon variant for digital branding', 'Navy Blue (#1D2A62) and Red (#E41D24) palette', 'Rounded geometric sans-serif typography', 'Adaptable, memorable, and scalable identity'],
            ],
            [
                'slug' => 'ezs-iphone-campaign', 'number' => 28, 'title' => 'EZS Accessory Campaign', 'subtitle' => 'iPhone 16 Pro Max Visual Campaign', 'category' => 'UI & Branding',
                'cover_image_path' => 'portfolio/case-study-28/cover.jpg', 'youtube_url' => null, 'live_url' => null, 'date' => '2025-08-15',
                'overview' => "A modern visual campaign for EZS tech accessories brand.",
                'challenge' => "Communicating compatibility clarity, matching Apple's minimal aesthetic while standing out.",
                'solution' => 'Used elegant composition and visual clarity to create informational yet high-end product presentations.',
                'outcome' => 'Achieved instant product understanding, higher social media engagement, and brand recognition boost.',
                'tags' => ['Visual Design', 'Product Marketing', 'Campaign'],
                'techStack' => ['Adobe Photoshop', 'Adobe Illustrator', 'Product Photography'],
                'features' => ['Compatibility clarity for iPhone 16 models', 'Premium brand-aligned visual aesthetic', 'Social media-optimized compositions', 'Product storytelling through elegant design'],
            ],
            [
                'slug' => 'vastra', 'number' => 29, 'title' => 'Vastra', 'subtitle' => 'Reliable & Elegant Textile Brand Identity', 'category' => 'UI & Branding',
                'cover_image_path' => 'portfolio/case-study-29/cover.jpg', 'youtube_url' => null, 'live_url' => null, 'date' => '2025-08-20',
                'overview' => 'Vastra is a textile and apparel brand requiring a strong, elegant, and memorable visual identity.',
                'challenge' => 'Communicating reliability and trust without losing modern appeal.',
                'solution' => 'Created a distinctive "V" mark with dynamic wave forms representing fabric folds.',
                'outcome' => 'Projects trust and craftsmanship, establishes a distinctive visual presence across media.',
                'tags' => ['Branding', 'Logo Design', 'Textile', 'Visual Identity'],
                'techStack' => ['Adobe Illustrator', 'Figma', 'Brand Design', 'Print Design'],
                'features' => ['Dynamic "V" logo with fabric fold symbolism', 'Deep Maroon and Charcoal Brown color palette', 'Aldo The Apache logo typography', 'Business card and letterhead design', 'Cross-media brand consistency'],
            ],
            [
                'slug' => 'node-crypto-mascot', 'number' => 30, 'title' => 'Node — "Neo" Mascot', 'subtitle' => 'The Face of a Smarter Crypto Future', 'category' => 'UI & Branding',
                'cover_image_path' => 'portfolio/case-study-30/cover.jpg', 'youtube_url' => null, 'live_url' => null, 'date' => '2025-09-01',
                'overview' => "Designed \"Neo,\" a dynamic mascot personifying Node's vision in cryptocurrency.",
                'challenge' => 'Representing crypto innovation without feeling cold or corporate.',
                'solution' => 'Introduced Neo with form flowing like a digital circuit, a friendly wink, vibrant green gradient palette.',
                'outcome' => "Neo became the face of Node's ecosystem — stronger brand recall and enhanced trust perception.",
                'tags' => ['Mascot Design', 'Branding', 'Crypto', 'Visual Identity'],
                'techStack' => ['Adobe Illustrator', 'Figma', 'Character Design', 'Brand Design'],
                'features' => ['Dynamic mascot character "Neo"', 'Custom rounded sans-serif brand typography', 'Vibrant green gradient color palette', 'Arrow motif representing positive momentum', 'Cross-platform adaptable identity', 'Mascot integrated into logo design'],
            ],
            [
                'slug' => 'prarombho-proyas-24', 'number' => 31, 'title' => 'প্রারম্ভ প্রয়াস ২৪', 'subtitle' => "AUST Civilian's Event Identity & Collateral", 'category' => 'UI & Branding',
                'cover_image_path' => 'portfolio/case-study-31/cover.jpg', 'youtube_url' => null, 'live_url' => null, 'date' => '2025-09-10',
                'overview' => "Complete brand identity and merchandise system for Prarombho Proyas 24.",
                'challenge' => "Representing civil engineering's precision and creativity while remaining approachable for students.",
                'solution' => 'Built a unified identity around blue & neon-green theme with skyline-style logo.',
                'outcome' => 'Strong visual identity across 8+ touchpoints, increased student participation.',
                'tags' => ['Event Branding', 'Print Design', 'Merchandise', 'Identity'],
                'techStack' => ['Adobe Illustrator', 'Adobe Photoshop', 'Print Design'],
                'features' => ['Skyline-style event logo', 'Event ID card with lanyard branding', 'Entrance gate concept design', 'Premium key ring and pen packaging', 'Construction-inspired graphic motifs'],
            ],
            [
                'slug' => 'moushum', 'number' => 32, 'title' => 'Moushum (মৌসুম)', 'subtitle' => 'A Fresh Identity Rooted in Nature', 'category' => 'UI & Branding',
                'cover_image_path' => 'portfolio/case-study-32/cover.jpg', 'youtube_url' => null, 'live_url' => null, 'date' => '2025-09-15',
                'overview' => 'Moushum — meaning "season" in Bangla — is a brand inspired by the rhythm of nature, agriculture, and growth.',
                'challenge' => 'Capturing growth and nature while appealing to a modern audience.',
                'solution' => 'Crafted a modern Bangla typography wordmark with leaf and wheat motif.',
                'outcome' => 'Memorable cultural connection, versatile brand usability.',
                'tags' => ['Branding', 'Logo Design', 'Agriculture', 'Bangla Typography'],
                'techStack' => ['Adobe Illustrator', 'Figma', 'Brand Design', 'Typography'],
                'features' => ['Modern Bangla typography wordmark', 'Leaf and wheat growth motif', 'Green and yellow color palette', 'Latin companion font for English materials', 'Versatile across print and digital'],
            ],
            [
                'slug' => 'aust-cse-carnival-6-branding', 'number' => 33, 'title' => 'AUST CSE Carnival 6.0', 'subtitle' => 'Complete Event Brand & Design System', 'category' => 'UI & Branding',
                'cover_image_path' => 'portfolio/case-study-33/cover.jpg', 'youtube_url' => null, 'live_url' => null, 'date' => '2025-10-01',
                'overview' => 'Complete brand and design system for AUST CSE Carnival 6.0.',
                'challenge' => 'Refreshing the carnival brand while maintaining academic prestige.',
                'solution' => 'Designed a unified identity with Dark Emerald and Electric Green palette.',
                'outcome' => 'Elevated AUST CSE Carnival into a digitally cohesive, high-energy brand ecosystem.',
                'tags' => ['Event Branding', 'Design System', 'Print', 'Digital'],
                'techStack' => ['Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'Print Design'],
                'features' => ['Official polo T-shirt design', 'Promotional posters and leaflets', 'Website launch campaign graphics', 'Prizepool announcement design', 'Sub-event specific branding', 'QR-based registration posters'],
            ],
            [
                'slug' => 'aust-cse-carnival-6-website', 'number' => 34, 'title' => 'AUST CSE Carnival 6.0 Website', 'subtitle' => 'Official Event Digital Hub', 'category' => 'Web & App',
                'cover_image_path' => 'portfolio/case-study-34/cover.jpg', 'youtube_url' => null, 'live_url' => 'https://austcsecarnival.vercel.app', 'date' => '2025-11-01',
                'overview' => 'The official website for AUST CSE Carnival 6.0.',
                'challenge' => 'Providing a responsive experience across devices, consolidating multiple event segments.',
                'solution' => 'Utilized React with Vite for fast builds, modular file structure, and CSS Modules.',
                'outcome' => 'Delivered a professional digital presence aligned with high-energy branding.',
                'tags' => ['React', 'Vite', 'CSS Modules', 'Event Website'],
                'techStack' => ['React', 'Vite', 'CSS Modules', 'React Router', 'Vercel'],
                'features' => ['Event segment showcase pages', 'Online registration system', 'Sponsor visibility sections', 'Photo gallery', 'Mobile-responsive design', 'Cross-browser support'],
            ],
        ];

        foreach ($studies as $data) {
            $tags = $data['tags'] ?? [];
            $techStack = $data['techStack'] ?? [];
            $features = $data['features'] ?? [];
            unset($data['tags'], $data['techStack'], $data['features']);

            // Resolve actual cover image (copy from frontend if needed, detect real extension)
            $num = $data['number'];
            $slug = 'case-study-' . $num;
            $data['cover_image_path'] = self::resolveCover($num, $slug);

            $data['sort_order'] = $data['number'];
            $cs = CaseStudy::create($data);

            foreach ($tags as $tag) {
                CaseStudyTag::create(['case_study_id' => $cs->id, 'tag' => $tag]);
            }
            foreach ($techStack as $tech) {
                CaseStudyTechStack::create(['case_study_id' => $cs->id, 'name' => $tech]);
            }
            foreach ($features as $i => $feature) {
                CaseStudyFeature::create(['case_study_id' => $cs->id, 'feature' => $feature, 'sort_order' => $i]);
            }

            // Seed gallery images
            self::seedGalleryImages($cs, $num, $slug);
        }
    }

    private static function resolveCover(int $num, string $slug): ?string
    {
        $destDir = storage_path("app/public/portfolio/{$slug}");
        @mkdir($destDir, 0755, true);

        // Check what cover file actually exists in storage (could be .webp, .jpg, .png etc.)
        foreach (['webp', 'jpg', 'jpeg', 'png', 'gif'] as $ext) {
            if (file_exists($destDir . '/cover.' . $ext)) {
                return "portfolio/{$slug}/cover.{$ext}";
            }
        }

        // Not found in storage — try copying from frontend
        $frontCoverDir = base_path("../frontend/src/assets/Portfolio/Case Study {$num}/Cover");
        if (is_dir($frontCoverDir)) {
            foreach (array_diff(scandir($frontCoverDir), ['.', '..']) as $file) {
                $ext = strtolower(pathinfo($file, PATHINFO_EXTENSION));
                if (in_array($ext, ['webp', 'jpg', 'jpeg', 'png', 'gif'])) {
                    copy($frontCoverDir . '/' . $file, $destDir . '/cover.' . $ext);
                    return "portfolio/{$slug}/cover.{$ext}";
                }
            }
        }

        return null;
    }

    private static function seedGalleryImages(CaseStudy $cs, int $num, string $slug): void
    {
        $destDir = storage_path("app/public/portfolio/{$slug}/images");
        @mkdir($destDir, 0755, true);

        $paths = [];

        // Check existing files in storage
        $existing = array_diff(scandir($destDir), ['.', '..']);
        if (!empty($existing)) {
            sort($existing, SORT_NATURAL);
            foreach ($existing as $f) {
                $ext = strtolower(pathinfo($f, PATHINFO_EXTENSION));
                if (in_array($ext, ['webp', 'jpg', 'jpeg', 'png', 'gif'])) {
                    $paths[] = "portfolio/{$slug}/images/{$f}";
                }
            }
        }

        // If empty, copy from frontend
        if (empty($paths)) {
            $frontImgDir = base_path("../frontend/src/assets/Portfolio/Case Study {$num}/Images");
            if (is_dir($frontImgDir)) {
                $files = array_diff(scandir($frontImgDir), ['.', '..']);
                sort($files, SORT_NATURAL);
                $idx = 1;
                foreach ($files as $f) {
                    $ext = strtolower(pathinfo($f, PATHINFO_EXTENSION));
                    if (in_array($ext, ['webp', 'jpg', 'jpeg', 'png', 'gif'])) {
                        $dest = $idx . '.' . $ext;
                        copy($frontImgDir . '/' . $f, $destDir . '/' . $dest);
                        $paths[] = "portfolio/{$slug}/images/{$dest}";
                        $idx++;
                    }
                }
            }
        }

        foreach ($paths as $i => $path) {
            \App\Models\CaseStudyImage::create([
                'case_study_id' => $cs->id,
                'image_path' => $path,
                'sort_order' => $i,
            ]);
        }
    }
}

