import HeroSection from '@/components/HeroSection';
import BentoGrid from '@/components/BentoGrid';
import WorkflowDiagram from '@/components/WorkflowDiagram';
import ContactCTA from '@/components/ContactCTA';
import ProjectCard from '@/components/ProjectCard';
import projectsData from '@/data/projects.json';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredProjects = projectsData.filter(p => p.featured).slice(0, 3);

  return (
    <div className="space-y-0">
      <HeroSection />
      
      <BentoGrid />
      
      <WorkflowDiagram />

      {/* Featured Projects Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-zinc-400">Selected works showcasing AI & Engineering integration.</p>
          </div>
          <Link 
            to="/projects" 
            className="hidden md:flex items-center text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            View all projects <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link 
            to="/projects" 
            className="inline-flex items-center text-sm font-medium text-white border-b border-white pb-1"
          >
            View all projects <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="py-24 px-6 bg-zinc-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Technical Arsenal</h2>
            <p className="text-zinc-400">Tools I use to bring ideas to life.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { category: "Engineering", items: ["CAD Design", "Simulation", "Systems Thinking"] },
              { category: "AI Tools", items: ["Prompt Engineering", "RAG", "LangChain"] },
              { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
              { category: "Backend", items: ["Python", "Node.js", "Supabase"] }
            ].map((skillSet, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-black/40 border border-white/5"
              >
                <h3 className="text-emerald-400 font-mono text-sm mb-4 uppercase tracking-wider">{skillSet.category}</h3>
                <ul className="space-y-2">
                  {skillSet.items.map(item => (
                    <li key={item} className="text-zinc-300 font-medium">{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/skills" 
              className="inline-flex items-center px-6 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white hover:bg-white/10 transition-colors"
            >
              View Full Skill Matrix
            </Link>
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
};

export default Home;
