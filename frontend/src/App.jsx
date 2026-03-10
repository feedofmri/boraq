import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GlobalBackground from './components/layout/GlobalBackground';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import FloatingContact from './components/sections/FloatingContact';
import usePageTracking from './hooks/usePageTracking';

// Services
import WebApp from './pages/services/WebApp';
import UIBranding from './pages/services/UIBranding';
import AIAutomation from './pages/services/AIAutomation';
import VisionSpeech from './pages/services/VisionSpeech';
import SmartDevice from './pages/services/SmartDevice';
import Web3 from './pages/services/Web3';

// About
import OurStory from './pages/about/OurStory';
import OurTeam from './pages/about/OurTeam';

// Work
import Portfolio from './pages/work/Portfolio';
import CaseStudyDetail from './pages/work/CaseStudyDetail';

// Research
import Research from './pages/Research';

// Community
import Resources from './pages/community/Resources';
import Blog from './pages/community/Blog';
import BlogDetail from './pages/community/BlogDetail';
import Products from './pages/community/Products';
import Learning from './pages/community/Learning';
import Docs from './pages/community/Docs';
import OpenSource from './pages/community/OpenSource';
import Career from './pages/community/Career';

// Utility
import Contact from './pages/utility/Contact';
import BookCall from './pages/utility/BookCall';
import FAQ from './pages/utility/FAQ';

// Legal
import LegalPrivacy from './pages/legal/LegalPrivacy';
import LegalTerms from './pages/legal/LegalTerms';
import LegalCookies from './pages/legal/LegalCookies';

import NotFound from './pages/NotFound';

function App() {
  usePageTracking();

  return (
    <div className="flex flex-col min-h-screen relative text-boraq-black dark:text-boraq-white transition-colors duration-400">
      <GlobalBackground />
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow flex flex-col pt-20">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Services */}
          <Route path="/services/web-app" element={<WebApp />} />
          <Route path="/services/ui-branding" element={<UIBranding />} />
          <Route path="/services/ai-automation" element={<AIAutomation />} />
          <Route path="/services/vision-speech" element={<VisionSpeech />} />
          <Route path="/services/smart-device" element={<SmartDevice />} />
          <Route path="/services/web3" element={<Web3 />} />

          {/* About */}
          <Route path="/about" element={<OurStory />} />
          <Route path="/about/team" element={<OurTeam />} />

          {/* Work */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/case-studies/:id" element={<CaseStudyDetail />} />

          {/* Research */}
          <Route path="/research" element={<Research />} />

          {/* Community */}
          <Route path="/resources" element={<Resources />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/products" element={<Products />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/open-source" element={<OpenSource />} />
          <Route path="/career" element={<Career />} />

          {/* Utility */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-a-call" element={<BookCall />} />
          <Route path="/faq" element={<FAQ />} />

          {/* Legal */}
          <Route path="/privacy-policy" element={<LegalPrivacy />} />
          <Route path="/terms-of-service" element={<LegalTerms />} />
          <Route path="/cookie-policy" element={<LegalCookies />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App;
