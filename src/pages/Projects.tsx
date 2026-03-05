import { motion } from 'motion/react';
import ProjectCard from '@/components/ProjectCard';
import projectsData from '@/data/projects.json';

const Projects = () => {
  return (
    <div className="min-h-screen py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Projects</h1>
        <p className="text-xl text-zinc-400 max-w-2xl">
          A collection of tools, applications, and experiments built using my AI-accelerated workflow.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
