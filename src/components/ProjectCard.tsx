import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  id: string;
  title: string;
  description: string;
  tech_stack: string[];
  demo_link: string;
  github_link: string;
  category: string;
  featured?: boolean;
  overview?: string;
  problem?: string;
  solution?: string;
  workflow?: string[];
  image?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col bg-zinc-900/40 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors h-full"
    >
      {/* Image Preview */}
      <div className="relative h-48 overflow-hidden bg-zinc-800">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-zinc-600">
            <span className="text-sm">No Preview</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
        
        {/* Category Badge Over Image */}
        <div className="absolute top-4 left-4">
          <span className="text-xs font-mono font-medium text-emerald-300 bg-black/60 backdrop-blur-md px-2 py-1 rounded border border-white/10">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-zinc-400 text-sm mb-6 flex-grow leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech_stack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-xs text-zinc-500 bg-white/5 px-2 py-1 rounded border border-white/5"
            >
              {tech}
            </span>
          ))}
          {project.tech_stack.length > 3 && (
            <span className="text-xs text-zinc-500 bg-white/5 px-2 py-1 rounded border border-white/5">
              +{project.tech_stack.length - 3}
            </span>
          )}
        </div>

        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
          <a
            href={project.demo_link}
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex justify-center items-center px-4 py-2 rounded-lg bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors"
          >
            Live Demo
          </a>
          <a
            href={project.github_link}
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex justify-center items-center px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-colors"
          >
            <Github className="w-4 h-4 mr-2" /> GitHub
          </a>
        </div>
        
        <div className="mt-4 text-center">
             <Link
              to={`/projects/${project.id}`}
              className="text-xs text-zinc-500 hover:text-emerald-400 transition-colors inline-flex items-center"
            >
              View Case Study <ArrowRight className="w-3 h-3 ml-1" />
            </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
