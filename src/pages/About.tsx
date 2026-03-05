import { motion } from 'motion/react';
import { Linkedin, Github, Mail } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Mechanical Engineer <span className="text-emerald-400">+</span> AI Builder
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl">
            Bridging the gap between physical engineering and intelligent software. 
            I build tools that solve real-world problems using AI-accelerated workflows.
          </p>
          
          <div className="flex justify-center md:justify-start gap-4 pt-4">
            <a href="https://linkedin.com/in/prashant-fawade/" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/ppfawade/" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="mailto:ppfawade@gmail.com" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="w-8 h-1 bg-emerald-500 rounded-full"></span>
              Engineering Roots
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              My foundation is in Mechanical Engineering. I understand systems, tolerances, and the physical constraints of design. This background gives me a unique advantage in building software tools for engineers—I know the pain points because I've lived them.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="w-8 h-1 bg-indigo-500 rounded-full"></span>
              The AI Catalyst
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              I leverage AI not just to write code, but to architect solutions. From RAG pipelines to generative design scripts, I use LLMs as a force multiplier to build complex, robust applications that would typically require a team of developers.
            </p>
          </div>
        </div>

        <div className="bg-zinc-900/30 border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
          
          <h2 className="text-2xl font-bold text-white mb-6 relative z-10">My Mission</h2>
          <blockquote className="text-xl md:text-2xl font-light text-zinc-300 italic border-l-4 border-emerald-500 pl-6 my-6 relative z-10">
            "To democratize engineering tools by combining domain expertise with modern web technologies and AI."
          </blockquote>
          <p className="text-zinc-400 relative z-10">
            Whether it's a tolerance stack-up calculator or a civic-tech platform for road safety, I build with purpose. I am constantly exploring new technologies like Next.js, Supabase, and Vector Databases to push the boundaries of what a single engineer can create.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
