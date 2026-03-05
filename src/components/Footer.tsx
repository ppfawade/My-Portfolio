import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-xl font-bold text-white tracking-tight mb-4 block">
              Prashant Fawade
            </Link>
            <p className="text-zinc-400 max-w-sm mb-6">
              Mechanical Engineer turned AI-Assisted Product Builder. 
              Bridging the gap between physical engineering and modern software.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/ppfawade/" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/prashant-fawade/" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:ppfawade@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Sitemap</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-zinc-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/projects" className="text-zinc-400 hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/about" className="text-zinc-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/blog" className="text-zinc-400 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:ppfawade@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
                  ppfawade@gmail.com
                </a>
              </li>
              <li className="text-zinc-500 text-sm mt-4">
                &copy; {new Date().getFullYear()} Prashant Fawade. <br />All rights reserved.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
