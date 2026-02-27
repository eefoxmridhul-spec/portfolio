'use client';

import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-32 px-6 relative z-10 w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Section Header */}
                <div className="lg:col-span-4">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="sticky top-32"
                    >
                        <h2 className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-3 inline-block">
                            About Me
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                            Engineering with purpose.
                        </h3>
                        <div className="w-12 h-1.5 bg-blue-600 rounded-full" />
                    </motion.div>
                </div>

                {/* Content Area */}
                <div className="lg:col-span-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 relative overflow-hidden"
                    >
                        <p className="text-slate-600 leading-relaxed font-medium mb-6 text-lg">
                            I am a final-year B.Tech Computer Science student with practical experience in
                            <strong className="font-semibold text-slate-900"> Python, JavaScript, React, and Node.js</strong>.
                            My development journey is driven by a passion for creating seamless user experiences and robust backend architectures.
                        </p>

                        <p className="text-slate-600 leading-relaxed font-medium mb-6 text-lg">
                            Currently, I am working on a <strong className="font-semibold text-slate-900">microplastic detection project</strong> featuring a React Native dashboard tailored for real-time environmental monitoring. This intersection of software and IoT excites me, as it demonstrates how code can solve tangible, real-world problems.
                        </p>

                        <p className="text-slate-600 leading-relaxed font-medium text-lg">
                            I am actively seeking entry-level software developer roles, apprenticeships, or internships where I can contribute to forward-thinking teams, apply my current skills, and rapidly learn modern industry practices.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
