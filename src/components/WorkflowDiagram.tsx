import { motion } from 'motion/react';
import { Lightbulb, MessageSquare, Code, Github, Cloud } from 'lucide-react';

const WorkflowDiagram = () => {
  const steps = [
    { icon: Lightbulb, label: 'Idea', desc: 'Identify problem' },
    { icon: MessageSquare, label: 'Prompting', desc: 'Refine requirements' },
    { icon: Code, label: 'AI Studio', desc: 'Generate code' },
    { icon: Github, label: 'GitHub', desc: 'Version control' },
    { icon: Cloud, label: 'Vercel', desc: 'Deploy' },
  ];

  return (
    <section className="py-20 px-6 border-y border-white/5 bg-zinc-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">AI-Assisted Workflow</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            My development process leverages AI to accelerate the path from concept to production.
          </p>
        </div>

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500/20 via-emerald-500/20 to-indigo-500/20 -translate-y-1/2 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center mb-4 group-hover:border-emerald-500/50 group-hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.3)] transition-all duration-300">
                <step.icon className="w-8 h-8 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{step.label}</h3>
              <p className="text-xs text-zinc-500 uppercase tracking-wider">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowDiagram;
