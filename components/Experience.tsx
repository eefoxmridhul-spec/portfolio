'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const education = [
    {
        period: "2022 — 2026",
        degree: "Bachelor of Technology in Computer Science",
        institution: "APJ Abdul Kalam Technological University",
        college: "John Cox Memorial CSI Institute of Technology, Trivandrum"
    },
    {
        period: "2020 — 2022",
        degree: "Higher Secondary Education",
        institution: "Abraham Memorial Higher Secondary School, Trivandrum"
    }
];

const certificates = [
    "Completed AWS (Amazon Web Services) ML Engineer Associative Curriculum Overview Course (2025)",
    "LBS Centre for Science & Technology - Back End Software Development using Python & ML Starter Kit (2024)",
    "Garuda Aerospace Private Limited - Workshop on Drone Technology and its Application (2024)",
    "Completed NPTEL Cyber Security and Privacy Course (2024)"
];

export default function Experience() {
    return (
        <section id="experience" className="py-32 px-6 relative z-10 w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">

                {/* Education Timeline */}
                <div className="lg:col-span-7">
                    <div className="flex items-center gap-4 mb-10">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                                <GraduationCap size={32} strokeWidth={2} />
                            </div>
                            Education
                        </h2>
                    </div>

                    <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 space-y-12 pb-4">
                        {education.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.15 }}
                                className="relative flex flex-col pl-8 md:pl-10 before:absolute before:left-[-9px] before:top-2 before:w-4 before:h-4 before:bg-white before:border-4 before:border-blue-500 before:rounded-full"
                            >
                                <span className="bg-slate-100 text-slate-600 rounded-full inline-block px-3 py-1 font-semibold text-xs uppercase tracking-wider mb-3 self-start">{item.period}</span>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.degree}</h3>
                                <p className="text-slate-700 font-medium mb-1">{item.institution}</p>
                                {item.college && (
                                    <p className="text-slate-500 font-medium text-sm mt-1">{item.college}</p>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Certificates List */}
                <div className="lg:col-span-5 relative">
                    <div className="flex items-center gap-4 mb-10">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl">
                                <Award size={32} strokeWidth={2} />
                            </div>
                            Certifications
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {certificates.map((cert, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
                                className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 group flex items-start gap-4 hover:shadow-md transition-shadow duration-300 cursor-default"
                            >
                                <div className="w-2.5 h-2.5 mt-2 rounded-full bg-emerald-400 shrink-0 group-hover:scale-125 transition-transform duration-300" />
                                <p className="text-slate-600 font-medium text-sm leading-relaxed">{cert}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
