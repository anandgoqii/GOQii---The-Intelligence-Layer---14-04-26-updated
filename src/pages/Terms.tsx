import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Shield, FileText, Clock, Mail, ChevronRight, AlertTriangle, CheckCircle2 } from 'lucide-react';

const TermsSection = ({ 
  id, 
  title, 
  children, 
  isDark = false,
  isWarning = false 
}: { 
  id?: string, 
  title: string, 
  children: React.ReactNode, 
  isDark?: boolean,
  isWarning?: boolean
}) => {
  return (
    <section className={`py-8 md:py-12 w-full relative overflow-hidden ${isDark ? 'bg-slate-900 text-white' : 'bg-[var(--bg-primary)]'}`}>
      {isDark && (
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(235,153,37,0.3)_0%,transparent_70%)]" />
      )}
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        {id && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-display font-bold text-sm mb-6 tracking-[0.3em] uppercase"
          >
            Section {id}
          </motion.div>
        )}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-3xl md:text-5xl font-display font-bold tracking-tight mb-10 ${isWarning ? 'text-red-500 dark:text-red-400' : isDark ? 'text-white' : 'text-slate-900 dark:text-white'}`}
        >
          {title}
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`text-lg md:text-xl font-light leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600 dark:text-slate-400'}`}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export const Terms = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <main className="relative bg-[var(--bg-primary)] transition-colors duration-300">
      {/* Hero Section - Top Center */}
      <section className="pt-32 pb-6 px-4 text-center relative overflow-hidden">
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
          <h1 className="hero-title font-display font-bold tracking-tight text-slate-900 dark:text-white mb-10">
            Terms of Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-blue">& Privacy Policy</span>
          </h1>
          <div className="flex items-center justify-center gap-3 text-slate-500 dark:text-slate-400 font-medium bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800 px-8 py-3 rounded-full w-fit mx-auto shadow-lg shadow-black/5">
            <Clock className="w-5 h-5 text-primary" />
            Last Updated: 26 Oct 2023
          </div>
        </motion.div>
      </section>

      {/* 01 Introduction */}
      <TermsSection id="01" title="Introduction">
        <div className="space-y-8 max-w-3xl mx-auto text-left">
          <p>
            We, GOQii (collectively used to refer to GOQii Inc., GOQii Technologies Pvt. Ltd. and/or its subsidiaries, affiliates, successors and assigns) bring to you a digital health and fitness subscription service that combines one-on-one mobile personal coaching and fitness tracking technology to help you shift to a healthier lifestyle and reach your goals.
          </p>
          <p>
            While fitness trackers and apps are useful tools, they are missing the elements of on-going engagement, motivation and accountability. GOQii solves this, by connecting your activity tracker or smart watch to a professional health and fitness coach of your choice via the “GOQii App” (available on iOS and Android platforms) and a wearable GOQii fitness band (“GOQii Tracker”).
          </p>
          <p>
            You can read more about GOQii and our product on the website <span className="text-primary font-medium">“goqii.com”</span> (together with the GOQii App is hereby referred to as the "Platform"). For ease of reading and clarity, the Platform, the GOQii App and the GOQii Tracker are collectively referred to as the "Services".
          </p>
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 mt-8">
            <p className="mb-4">These Terms of Service along with the Privacy Policy ("Terms") govern your access to and use of the Services, so please read them carefully before using the Services. By accessing and using any of the Services, you agree to be bound by these Terms. If you do not agree to be bound by these Terms, please do not access or use any of the Services.</p>
            <p className="text-sm opacity-70 italic">As our business grows and we add new functionality to the Services, we may revise these Terms at any time and without giving you prior notice. Your acceptance of these Terms (including revised Terms through your continued access and use of the Services), along with other terms and conditions, policies and disclaimers of GOQii, constitute a valid and binding agreement between you and GOQii.</p>
          </div>
        </div>
      </TermsSection>

      {/* 02 Your Use of Services */}
      <TermsSection id="02" title="Your Use of Services" isDark>
        <div className="space-y-6 max-w-3xl mx-auto text-left">
          <p>You must be 18 years of age to access and use the Services and should be able to contract as per the laws of your jurisdiction. You may use the Services only in compliance with these Terms and all laws applicable to you and your access and use of the Services.</p>
          <p>Once you purchase GOQii Services, you may learn more about the Services via information available on the Platform, including the Frequently Answered Questions (FAQs) available at: <a href="https://goqiisupport.zendesk.com/hc/en-us" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://goqiisupport.zendesk.com/hc/en-us</a>.</p>
          <p>In order to register an account and access or use the Services, you may be required to provide certain information including but not restricted to your full name, email address, password, gender, profile picture, contact details, address, date of birth, height, weight, dietary information, fitness and exercise details, medical history and conditions and medication details. You are responsible for maintaining the accuracy and completeness of this information provided.</p>
          <p>You may register for use of the Services through your existing email accounts (such as Gmail, Hotmail etc.) Your email address will constitute your username for your account. You are responsible for maintaining the confidentiality of your username and password. You will be fully responsible for all activities that occur under your account, including activities of others to whom you have provided your username or password, so please notify GOQii immediately of any unauthorized use of your account or any other breach of security.</p>
        </div>
      </TermsSection>

      {/* 03 Medical Advice Warning */}
      <TermsSection id="03" title="We Do Not Provide Medical Advice" isWarning>
        <div className="w-20 h-20 rounded-3xl bg-red-500/10 flex items-center justify-center text-red-500 mx-auto mb-10">
          <AlertTriangle className="w-10 h-10" />
        </div>
        <div className="space-y-8 max-w-3xl mx-auto text-left">
          <p className="text-2xl font-bold text-center leading-tight">
            GOQii DOES NOT PROVIDE MEDICAL ADVICE. DO NOT USE THE SITE OR THE SERVICES FOR ANY MEDICAL OR MENTAL HEALTH NEEDS.
          </p>
          <p className="font-bold text-center">IF YOU THINK YOU MAY BE A DANGER TO YOURSELF OR OTHERS, OR YOU ARE HAVING A MEDICAL OR MENTAL HEALTH EMERGENCY, CALL THE EMERGENCY MEDICAL SERVICES IN YOUR HOME JURISDICTION.</p>
          <p>The Services provided by GOQii, including information provided through personalized coaching services, does not constitute medical advice of any kind and it is not intended to be, and should not be, used to diagnose or identify treatment for a medical or mental health condition. Nothing on the Platform or in the Services should be construed as an attempt to offer or render a medical or mental health opinion or diagnosis, or otherwise engage in the practice of medicine by GOQii.</p>
          <p>You should consult with your physician before making any changes to your diet or exercise program, including making any changes suggested through any of the GOQii Services. By using the Services, you represent that you have received consent from your physician to participate in the programs, you learn about through the Services. We are not responsible for any medical or mental health problems you may face as a result of accessing or using the Services, or from training programs, nutrition changes, products, or relationships with our Eco-System partners that you learn about through the Services. If you make any lifestyle changes based on information you receive through the Service, you agree that you do so at your own risk and GOQii will in no manner be liable for any harm of injury, whether bodily or otherwise that may occur as a result of such lifestyle changes.</p>
          <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/10 text-sm">
            <p>GOQii DOES NOT RECOMMEND, REFER, ENDORSE, VERIFY, EVALUATE OR GUARANTEE ANY ADVICE, INFORMATION, EXERCISE, DIET, INSTITUTION, PRODUCT, ECO-SYSTEM PARTNER, OPINION OR OTHER INFORMATION OR SERVICES PROVIDED THROUGH THE SERVICES, AND NOTHING SHALL BE CONSIDERED AS A REFERRAL, ENDORSEMENT, RECOMMENDATION OR GUARANTEE OF ANY COACH OR ECO-SYSTEM PARTNER.</p>
          </div>
        </div>
      </TermsSection>

      {/* 04 Modifications & User Content */}
      <TermsSection id="04" title="Modifications & User Content" isDark>
        <div className="space-y-6 max-w-3xl mx-auto text-left">
          <p>The Services may change over time as we add more features. We may modify, suspend or discontinue, temporarily or permanently, the Services (or a part of the Services) from time to time without prior notice to you. Please backup your data as GOQii has no responsibility for the deletion or failure to store any data or other content maintained or transmitted by the Services.</p>
          <p>You are solely responsible for all information, data, text, music, sound, photographs, graphics, video, messages or other materials ("User Content") that you post on the Platform. You acknowledge that we may use technological tools to screen, track, extract, compile, aggregate or analyze any data or information resulting from use of the Services. You agree to not use the Services to post or otherwise transmit any content that is unlawful, threatening, spam, contains software viruses or, in the sole judgment of GOQii, restricts or inhibits any other person from using or enjoying the Services, or which may expose GOQii or its users to any harm or liability of any type. You acknowledge that GOQii has the right to remove such User Content, at its sole discretion and without prior notice to you.</p>
          <p>You agree that you are the owner of the copyright in the User Content that you post on the Platform and transmit via the Services. You agree to grant GOQii a non-exclusive, non-revocable, worldwide, royalty-free license to copy distribute, display, reproduce, modify, adapt, create derivative works, and publicly perform the User Content that you post on the Platform in all forms.</p>
        </div>
      </TermsSection>

      {/* 05 Services Content & Intellectual Property */}
      <TermsSection id="05" title="Services Content & IP">
        <div className="space-y-6 max-w-3xl mx-auto text-left">
          <p>The Services may contain content and information such as data, text, audio, video, images ("Services Content") that is protected by copyright, patent, trademark, trade secret or other proprietary rights under applicable laws. All Services Content is owned exclusively by GOQii. A royalty-free license is granted to you by GOQii to use the Service Content for personal and non-commercial use only.</p>
          <p>You are not permitted to use any data mining, robots, scraping or similar data gathering or extraction methods. Any use of the Platform or the Services Content other than as authorized by these Terms or for any purpose not intended under these Terms is strictly prohibited and may result in termination of the license granted to you by GOQii under these Terms. The technology and software underlying the Services is the property of GOQii, our affiliates and our partners (the "Software"). You agree not to reverse engineer, reverse assemble, modify or otherwise attempt to discover any source code version of the Software.</p>
          <p>GOQii names and logos are trademarks and service marks which are proprietary to and are owned by GOQii (collectively the "GOQii Trademarks"). Other company products, brand names and logos used and displayed via the Services may be trademarks of their respective owners who may or may not endorse or be affiliated with or connected to GOQii.</p>
        </div>
      </TermsSection>

      {/* 06 Third Party Content & Services */}
      <TermsSection id="06" title="Third Party Content & Services" isDark>
        <div className="space-y-6 max-w-3xl mx-auto text-left">
          <p>The Services may provide, or third parties may provide, links or otherwise direct users to other sites and resources on the Internet. GOQii has no control over such sites and resources and GOQii is not responsible for and does not endorse such sites and resources. GQOii is not responsible for your use of any third party resources.</p>
          <p>GOQii does not endorse and will not be liable for any content posted by third parties. You must evaluate the accuracy and usefulness of such third party content. GOQii does not pre-screen content, but GOQii and its designees will have the right (but not the obligation) to refuse or remove any content that is available via the Services.</p>
          <p>In respect of the User Content and Third Party Content uploaded / transmitted via the Services, GOQii is a publisher of such information posted by you and would be acting as an ‘intermediary’. Being an intermediary, GOQii has no liability in respect to any User Content and Third Party Content on the Platform.</p>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 mt-6">
            <h3 className="text-xl font-bold text-white mb-3">Repeat Infringer Policy</h3>
            <p className="text-slate-300">In accordance with the Digital Millennium Copyright Act (DMCA) and other applicable law, GOQii has adopted a policy of terminating, in appropriate circumstances and at GOQii's sole discretion, users who are deemed to be repeat infringers. GOQii may also at its sole discretion limit access to the Services and/or terminate the accounts of any users who infringe any intellectual property rights of others, whether or not there is any repeat infringement.</p>
          </div>
        </div>
      </TermsSection>

      {/* 07 Doctor Policy & Health Service */}
      <TermsSection id="07" title="Doctor Policy & Health Service">
        <div className="space-y-6 max-w-3xl mx-auto text-left">
          <p>GOQii Service connects you with GOQii Doctors (General Practitioners) to help and advise you on all routine medical and lifestyle challenges. GOQii Health Service is not for medical care. On the GOQii Health Service, no formal medical diagnosis, treatment, or prescriptions will be provided.</p>
          <p className="font-bold">ALL INFORMATION PROVIDED ON GOQII HEALTH SERVICE IS INTENDED TO BE FOR GENERAL INFORMATIONAL PURPOSES ONLY, GOQii HEALTH SERVICE IS NOT A SUBSTITUTE FOR PROFESSIONAL MEDICAL DIAGNOSIS OR TREATMENT; AND RELIANCE ON ANY INFORMATION PROVIDED BY GOQii HEALTH SERVICE IS SOLELY AT YOUR OWN RISK.</p>
          <p>GOQii Doctors on GOQii Health Service are not "your" doctor, physician, or healthcare provider. When you participate in a Consult on GOQii Health Service, you understand and agree that GOQii Doctors on GOQii Health Service are not your Primary Care Physician and you agree not to use GOQii Health Service as a substitute for interactions with your Primary Care Physician.</p>
        </div>
      </TermsSection>

      {/* 08 Health Locker & Quality Assurance */}
      <TermsSection id="08" title="Health Locker & Quality Assurance" isDark>
        <div className="space-y-6 max-w-3xl mx-auto text-left">
          <p>Your medical records include, amongst others, your consultation with GOQii Health, your medical documents, Health Risk Assessment (HRA) Reports. You agree to the entry of your health records into the GOQii database. Your health records would be shared with GOQii including your GOQii Coach and GOQii Doctor, or based on your choice kept private.</p>
          <p>You acknowledge and agree that, in order to provide you with some parts of the Services, we may share your data with third-party service providers whose services you decide to utilize as a part of the GOQii Services. We take reasonable steps to ensure that our third-party service providers protect your data in accordance with applicable data protection laws.</p>
          <p>You understand that information collected through your use of the Services may be reviewed under a GOQii quality assurance program. The records of the GOQii Quality Assurance Team is subject to confidentiality. All chats, emails, audio & video calls might be recorded and monitored for quality and training purposes.</p>
        </div>
      </TermsSection>

      {/* 09 Purchases & Store Terms */}
      <TermsSection id="09" title="Purchases & Store Terms">
        <div className="space-y-6 max-w-3xl mx-auto text-left">
          <p>All purchases on GOQii store will not get a cash refund. Products can be exchanged subject to warranty clause. GOQii Cash used on the store will not be refunded even if you cancel the purchase pre or post shipping.</p>
          <p>Unless expressly stated otherwise in writing, products and services are provided 'as is' and 'as available' without any warranty of any kind, either expressed or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, or non-infringement. All sales are final, and no returns, exchanges, or refunds are permitted unless explicitly stated otherwise.</p>
          <p>GOQii Tracker (Device) is completely covered for all Manufacturing Defects for the duration of your Paid Coaching Subscription Plan or 1 year whichever ends earlier. To avail the warranty, you would have to raise a support ticket via the GOQii APP.</p>
        </div>
      </TermsSection>

      {/* 10 Disclaimer & Liability */}
      <TermsSection id="10" title="Disclaimer & Liability" isDark isWarning>
        <div className="space-y-6 max-w-3xl mx-auto text-left">
          <p className="text-xl font-bold uppercase text-center">YOUR USE OF THE SERVICES IS AT YOUR SOLE RISK.</p>
          <p>GOQii DISCLAIMS ANY REPRESENTATION AND WARRANTIES FOR THE SECURITY, RELIABILITY, QUALITY, TIMELINESS, AND PERFORMANCE OF THE SITE, SERVICES AND SERVICES CONTENT. GOQii MAKES NO WARRANTY OR REPRESENTATION THAT ANY ERRORS IN THE SITE AND SERVICES WILL BE CORRECTED.</p>
          <p>YOU EXPRESSLY UNDERSTAND AND AGREE THAT GOQII WILL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY DAMAGES, OR DAMAGES FOR LOSS OF PROFITS. IN NO EVENT WILL GOQII'S TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES OR CAUSES OF ACTION EXCEED THE AMOUNT OF SUBSCRIPTION FEES PAID BY YOU FOR THE SERVICES.</p>
        </div>
      </TermsSection>

      {/* 11 Subscription & Plans */}
      <TermsSection id="11" title="Subscription & Plans">
        <div className="space-y-6 max-w-3xl mx-auto text-left">
          <p>You can subscribe to our GOQii Health Plans using the Apple ID associated with your Apple App Store account. Payment will be charged to iTunes Account at confirmation of purchase. Subscription automatically renews unless auto-renew is turned off at least 24 hours before the end of the current period.</p>
          <p>GOQii Services is highly personalized to suit your health and fitness needs. However, if you wish to transfer this to a friend or family, a transfer fee of Rs. 999/- needs to be paid in order to continue using GOQii coaching service. At the end of your subscribed plan, you need to renew your coaching services.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {["Annual - $179.99", "Half Yearly - $119.99", "Quarterly - $69.99"].map((plan, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-primary/5 border border-primary/10 text-center font-bold text-primary dark:text-primary">
                {plan}
              </div>
            ))}
          </div>
        </div>
      </TermsSection>

      {/* 12 Reward Points Integration */}
      <TermsSection id="12" title="Reward Points Integration" isDark>
        <div className="space-y-6 max-w-3xl mx-auto text-left">
          <p>GOQii reserves the right to integrate or disintegrate any reward points, whether on a centralized ledger or otherwise, at its sole discretion and without prior notice to the User. The accumulation and use of Third Party Reward Points are subject to the terms and conditions of the respective third-party.</p>
          <p>The User acknowledges that GOQii is not responsible for the performance, reliability, or any consequences arising from the use of Third Party Reward Points integrated into the App. Any disputes or issues related to third-party reward points must be addressed directly with the respective reward point issuer or supplier.</p>
          <p>The User acknowledges and agrees that GOQii is not responsible for any tax implications, including but not limited to income tax, capital gains tax, or any other taxes that may arise as a result of the usage of reward points obtained through the App.</p>
        </div>
      </TermsSection>

      {/* 13 Insurance Claim Responsibility */}
      <TermsSection id="13" title="Insurance Claim Responsibility">
        <div className="space-y-6 max-w-3xl mx-auto text-left">
          <p>GOQii Technologies Pvt. Ltd. provides access to insurance plans and services through third-party insurance providers. It is hereby clarified that GOQii does not function as an insurance provider, underwriter, or claim processor.</p>
          <p>All insurance-related matters, including but not limited to claims, policy cancellations, or disputes, are solely between the customer and the respective insurance provider. GOQii shall not be held liable for any decisions, delays, or actions taken by the insurance provider concerning claims or policies.</p>
        </div>
      </TermsSection>

      {/* 14 Return Policy */}
      <TermsSection id="14" title="Return Policy" isDark>
        <div className="space-y-6 max-w-3xl mx-auto text-left">
          <p>If the GOQii-branded device and/or accessory delivered to you has obvious damage upon receipt, you may request an immediate exchange/replacement within 48 hours of your delivery date. Please keep the items in its original condition, with brand outer box, MRP tags attached, user manual, and original accessories.</p>
          <p>Order once placed will not be refunded but can be replaced. In case of any manufacturing defects the same shall be replaced as indicated in the Warranty Statement. GOQii shall have the right to place advertisements and publicity materials of its choice through electronic means on the Platform and via the Services.</p>
        </div>
      </TermsSection>

      {/* 15 Miscellaneous & Complaints */}
      <TermsSection id="15" title="Miscellaneous & Complaints">
        <div className="space-y-6 max-w-3xl mx-auto text-left">
          <p>The Terms (including Privacy Policy) constitute the entire agreement between you and GOQii. The Terms will be governed by the laws of India. You and GOQii agree to submit to the personal and exclusive jurisdiction of the courts of Mumbai, India.</p>
          <p>If you have any complaints or grievances in respect to the Platform, Services and / or Platform Content, please contact us via Live chat from GOQii application or website.</p>
        </div>
      </TermsSection>

      {/* 16 Legal Provisions */}
      <TermsSection id="16" title="Legal Provisions" isDark>
        <div className="space-y-6 max-w-3xl mx-auto text-left">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4">Severability</h3>
            <p className="text-slate-300">If any provision of these Terms is found by a court of competent jurisdiction to be invalid, the parties nevertheless agree that the court should endeavor to give effect to the parties' intentions as reflected in the provision, and the other provisions of these Terms remain in full force and effect.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4">Assignment</h3>
            <p className="text-slate-300">GOQii may assign or transfer these Terms, in whole or in part, without restriction. You may not assign or transfer these Terms or any of your rights or obligations hereunder without GOQii's prior written consent.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4">Conflict</h3>
            <p className="text-slate-300">In the event of any conflict between these Terms and any other agreement between you and GOQii, these Terms shall prevail unless the other agreement expressly states otherwise.</p>
          </div>
        </div>
      </TermsSection>

      {/* 17 Additional Terms */}
      <TermsSection id="17" title="Additional Terms">
        <div className="space-y-6 max-w-3xl mx-auto text-left">
          <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10 text-center">
            <p className="font-bold text-primary text-2xl mb-4 uppercase tracking-wider">ADDITIONAL TERMS MAY APPLY</p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              By agreeing to Terms of Service and Terms of Use, you also agree to Terms of Sales (if applicable) and UHT Rewards Terms of Use (if applicable). These additional terms are incorporated by reference into these Terms.
            </p>
          </div>
        </div>
      </TermsSection>

      {/* Footer CTA */}
      <section className="py-16 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-10">
            <Shield className="w-10 h-10" />
          </div>
          <h2 className="font-display font-bold text-slate-900 dark:text-white mb-8">Need Help?</h2>
          <p className="text-slate-600 dark:text-slate-400 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Our support team is available via live chat to help you with any questions regarding our terms or services.
          </p>
          <a 
            href="mailto:support@goqii.com"
            className="inline-flex items-center gap-3 px-12 py-5 rounded-full bg-primary text-white font-bold text-xl hover:bg-primary-dark transition-all shadow-2xl shadow-primary/25 group"
          >
            <Mail className="w-6 h-6" />
            Contact Support
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </main>
  );
};
