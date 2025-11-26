import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import CyberCard from '../UI/CyberCard';

const RecentActivity = ({ notes }) => {
  return (
    <CyberCard glowColor="purple">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-cyber-purple-300 flex items-center space-x-2">
          <Clock size={24} />
          <span>Recent Activity</span>
        </h2>
      </div>

      <div className="space-y-3">
        {notes.map((note) => (
          <Link
            key={note.id}
            to={`/notes/${note.slug}`}
            className="block p-3 bg-cyber-blue-900/30 rounded border border-cyber-purple-300/30 hover:border-cyber-purple-300 transition-all group"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-cyber-cyan-300 font-semibold group-hover:text-cyber-cyan-200 transition-colors">
                  {note.title}
                </h3>
                <p className="text-gray-500 text-xs mt-1">
                  {new Date(note.date).toLocaleDateString()} • {note.category}
                </p>
              </div>
              <ArrowRight 
                size={16} 
                className="text-cyber-purple-300 group-hover:translate-x-1 transition-transform mt-1" 
              />
            </div>
          </Link>
        ))}
      </div>
    </CyberCard>
  );
};

export default RecentActivity;