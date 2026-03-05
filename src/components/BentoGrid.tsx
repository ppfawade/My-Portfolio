import { motion } from 'motion/react';
import { ArrowRight, Bot, Code2, Wrench, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const BentoGrid = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
        
        {/* Card 1: Main Highlight - AI Workflow */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="md:col-span-2 row-span-2 rounded-3xl bg-zinc-900/50 border border-white/10 p-8 flex flex-col justify-between overflow-hidden relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div>
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-6 text-indigo-400">
              <Bot className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">AI-Accelerated Workflow</h3>
            <p className="text-zinc-400 max-w-md">
              I don't just write code; I orchestrate AI agents to build robust applications. 
              From prompt engineering to automated testing, I leverage LLMs to multiply productivity.
            </p>
          </div>
          
          <div className="mt-8 flex items-center gap-2 text-sm text-zinc-500 font-mono">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Idea</span>
            <ArrowRight className="w-4 h-4" />
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Prompt</span>
            <ArrowRight className="w-4 h-4" />
            <span className="px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300">Product</span>
          </div>
        </motion.div>

        {/* Card 2: Engineering Roots */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-3xl bg-zinc-900/50 border border-white/10 p-6 flex flex-col justify-between group"
        >
          <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4 text-emerald-400">
            <Wrench className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Engineering First</h3>
            <p className="text-zinc-400 text-sm">
              Mechanical engineering background brings systems thinking to software architecture.
            </p>
          </div>
        </motion.div>

        {/* Card 3: Modern Stack */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-3xl bg-zinc-900/50 border border-white/10 p-6 flex flex-col justify-between group"
        >
          <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4 text-blue-400">
            <Code2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Modern Stack</h3>
            <p className="text-zinc-400 text-sm">
              React, TypeScript, Tailwind, and Python. Building for the future web.
            </p>
          </div>
        </motion.div>

        {/* Card 4: Projects CTA */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="md:col-span-3 rounded-3xl bg-zinc-100 text-black p-8 flex items-center justify-between group cursor-pointer"
        >
          <Link to="/projects" className="flex items-center justify-between w-full">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center text-black">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">Explore Projects</h3>
                <p className="text-zinc-600">Check out the tools and apps I've built.</p>
              </div>
            </div>
            <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default BentoGrid;
