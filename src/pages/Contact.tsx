import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "ppfawade@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen py-20 px-6 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get in Touch</h1>
          <p className="text-xl text-zinc-400">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="bg-zinc-900/30 border border-white/10 rounded-3xl p-8 md:p-12 space-y-8">
          
          {/* Email Copy Section */}
          <div className="bg-black/50 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/5">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-white font-mono text-lg">{email}</span>
            </div>
            <button
              onClick={copyEmail}
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors flex items-center gap-2"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied!' : 'Copy Email'}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://github.com/ppfawade/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 p-4 rounded-xl bg-zinc-900 border border-white/10 hover:bg-zinc-800 hover:border-white/20 transition-all group"
            >
              <Github className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
              <span className="text-zinc-300 group-hover:text-white font-medium">GitHub Profile</span>
            </a>
            <a
              href="https://linkedin.com/in/prashant-fawade/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 p-4 rounded-xl bg-zinc-900 border border-white/10 hover:bg-zinc-800 hover:border-white/20 transition-all group"
            >
              <Linkedin className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
              <span className="text-zinc-300 group-hover:text-white font-medium">LinkedIn Profile</span>
            </a>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
