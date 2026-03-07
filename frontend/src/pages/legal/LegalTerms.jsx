import CallToAction from '../../components/sections/CallToAction';
import { motion } from 'framer-motion';

// Reusing the same LegalLayout structure locally for consistency
const LegalLayout = ({ title, lastUpdated, children }) => {
  return (
    <div className="w-full pb-32">
      <section className="max-w-4xl mx-auto px-6 pt-12 pb-12 border-b border-boraq-gray-silver/10 dark:border-boraq-teal-deep/10 mb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="text-[10px] font-bold uppercase tracking-widest text-boraq-gray-mid dark:text-boraq-gray-silver mb-4">
            Legal Documentation
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-boraq-black dark:text-boraq-white">{title}</h1>
          <p className="text-boraq-teal-steel font-bold text-sm tracking-widest uppercase">Last Updated: {lastUpdated}</p>
        </motion.div>
      </section>
      <section className="max-w-3xl mx-auto px-6">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-boraq-black dark:prose-headings:text-boraq-white prose-p:text-boraq-gray-mid dark:prose-p:text-boraq-gray-silver prose-p:font-light prose-a:text-boraq-teal-steel hover:prose-a:text-boraq-teal-steel/80 prose-li:marker:text-boraq-teal-steel">
          {children}
        </motion.div>
      </section>
      <CallToAction />
    </div>
  );
};

export default function LegalTerms() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="October 1, 2026">
      <p>Welcome to Boraq.io. These Terms of Service govern your use of our website and agency services.</p>
      <h3>1. Acceptance of Terms</h3>
      <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
      <h3>2. Intellectual Property Rights</h3>
      <p>Other than the content you own, under these Terms, Boraq and/or its licensors own all the intellectual property rights and materials contained in this Website.</p>
      <h3>3. Professional Services Automation</h3>
      <p>Any code, application, or software developed during a contracted engagement will be governed by a separate Master Services Agreement (MSA) and Statement of Work (SOW). These website terms govern purely the browser experience and marketing materials presented herein.</p>
      <h3>4. Limitation of Liability</h3>
      <p>In no event shall Boraq, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. Boraq, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.</p>
    </LegalLayout>
  );
}
