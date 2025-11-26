import { Link } from 'react-router-dom';
import { Calendar, Tag as TagIcon, ArrowRight } from 'lucide-react';
import CyberCard from '../UI/CyberCard';

const NoteCard = ({ note }) => {
  return (
    <CyberCard glowColor="cyan" className="h-full flex flex-col">
      <div className="flex-1">
        <Link to={`/notes/${note.slug}`}>
          <h3 className="text-xl font-bold text-cyber-cyan-300 hover:text-cyber-cyan-200 transition-colors mb-2 neon-text">
            {note.title}
          </h3>
        </Link>

        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {note.excerpt}
        </p>

        <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
          <div className="flex items-center space-x-1">
            <Calendar size={14} />
            <span>{new Date(note.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center space-x-1">
            <TagIcon size={14} />
            <span>{note.category}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {note.tags.map((tag) => (
            <Link
              key={tag}
              to={`/tags?tag=${tag}`}
              className="px-2 py-1 bg-cyber-purple-300/20 border border-cyber-purple-300/50 rounded text-xs text-cyber-purple-200 hover:bg-cyber-purple-300/30 transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>

      <Link
        to={`/notes/${note.slug}`}
        className="flex items-center space-x-2 text-cyber-cyan-300 hover:text-cyber-cyan-200 transition-colors text-sm font-semibold group"
      >
        <span>Read More</span>
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </CyberCard>
  );
};

export default NoteCard;