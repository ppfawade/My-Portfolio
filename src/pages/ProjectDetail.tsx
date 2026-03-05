import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Github, ExternalLink, CheckCircle2 } from 'lucide-react';
import projectsData from '@/data/projects.json';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-3xl font-bold text-white mb-4">Project Not Found</h1>
        <Link to="/projects" className="text-emerald-400 hover:underline">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/projects"
          className="inline-flex items-center text-sm text-zinc-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <span className="text-emerald-400 font-mono text-sm mb-2 block">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {project.title}
              </h1>
            </div>
            <div className="flex gap-4">
              <a
                href={project.github_link}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <Github className="w-4 h-4" /> Code
              </a>
              <a
                href={project.demo_link}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" /> Demo
              </a>
            </div>
          </div>

          <p className="text-xl text-zinc-300 leading-relaxed mb-12 border-l-4 border-emerald-500/50 pl-6">
            {project.overview}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">The Problem</h2>
                <p className="text-zinc-400 leading-relaxed">{project.problem}</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">The Solution</h2>
                <p className="text-zinc-400 leading-relaxed">{project.solution}</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Development Workflow</h2>
                <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6">
                  <ul className="space-y-4">
                    {project.workflow.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                        <span className="text-zinc-300">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-zinc-900/30 border border-white/10 rounded-2xl p-6">
                <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech_stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm text-zinc-300 bg-white/5 rounded-md border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
