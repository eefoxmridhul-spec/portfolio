'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden px-6">
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/60 backdrop-blur-sm border border-slate-200/50 text-sm font-medium text-slate-600 shadow-[0_1px_2px_rgba(0,0,0,0.04)] cursor-default">
            Final-year B.Tech Computer Science Student
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 text-slate-900"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          Mridhul Narayan M
        </motion.h1>

        <motion.h2
          className="text-xl md:text-2xl font-semibold text-slate-600 mb-6 tracking-tight max-w-2xl px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          Software Developer | Web Developer | IoT Engineer
        </motion.h2>

        <motion.p
          className="text-lg text-slate-500 mb-10 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          Passionate about building scalable web applications, intelligent IoT systems, and real-world software solutions.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          <Link
            href="#projects"
            className="group flex items-center justify-center gap-2 px-8 py-3.5 bg-blue-600 text-white hover:bg-blue-700 rounded-xl font-medium transition-all shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] active:scale-[0.98] w-full sm:w-auto"
          >
            View Projects
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="mailto:mridhulnarayan329@gmail.com"
            className="flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-slate-700 hover:text-slate-900 border border-slate-200/60 hover:bg-slate-50 rounded-xl font-medium transition-all shadow-sm hover:shadow active:scale-[0.98] w-full sm:w-auto"
          >
            <Mail size={18} />
            Contact Me
          </Link>

          <div className="flex items-center justify-center gap-3 w-full sm:w-auto mt-2 sm:mt-0 sm:ml-2">
            <Link
              href="https://github.com/mridhul977"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 bg-white/50 text-slate-600 hover:text-slate-900 border border-slate-200/50 hover:bg-white rounded-xl transition-all shadow-sm hover:shadow active:scale-[0.98]"
            >
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/mridhul-narayan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 bg-white/50 text-slate-600 hover:text-blue-600 border border-slate-200/50 hover:bg-white rounded-xl transition-all shadow-sm hover:shadow active:scale-[0.98]"
            >
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

