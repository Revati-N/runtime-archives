import { Github, Linkedin, Instagram, Terminal, Zap, Database, Code } from 'lucide-react';
import CyberCard from '../components/UI/CyberCard';
import GlitchText from '../components/UI/GlitchText';

const About = () => {
  const techStack = [
    { name: 'React 18', icon: Code },
    { name: 'Vite', icon: Zap },
    { name: 'TailwindCSS', icon: Terminal },
    { name: 'React Router', icon: Database },
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center scanline py-12">
        <GlitchText className="text-5xl font-cyber font-bold text-cyber-cyan-300 neon-text">
          ABOUT
        </GlitchText>
        <p className="text-gray-400 mt-4 text-lg">
          Digital Consciousness Interface • Runtime Archives v1.0.0
        </p>
      </div>

      {/* Bio Section */}
      <CyberCard glowColor="cyan">
        <h2 className="text-2xl font-bold text-cyber-cyan-300 mb-4">Welcome to the Grid</h2>
        <div className="text-gray-300 space-y-4">
          <p>
            Runtime Archives is a <strong className="text-cyber-purple-300">cyberpunk-themed knowledge hub</strong> built 
            for organizing and accessing digital knowledge in style. This is where your thoughts, notes, and learning 
            become part of the digital consciousness.
          </p>
          <p>
            Designed with a focus on <strong className="text-cyber-cyan-300">speed, aesthetics, and functionality</strong>, 
            this hub combines modern web technologies with a retro-futuristic design language inspired by cyberpunk culture.
          </p>
          <p>
            Whether you're documenting code snippets, writing technical notes, or building your second brain, 
            Runtime Archives provides a <strong className="text-cyber-pink-300">sleek interface</strong> for your knowledge management needs.
          </p>
        </div>
      </CyberCard>

      {/* Tech Stack */}
      <CyberCard glowColor="purple">
        <h2 className="text-2xl font-bold text-cyber-purple-300 mb-6">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {techStack.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="flex flex-col items-center justify-center p-6 bg-cyber-blue-900/30 border border-cyber-purple-300/50 rounded-lg hover:border-cyber-purple-300 transition-all group"
              >
                <Icon className="text-cyber-purple-300 mb-2 group-hover:animate-pulse" size={32} />
                <span className="text-gray-300 text-sm font-semibold">{tech.name}</span>
              </div>
            );
          })}
        </div>

        <div className="mt-6 p-4 bg-cyber-blue-900/30 rounded-lg border border-cyber-cyan-300/30">
          <h3 className="text-cyber-cyan-300 font-semibold mb-2">Features:</h3>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>• Fast client-side search across all content</li>
            <li>• Markdown support with syntax highlighting</li>
            <li>• Tag-based organization system</li>
            <li>• Timeline view of your knowledge journey</li>
            <li>• Responsive cyberpunk UI with neon effects</li>
            <li>• No backend required - fully static deployment</li>
          </ul>
        </div>
      </CyberCard>

      {/* Connect Section */}
      <CyberCard glowColor="pink">
        <h2 className="text-2xl font-bold text-cyber-pink-300 mb-6">Connect</h2>
        <p className="text-gray-400 mb-6">
          Find me across the digital landscape:
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-3 bg-cyber-blue-900/50 border border-cyber-cyan-300/50 rounded-lg hover:border-cyber-cyan-300 hover:glow-cyan transition-all group"
          >
            <Github className="text-cyber-cyan-300 group-hover:animate-pulse" size={24} />
            <span className="text-gray-300">GitHub</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-3 bg-cyber-blue-900/50 border border-cyber-purple-300/50 rounded-lg hover:border-cyber-purple-300 hover:glow-purple transition-all group"
          >
            <Linkedin className="text-cyber-purple-300 group-hover:animate-pulse" size={24} />
            <span className="text-gray-300">LinkedIn</span>
          </a>
          <a
            href="https://instagram.com/runtimevibes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-3 bg-cyber-blue-900/50 border border-cyber-pink-300/50 rounded-lg hover:border-cyber-pink-300 hover:glow-pink transition-all group"
          >
            <Instagram className="text-cyber-pink-300 group-hover:animate-pulse" size={24} />
            <span className="text-gray-300">@runtimevibes</span>
          </a>
        </div>
      </CyberCard>

      {/* Footer Info */}
      <div className="text-center text-gray-500 text-sm py-8">
        <p>Runtime Archives v1.0.0 • Built with 💙 and ⚡</p>
        <p className="mt-2">© 2025 • System Status: <span className="text-cyber-cyan-300 animate-pulse">ONLINE</span></p>
      </div>
    </div>
  );
};

export default About;