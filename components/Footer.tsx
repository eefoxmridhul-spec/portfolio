import Link from 'next/link';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="border-t border-slate-200/60 bg-white/50 backdrop-blur-sm py-12 px-6 mt-20 relative overflow-hidden text-sm">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h3 className="text-xl font-bold text-slate-900 mb-1 tracking-tight">
                        Mridhul Narayan
                    </h3>
                    <p className="text-slate-500 font-medium">
                        Building digital experiences.
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <Link
                        href="mailto:mridhulnarayan329@gmail.com"
                        className="p-3 bg-white text-slate-600 rounded-xl transition-all shadow-sm border border-slate-100 hover:shadow-md hover:text-blue-600 active:scale-[0.98]"
                    >
                        <Mail size={18} />
                        <span className="sr-only">Email</span>
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/mridhul-narayan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white text-slate-600 rounded-xl transition-all shadow-sm border border-slate-100 hover:shadow-md hover:text-blue-600 active:scale-[0.98]"
                    >
                        <Linkedin size={18} />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link
                        href="https://github.com/mridhul977"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white text-slate-600 rounded-xl transition-all shadow-sm border border-slate-100 hover:shadow-md hover:text-slate-900 active:scale-[0.98]"
                    >
                        <Github size={18} />
                        <span className="sr-only">GitHub</span>
                    </Link>
                </div>

                <div className="flex flex-col items-center md:items-end text-slate-500 font-medium text-center md:text-right">
                    <p>
                        © {new Date().getFullYear()} Mridhul Narayan M.
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                        Engineered with Next.js & Tailwind
                    </p>
                </div>

            </div>
        </footer>
    );
}
