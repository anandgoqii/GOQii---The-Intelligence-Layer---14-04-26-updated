import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Clock, Lock, Eye, Database, Share2, Settings, AlertCircle, Link as LinkIcon, Globe, ShieldCheck, HelpCircle, FileText, Mail, ChevronRight, Cookie, Zap, Users, Scale, Trash2, UserCheck, Baby, ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  id: string;
  title: string;
  children: React.ReactNode;
  icon: React.ElementType;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ id, title, children, icon: Icon, isOpen, onToggle }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-glass rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl shadow-black/5 mb-2"
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-6 md:px-8 md:py-8 flex items-center justify-between text-left group transition-colors hover:bg-slate-50/50 dark:hover:bg-slate-800/50"
      >
        <div className="flex items-center gap-4 md:gap-6">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-primary text-white shadow-lg shadow-primary/25' : 'bg-primary/10 text-primary'}`}>
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-bold tracking-widest text-primary uppercase mb-1 block">SECTION {id}</span>
            <h3 className="text-lg md:text-xl font-display font-bold text-slate-900 dark:text-white">{title}</h3>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-slate-400 group-hover:text-primary shrink-0"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-6 pb-8 md:px-8 md:pb-10 pt-2 border-t border-slate-100 dark:border-slate-800/50">
              <div className="text-base md:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed space-y-4 max-w-3xl">
                {children}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const Privacy = () => {
  const [openId, setOpenId] = useState<string | null>("01");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const sections = [
    {
      id: "01",
      title: "Information We Collect",
      icon: Database,
      content: (
        <div className="space-y-4">
          <p>We, GOQii (collectively used to refer to GOQii Inc., GOQii Technologies Pvt. Ltd. and its affiliates, successors and assigns) bring to you a digital health and fitness subscription service that combines one-on-one mobile personal coaching and fitness tracking technology to help you shift to a healthier lifestyle and reach your goals.</p>
          <p>While fitness trackers and apps are useful tools, they are missing the elements of on-going engagement, motivation and accountability. GOQii solves this by connecting your activity tracker or smart watch to a professional health and fitness coach of your choice via the “GOQii App” (available on iOS and Android) and a wearable GOQii fitness band ("GOQii Tracker").</p>
          <p>You can read more about GOQii and our product at website <span className="text-primary font-medium">goqii.com</span> (together with the GOQii App is hereby referred to as the "Platform"). For ease of reading and clarity, the Platform, the GOQii App and the GOQii Tracker are collectively referred to as the "Services". Your use of the Platform and Services are governed by the Terms of Use and other policies of GOQii.</p>
          <p className="pt-4 border-t border-slate-100 dark:border-slate-800">We know that the privacy of your personal data is very important to you. This Privacy Policy sets forth GOQii’s policy with respect to information including personally identifiable data ("Personal Data") and other information that is collected from Platform visitors and users.</p>
        </div>
      )
    },
    {
      id: "02",
      title: "TrueDepth API for AI Skin Analysis",
      icon: Eye,
      content: (
        <div className="space-y-6">
          <p>Our Skin Wellness Assessment (Skinalyze) feature uses your device's TrueDepth camera API. We handle this data with the following principles:</p>
          <div className="space-y-4">
            {[
              { label: "On-Device Processing", text: "All TrueDepth camera data is processed in real time on your device only. It never leaves your device and is not collected, stored, or shared by us." },
              { label: "Purpose of Use", text: "This data is used exclusively to power our AI Skin Analysis and augmented reality features that provide real-time skin health insights." },
              { label: "No Identification", text: "We do not use TrueDepth data for facial recognition, authentication, user identification, advertising, or marketing." }
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                <h4 className="text-primary font-bold text-sm mb-1">{item.label}</h4>
                <p className="text-sm opacity-80">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-sm italic opacity-70">While TrueDepth camera data itself is never stored, you may choose to save your skin analysis results or photos to your profile. These results are stored securely and can be deleted at any time through the app's settings.</p>
        </div>
      )
    },
    {
      id: "03",
      title: "Personal Data",
      icon: Lock,
      content: (
        <div className="space-y-4">
          <p>We collect Personal Data from you when you voluntarily provide such information, such as when you contact us with inquiries, register for access to GOQii Services, or use certain GOQii Services.</p>
          <div className="flex flex-wrap gap-2 py-2">
            {[
              "Full name", "Email address", "Password", "Gender", "Profile picture", 
              "Contact details", "Address", "Date of birth", "Height", "Weight", 
              "Dietary info", "Fitness details", "Medical history", "Medication"
            ].map((item, idx) => (
              <span key={idx} className="px-3 py-1 rounded-lg bg-primary/5 border border-primary/10 text-xs font-medium text-primary dark:text-primary">
                {item}
              </span>
            ))}
          </div>
          <p className="text-sm opacity-70">By voluntarily providing us with Personal Data, you are consenting to our use of it, in accordance with this Privacy Policy.</p>
        </div>
      )
    },
    {
      id: "04",
      title: "Non-Identifiable Data",
      icon: Zap,
      content: (
        <p>When you interact with GOQii through the Platform, we receive and store certain personally non-identifiable information. Such information, which is collected passively using various technologies, cannot presently be used to specifically identify you. Consequently, we do not adjust or alter our Platform’s automatic tracking and data collection in response to a Do Not Track signal or request.</p>
      )
    },
    {
      id: "05",
      title: "Cookies & Passive Tracking",
      icon: Cookie,
      content: (
        <div className="space-y-4">
          <p>In operating this Platform, we may use a technology called "cookies." Our cookies help provide additional functionality to the Platform and help us analyze Platform usage more accurately. We recommend that you leave cookies turned on because they allow you to take advantage of some of the Platform’s features.</p>
          <p className="text-sm opacity-70">This Platform may also enable the use of Adobe Flash Player, which generates “flash cookies” to remember user settings and preferences.</p>
        </div>
      )
    },
    {
      id: "06",
      title: "Aggregated Personal Data",
      icon: Users,
      content: (
        <p>GOQii may conduct research on its customer demographics and behavior based on the Personal Data provided. This research may be compiled and analyzed on an aggregate basis, and GOQii may share this aggregate data with its affiliates, agents and business partners. This aggregate information does not identify you personally.</p>
      )
    },
    {
      id: "07",
      title: "Location Information",
      icon: Globe,
      content: (
        <p>Our Service may collect and use your location information (for example, by requesting your location in your profile or by using the GPS on your mobile device or the GOQii Band) to provide certain functionality of our Service.</p>
      )
    },
    {
      id: "08",
      title: "Use of Data & Communication",
      icon: Mail,
      content: (
        <div className="space-y-4">
          <p>GOQii uses the Personal Data you provide in a manner that is consistent with this Privacy Policy. We may use it to answer your questions, provide access to services, and monitor your use of such services.</p>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 text-sm">
            <h4 className="font-bold text-primary mb-2">Opt-Out Options:</h4>
            <p>Email: Instructions are included in every email.</p>
            <p>SMS/IVR: Write to support@goqii.com mentioning your request.</p>
          </div>
        </div>
      )
    },
    {
      id: "09",
      title: "How We Use Collected Data",
      icon: Scale,
      content: (
        <div className="space-y-4">
          <p>GOQii is not in the business of selling your information. However, there are certain circumstances in which we may share your Personal Data with third parties:</p>
          <ul className="space-y-2 text-sm">
            <li><strong>Business Transfers:</strong> Data may be part of transferred assets in mergers or sales.</li>
            <li><strong>Related Companies:</strong> Shared with subsidiaries and affiliates for consistent purposes.</li>
            <li><strong>Agents & Consultants:</strong> Third parties hired for specific business functions.</li>
            <li><strong>Legal Requirements:</strong> Disclosure required by law or to protect safety.</li>
          </ul>
          <p className="text-sm font-medium text-primary">Insurance Partners: We share information only when specifically authorized by the customer.</p>
        </div>
      )
    },
    {
      id: "10",
      title: "Third-Party Services",
      icon: LinkIcon,
      content: (
        <p>You can use the Platform without providing any Personal Data. If you choose not to provide any Personal Data, you may not be able to use certain GOQii Services.</p>
      )
    },
    {
      id: "11",
      title: "Data Retention & Deletion",
      icon: Trash2,
      content: (
        <p>This Privacy Policy does not apply to any Personal Data collected by GOQii other than Personal Data collected through the Services. This Privacy Policy shall not apply to any unsolicited information you provide to GOQii through this Platform or through any other means. All Unsolicited Information shall be deemed to be non-confidential.</p>
      )
    },
    {
      id: "12",
      title: "User Consent & Control",
      icon: UserCheck,
      content: (
        <p>We do not permit third parties to collect Personal Data on our Platform, but our Platform may contain links to other web sites not operated or controlled by GOQii. We suggest contacting those sites directly for their privacy policies.</p>
      )
    },
    {
      id: "13",
      title: "Children's Privacy & Social Media",
      icon: Baby,
      content: (
        <p>If you elect to access and use Social Media Services through the Platform, you will be sharing your information with those services. The manner in which Social Media Services use, store and disclose your information is governed by their own policies.</p>
      )
    },
    {
      id: "14",
      title: "Security",
      icon: Shield,
      content: (
        <p>GOQii takes reasonable steps to protect Personal Data from loss, misuse, and unauthorized access. While we endeavor to take all reasonable steps, no Internet or e-mail transmission or security measure is ever fully secure or error free.</p>
      )
    },
    {
      id: "15",
      title: "Changes to Privacy Policy",
      icon: Clock,
      content: (
        <p>Your information may be transferred to, and / or maintained on servers located outside of your state, province or country. Your consent to this Privacy Policy represents your agreement to that transfer.</p>
      )
    },
    {
      id: "16",
      title: "Contact Information",
      icon: HelpCircle,
      content: (
        <div className="space-y-4">
          <p>For any queries or concerns regarding your privacy, please contact our support team.</p>
          <a 
            href="mailto:support@goqii.com"
            className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
          >
            <Mail className="w-4 h-4" />
            support@goqii.com
          </a>
        </div>
      )
    }
  ];

  return (
    <main className="relative bg-[var(--bg-primary)] transition-colors duration-300 min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-4 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-primary/10 to-transparent dark:from-primary/20 pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <span className="px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary dark:text-primary text-xs font-bold tracking-[0.2em] uppercase mb-8 inline-block">
            LEGAL & PRIVACY
          </span>
          <h1 className="hero-title font-display font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-blue">Policy</span>
          </h1>
          <div className="flex items-center justify-center gap-3 text-slate-500 dark:text-slate-400 font-medium bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800 px-8 py-3 rounded-full w-fit mx-auto shadow-lg shadow-black/5">
            <Clock className="w-5 h-5 text-primary" />
            Last Updated: 1 Oct 2025
          </div>
        </motion.div>
      </section>

      {/* Accordion Section */}
      <section className="pb-16 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {sections.map((section) => (
            <AccordionItem
              key={section.id}
              id={section.id}
              title={section.title}
              icon={section.icon}
              isOpen={openId === section.id}
              onToggle={() => toggleAccordion(section.id)}
            >
              {section.content}
            </AccordionItem>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-10">
            <ShieldCheck className="w-10 h-10" />
          </div>
          <h2 className="font-display font-bold text-slate-900 dark:text-white mb-8">Data Protection</h2>
          <p className="text-slate-600 dark:text-slate-400 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Your privacy is our priority. We use industry-standard encryption and security protocols to keep your health data safe and confidential.
          </p>
          <a 
            href="mailto:privacy@goqii.com"
            className="inline-flex items-center gap-3 px-12 py-5 rounded-full bg-primary text-white font-bold text-xl hover:bg-primary-dark transition-all shadow-2xl shadow-primary/25 group"
          >
            <Mail className="w-6 h-6" />
            Contact Privacy Officer
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </main>
  );
};
