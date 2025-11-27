import { Link } from 'react-router-dom';
import { FileText, Tag, FolderOpen, TrendingUp } from 'lucide-react';
import GlitchText from '../components/UI/GlitchText';
import StatsWidget from '../components/Dashboard/StatsWidget';
import RecentActivity from '../components/Dashboard/RecentActivity';
import CyberButton from '../components/UI/CyberButton';
import { notes, getAllTags, getAllCategories } from '../data/index';

const Home = () => {
  const recentNotes = [...notes]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-12 scanline">
        <GlitchText className="text-5xl md:text-6xl font-cyber font-bold text-cyber-cyan-300 neon-text">
          RUNTIME ARCHIVES
        </GlitchText>
        <p className="text-gray-400 mt-4 text-lg">
          Your Cyberpunk Knowledge Hub | Digital Consciousness Interface
        </p>
        <div className="flex justify-center space-x-4 mt-6">
          <Link to="/notes">
            <CyberButton variant="primary">
              Browse Archives
            </CyberButton>
          </Link>
          <Link to="/timeline">
            <CyberButton variant="outline">
              View Timeline
            </CyberButton>
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsWidget
          icon={FileText}
          label="Total Notes"
          value={notes.length}
          color="cyan"
        />
        <StatsWidget
          icon={Tag}
          label="Total Tags"
          value={getAllTags().length}
          color="purple"
        />
        <StatsWidget
          icon={FolderOpen}
          label="Categories"
          value={getAllCategories().length}
          color="pink"
        />
        <StatsWidget
          icon={TrendingUp}
          label="Activity"
          value="High"
          color="cyan"
        />
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentActivity notes={recentNotes} />
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <div className="bg-cyber-dark border border-cyber-cyan-300/50 rounded-lg p-6">
            <h3 className="text-cyber-cyan-300 font-bold mb-4 text-lg">Quick Access</h3>
            <div className="space-y-2">
              <Link 
                to="/notes" 
                className="block p-3 bg-cyber-blue-900/30 rounded hover:bg-cyber-cyan-300/10 transition-colors text-gray-300 hover:text-cyber-cyan-300"
              >
                📚 Notes Library
              </Link>
              <Link 
                to="/tags" 
                className="block p-3 bg-cyber-blue-900/30 rounded hover:bg-cyber-purple-300/10 transition-colors text-gray-300 hover:text-cyber-purple-300"
              >
                🏷️ Tags Explorer
              </Link>
              <Link 
                to="/timeline" 
                className="block p-3 bg-cyber-blue-900/30 rounded hover:bg-cyber-pink-300/10 transition-colors text-gray-300 hover:text-cyber-pink-300"
              >
                ⏰ Timeline View
              </Link>
              <Link 
                to="/about" 
                className="block p-3 bg-cyber-blue-900/30 rounded hover:bg-cyber-cyan-300/10 transition-colors text-gray-300 hover:text-cyber-cyan-300"
              >
                👤 About
              </Link>
            </div>
          </div>

          {/* System Info */}
          <div className="bg-cyber-dark border border-cyber-purple-300/50 rounded-lg p-6">
            <h3 className="text-cyber-purple-300 font-bold mb-4 text-lg">System Status</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Status:</span>
                <span className="text-cyber-cyan-300 animate-pulse">● ONLINE</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Version:</span>
                <span className="text-gray-400">1.0.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Last Updated:</span>
                <span className="text-gray-400">{new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Runtime:</span>
                <span className="text-cyber-cyan-300">ACTIVE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;