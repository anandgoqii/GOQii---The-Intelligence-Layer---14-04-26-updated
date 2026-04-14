import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, Lock, Globe } from 'lucide-react';
import { useModals } from '../context/ModalContext';

import { HeroBackground } from './HeroBackground';

export const Hero = () => {
  const { openDemoModal } = useModals();

  return (
    <section className="relative h-screen flex flex-col justify-center overflow-hidden w-full">
      {/* Dynamic Hero Background */}
      <HeroBackground />

      <div className="relative z-10 px-4 max-w-7xl mx-auto w-full">
        <div className="max-w-4xl text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6 mb-8"
          >
            {/* Logo & Badge Row */}
            <div className="flex flex-wrap items-center gap-6 mt-2">
              <img 
                src="https://appcdn.goqii.com/user/storeimg/9046_1775830352.png" 
                alt="GOQii Sanjeevini" 
                className="h-12 w-auto object-contain opacity-90 hidden dark:block"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://appcdn.goqii.com/storeimg/32592_1775124472.png" 
                alt="Modality Logo" 
                className="h-12 w-auto object-contain opacity-90 block dark:hidden"
                referrerPolicy="no-referrer"
              />
              <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-widest uppercase inline-block">
                The Operating System for Human Longevity
              </span>
            </div>

            <h1 className="hero-title font-display tracking-tighter mt-2">
              Predict. Personalize.<br />
              <span className="gradient-text">
                Prevent. Prosper.
              </span>
            </h1>
            <p className="hero-subtext leading-relaxed">
              Transforming healthcare from reactive treatment to continuous, AI-driven prevention—built for individuals, enterprises, insurers, and governments.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8"
          >
            <button 
              onClick={openDemoModal}
              className="px-8 py-4 button-primary flex items-center gap-2 group shadow-xl shadow-primary/20 transition-all duration-300 hover:scale-105"
            >
              Request a Demo
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link 
              to="/longevity-journey"
              className="px-8 py-4 rounded-full bg-card text-current font-medium hover:bg-white/10 transition-all duration-300 border border-black/5 dark:border-white/5 hover:scale-105"
            >
              Start Your Health Journey
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
