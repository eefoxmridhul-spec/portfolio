'use client';

import { motion } from 'framer-motion';
import { Database, Layout, Server, Code2, Wrench, Boxes, Cpu } from 'lucide-react';

const skillsCats = [
    {
        category: "Languages",
        icon: <Code2 size={24} strokeWidth={2} />,
        skills: ["Python", "JavaScript", "Java", "C", "C++", "SQL"]
    },
    {
        category: "Frontend",
        icon: <Layout size={24} strokeWidth={2} />,
        skills: ["React Native", "React.js", "HTML", "CSS", "Tailwind CSS"]
    },
    {
        category: "Backend",
        icon: <Server size={24} strokeWidth={2} />,
        skills: ["Node.js", "Express.js", "REST API"]
    },
    {
        category: "Database",
        icon: <Database size={24} strokeWidth={2} />,
        skills: ["MySQL", "Supabase", "PostgreSQL"]
    },
    {
        category: "Tools",
        icon: <Wrench size={24} strokeWidth={2} />,
        skills: ["Git", "GitHub", "VS Code", "Eclipse"]
    },
    {
        category: "Libraries",
        icon: <Boxes size={24} strokeWidth={2} />,
        skills: ["Pandas", "NumPy", "TensorFlow", "Framer Motion"]
    },
    {
        category: "Core Competencies",
        icon: <Cpu size={24} strokeWidth={2} />,
        skills: ["Problem Solving", "System Architecture", "Debugging", "Agile"]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6 relative z-10 w-full max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-16 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-3"
                >
                    Expertise
                </motion.h2>
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight"
                >
                    Technical Arsenal
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="text-slate-600 font-medium max-w-2xl text-lg"
                >
                    A comprehensive suite of technologies I use to build robust applications from the ground up.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {skillsCats.map((cat, idx) => (
                    <motion.div
                        key={cat.category}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
                        className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col group relative overflow-hidden hover:shadow-md transition-shadow duration-300"
                    >
                        <div className="flex items-center gap-4 mb-6 relative z-10">
                            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-300 ease-out">
                                {cat.icon}
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 tracking-tight">
                                {cat.category}
                            </h4>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                            {cat.skills.map(skill => (
                                <span
                                    key={skill}
                                    className="px-3.5 py-1.5 bg-slate-50 border border-slate-100/80 rounded-full text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white hover:shadow-sm transition-all duration-300 ease-out cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
