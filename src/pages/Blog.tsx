import { motion } from 'motion/react';
import { Calendar, ArrowRight, ExternalLink } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "From Brazil to Bharat: Unpacking Pix and UPI",
      excerpt: "A deep dive into the world's digital payment powerhouses, comparing Brazil's Pix and India's UPI systems and their impact on the global fintech landscape.",
      date: "Feb 26, 2026",
      readTime: "8 min read",
      tags: ["Fintech", "Case Study"],
      link: "https://ppfawade.blogspot.com/2026/02/from-brazil-to-bharat-unpacking-pix-and.html"
    },
    {
      id: 2,
      title: "Tolerance Stack-Up Analysis Tool",
      excerpt: "Introducing a new web-based tool for mechanical engineers to perform tolerance stack-up analysis efficiently, replacing manual spreadsheet calculations.",
      date: "Feb 25, 2026",
      readTime: "5 min read",
      tags: ["Engineering", "Tools"],
      link: "https://ppfawade.blogspot.com/2026/02/tolerance-stack-up-analysis-tool.html"
    },
    {
      id: 3,
      title: "The Ultimate AI Tools Directory (Feb 2026)",
      excerpt: "A curated list of the most impactful AI tools for developers and engineers in early 2026, categorized by utility and workflow integration.",
      date: "Feb 25, 2026",
      readTime: "10 min read",
      tags: ["AI", "Resources"],
      link: "https://ppfawade.blogspot.com/2026/02/the-ultimate-ai-tools-directory.html"
    },
    {
      id: 4,
      title: "Tolerance Stack Up 📏🔬",
      excerpt: "Exploring the fundamental concepts of tolerance stack-up analysis and why visualization is key to understanding dimensional variation in assemblies.",
      date: "Feb 23, 2026",
      readTime: "6 min read",
      tags: ["Engineering", "Education"],
      link: "https://ppfawade.blogspot.com/2026/02/tolerance-stack-up.html"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Blog</h1>
        <p className="text-xl text-zinc-400">
          Thoughts on engineering, software, and the AI revolution.
        </p>
      </motion.div>

      <div className="space-y-8">
        {posts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group p-8 rounded-3xl bg-zinc-900/30 border border-white/10 hover:border-white/20 hover:bg-zinc-900/50 transition-all cursor-pointer relative"
          >
            <a href={post.link} target="_blank" rel="noreferrer" className="absolute inset-0 z-0" aria-label={`Read ${post.title}`} />
            
            <div className="relative z-10 pointer-events-none">
              <div className="flex items-center gap-4 text-sm text-zinc-500 mb-4">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                {post.title}
              </h2>
              
              <p className="text-zinc-400 mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-2 py-1 rounded bg-white/5 text-zinc-400 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-sm font-medium text-white flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Article <ExternalLink className="w-4 h-4" />
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
