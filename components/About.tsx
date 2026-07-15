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
                            I am a <strong className="font-semibold text-slate-900">Software Developer and Computer Science graduate (2026)</strong> with a strong foundation in data structures, algorithms, and OOP.
                            My expertise lies in designing and building full-stack web, mobile, and IoT-integrated applications using <strong className="font-semibold text-slate-900">Java, Spring Boot, TypeScript, React/Next.js, React Native, Flutter, and Node.js</strong>.
                        </p>

                        <p className="text-slate-600 leading-relaxed font-medium mb-6 text-lg">
                            I have independently shipped and deployed <strong className="font-semibold text-slate-900">four full-stack projects end-to-end</strong>, demonstrating proficiency in REST API design, JWT authentication, and relational database modeling with JPA/Hibernate.
                        </p>

                        <p className="text-slate-600 leading-relaxed font-medium text-lg">
                            I take a collaborative, detail-oriented approach to building scalable, robust software solutions, and I am eager to apply my skills to real-world software engineering challenges.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
