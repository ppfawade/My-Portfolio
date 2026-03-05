import { motion } from 'motion/react';
import { Cpu, Code, Terminal, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Engineering",
      icon: Cpu,
      skills: [
        "Mechanical Design (CAD)",
        "Finite Element Analysis (FEA)",
        "Systems Engineering",
        "Design for Manufacturing",
        "Python for Engineering",
        "MATLAB"
      ]
    },
    {
      title: "AI & Automation",
      icon: Brain,
      skills: [
        "Prompt Engineering",
        "RAG Architecture",
        "LangChain / LlamaIndex",
        "OpenAI / Gemini APIs",
        "Workflow Automation",
        "Data Analysis"
      ]
    },
    {
      title: "Software Development",
      icon: Code,
      skills: [
        "React / Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "PostgreSQL / Supabase",
        "REST APIs"
      ]
    },
    {
      title: "Tools & DevOps",
      icon: Terminal,
      skills: [
        "Git / GitHub",
        "Vercel",
        "Docker",
        "VS Code",
        "Linux / Bash",
        "CI/CD Basics"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Skills & Expertise</h1>
        <p className="text-xl text-zinc-400 max-w-2xl">
          A hybrid skillset combining traditional engineering discipline with modern software capabilities.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-zinc-900/30 border border-white/10 rounded-3xl p-8 hover:bg-zinc-900/50 transition-colors"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-emerald-400">
                <category.icon className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">{category.title}</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {category.skills.map((skill) => (
                <div key={skill} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                  <span className="text-zinc-300">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
