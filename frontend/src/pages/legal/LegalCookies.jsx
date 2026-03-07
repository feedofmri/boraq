import CallToAction from '../../components/sections/CallToAction';
import { motion } from 'framer-motion';

// Reusing the same LegalLayout structure locally for consistency
const LegalLayout = ({ title, lastUpdated, children }) => {
  return (
    <div className="w-full pb-32">
      <section className="max-w-4xl mx-auto px-6 pt-12 pb-12 border-b border-black/10 dark:border-white/10 mb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="text-sm font-mono text-black/50 dark:text-white/50 mb-4 uppercase tracking-widest">
            Legal Documentation
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">{title}</h1>
          <p className="text-boraq-cyan font-medium">Last Updated: {lastUpdated}</p>
        </motion.div>
      </section>
      <section className="max-w-3xl mx-auto px-6">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-boraq-cyan hover:prose-a:text-boraq-cyan/80 prose-li:marker:text-boraq-cyan">
          {children}
        </motion.div>
      </section>
    </div>
  );
};

export default function LegalCookies() {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated="October 1, 2026">
      <p>This Cookie policy explains what Cookies are and how We use them. You should read this policy so You can understand what type of cookies We use, or the information We collect using Cookies and how that information is used.</p>
      <h3>1. What are Cookies?</h3>
      <p>Cookies are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</p>
      <h3>2. The use of the Cookies</h3>
      <p>We use both Session and Persistent Cookies for the purposes set out below:</p>
      <ul>
        <li><strong>Necessary / Essential Cookies:</strong> These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features.</li>
        <li><strong>Cookies Policy / Notice Acceptance Cookies:</strong> These Cookies identify if users have accepted the use of cookies on the Website.</li>
        <li><strong>Functionality / Theme Cookies:</strong> These Cookies allow us to remember choices You make when You use the Website, such as remembering your specific Dark/Light mode theme preferences using our ThemeContext provider.</li>
      </ul>
      <h3>3. Analytics</h3>
      <p>We use privacy-preserving, cookieless analytics tools (such as Fathom or Plausible) to track aggregate page views. We do not use intrusive third-party trackers for this purpose.</p>
    </LegalLayout>
  );
}
