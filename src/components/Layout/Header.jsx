import { Link } from 'react-router-dom';
import { Terminal, Github, Linkedin, Instagram } from 'lucide-react';
import GlitchText from '../UI/GlitchText';

const Header = () => {
  return (
    <header className="bg-cyber-dark border-b border-cyber-blue-700 sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <Terminal className="text-cyber-cyan-300 group-hover:animate-pulse" size={28} />
            <div className="flex flex-col">
              <GlitchText className="text-2xl font-cyber font-bold text-cyber-cyan-300 neon-text">
                RUNTIME ARCHIVES
              </GlitchText>
              <span className="text-xs text-gray-500 font-mono">v1.0.0 | SYSTEM ACTIVE</span>
            </div>
          </Link>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/Revati-N/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyber-cyan-300 transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="http://www.linkedin.com/in/revati-natu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyber-purple-300 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://instagram.com/runtimevibes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyber-pink-300 transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;