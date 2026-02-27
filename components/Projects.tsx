'use client';

import { motion } from 'framer-motion';
import { ExternalLink, MonitorSmartphone } from 'lucide-react';

const projects = [
    {
        title: "Microplastic Detection System",
        subtitle: "React Native Dashboard • IoT Integration",
        description: "Developed a comprehensive system utilizing ESP32 microcontrollers and optical sensors to detect microplastic concentrations in real-time. Built a robust mobile dashboard for data visualization, leveraging stable Wi-Fi communication protocols for uninterrupted environmental monitoring.",
        tech: ["React Native", "ESP32", "JavaScript", "Python", "IoT"],
        icon: <MonitorSmartphone className="w-6 h-6" strokeWidth={2} />
    },
    {
        title: "Reclogix",
        subtitle: "Hospital Management Web Platform",
        description: "Architected a full-stack web platform streamlining patient records and secure doctor access portals. Engineered the responsive frontend interfaces using React.js and RESTful backend architectures with Node.js. Integrated Supabase for rigorous data security, authentication, and rapid deployment via Vercel.",
        tech: ["React.js", "Node.js", "Supabase", "JavaScript", "Vercel"],
        icon: <ExternalLink className="w-6 h-6" strokeWidth={2} />
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-32 px-6 relative z-10 w-full max-w-7xl mx-auto">
            <div className="flex flex-col items-start mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-3"
                >
                    Portfolio
                </motion.h2>
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight"
                >
                    Featured Works
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="text-slate-600 font-medium max-w-2xl text-lg"
                >
                    Selected projects demonstrating my ability to build across the stack, from hardware integration down to responsive frontends.
                </motion.p>
            </div>

            <div className="space-y-12">
                {projects.map((project, idx) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 * idx }}
                        className="bg-white rounded-3xl group relative overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-500 border border-slate-100"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 md:p-10 relative z-10">

                            {/* Left Info Area */}
                            <div className="lg:col-span-7 flex flex-col justify-center">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-300 ease-out">
                                        {project.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-bold text-slate-900 tracking-tight">{project.title}</h4>
                                        <p className="text-sm text-slate-500 font-medium mt-1">{project.subtitle}</p>
                                    </div>
                                </div>

                                <p className="text-slate-600 leading-relaxed font-medium mb-8 max-w-2xl text-lg">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8 lg:mb-0">
                                    {project.tech.map(t => (
                                        <span
                                            key={t}
                                            className="px-3.5 py-1.5 bg-slate-50 border border-slate-100/80 rounded-full text-xs font-medium text-slate-600 cursor-default"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Right Abstract Visual Area - Minimal Style */}
                            <div className="lg:col-span-5 h-64 lg:h-auto rounded-2xl bg-slate-50 border border-slate-100 opacity-80 relative overflow-hidden group-hover:bg-slate-100/50 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                                {/* Soft abstract gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-emerald-50/50 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative w-full h-full p-6 flex flex-col items-center justify-center gap-5">
                                    {/* Minimal UI Bars */}
                                    <div className="w-full max-w-xs h-3.5 bg-white rounded-full overflow-hidden shadow-sm border border-slate-100/50">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "66%" }}
                                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                                            className="h-full bg-blue-400/80 rounded-full"
                                        />
                                    </div>
                                    <div className="w-full max-w-[280px] h-3.5 bg-white rounded-full overflow-hidden shadow-sm border border-slate-100/50">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "50%" }}
                                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                                            className="h-full bg-emerald-400/80 rounded-full"
                                        />
                                    </div>
                                    <div className="w-full max-w-[240px] h-3.5 bg-white rounded-full overflow-hidden shadow-sm border border-slate-100/50">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "80%" }}
                                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                                            className="h-full bg-indigo-400/80 rounded-full"
                                        />
                                    </div>
                                </div>

                                {/* Abstract decorative dots */}
                                <div className="absolute top-4 right-4 flex gap-1.5">
                                    <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                                </div>
                            </div>

                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
