import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactCTA = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-r from-zinc-900 to-zinc-800 border border-white/10 p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">
            Ready to build something amazing?
          </h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto relative z-10">
            Whether you need a mechanical engineer with software skills or a developer with an engineering mindset, I'm ready to help.
          </p>
          
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://github.com/ppfawade/"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 rounded-full bg-black/50 border border-white/10 text-white font-medium hover:bg-black/70 transition-colors"
            >
              View GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
