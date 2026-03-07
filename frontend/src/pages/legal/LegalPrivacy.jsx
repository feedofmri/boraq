import CallToAction from '../../components/sections/CallToAction';
import { motion } from 'framer-motion';

const LegalLayout = ({ title, lastUpdated, children }) => {
  return (
    <div className="w-full pb-32">
      <section className="max-w-4xl mx-auto px-6 pt-12 pb-12 border-b border-black/10 dark:border-white/10 mb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="text-sm font-mono text-black/50 dark:text-white/50 mb-4 uppercase tracking-widest">
            Legal Documentation
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            {title}
          </h1>
          <p className="text-boraq-cyan font-medium">
            Last Updated: {lastUpdated}
          </p>
        </motion.div>
      </section>

      <section className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-boraq-cyan hover:prose-a:text-boraq-cyan/80 prose-li:marker:text-boraq-cyan"
        >
          {children}
        </motion.div>
      </section>
    </div>
  );
};

export default function LegalPrivacy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="October 1, 2026">
      <p>
        Boraq ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Boraq.
      </p>
      <h3>1. Information We Collect</h3>
      <p>
        We collect information from you when you visit our website, register on our site, place an order, subscribe to our newsletter, respond to a survey or fill out a form.
      </p>
      <ul>
        <li><strong>Personal Data:</strong> Name, email address, mailing address, phone number, etc.</li>
        <li><strong>Usage Data:</strong> We may also collect information that your browser sends whenever you visit our Service or when you access the Service by or through a mobile device.</li>
      </ul>
      <h3>2. How We Use Your Information</h3>
      <p>Any of the information we collect from you may be used in one of the following ways:</p>
      <ul>
        <li>To personalize your experience.</li>
        <li>To improve our website architecture and offerings.</li>
        <li>To improve customer service and support needs.</li>
        <li>To process transactions securely.</li>
      </ul>
      <h3>3. Security of Your Information</h3>
      <p>
        We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information. We utilize enterprise-grade encryption and adhere strictly to GDPR and CCPA guidelines.
      </p>
      <h3>4. Contact Us</h3>
      <p>
        If there are any questions regarding this privacy policy, you may contact our Data Protection Officer at <a href="mailto:legal@boraq.io">legal@boraq.io</a>.
      </p>
    </LegalLayout>
  );
}
