import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Tag, ArrowLeft, FolderOpen } from 'lucide-react';
import MarkdownRenderer from '../components/Notes/MarkdownRenderer';
import CyberCard from '../components/UI/CyberCard';
import CyberButton from '../components/UI/CyberButton';
import { getNoteBySlug } from '../data/notes';

const NoteView = () => {
  const { slug } = useParams();
  const note = getNoteBySlug(slug);

  if (!note) {
    return <Navigate to="/notes" replace />;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Back Button */}
      <Link to="/notes">
        <CyberButton variant="ghost" className="flex items-center space-x-2">
          <ArrowLeft size={20} />
          <span>Back to Library</span>
        </CyberButton>
      </Link>

      {/* Note Header */}
      <CyberCard glowColor="cyan" className="scanline">
        <h1 className="text-4xl font-cyber font-bold text-cyber-cyan-300 neon-text mb-4">
          {note.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
          <div className="flex items-center space-x-2">
            <Calendar size={16} className="text-cyber-cyan-300" />
            <span>{new Date(note.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>

          <div className="flex items-center space-x-2">
            <FolderOpen size={16} className="text-cyber-purple-300" />
            <span>{note.category}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {note.tags.map((tag) => (
            <Link
              key={tag}
              to={`/tags?tag=${tag}`}
              className="flex items-center space-x-1 px-3 py-1 bg-cyber-purple-300/20 border border-cyber-purple-300/50 rounded-full text-sm text-cyber-purple-200 hover:bg-cyber-purple-300/30 transition-colors"
            >
              <Tag size={14} />
              <span>#{tag}</span>
            </Link>
          ))}
        </div>
      </CyberCard>

      {/* Note Content */}
      <CyberCard glowColor="purple" className="prose prose-invert max-w-none">
        <MarkdownRenderer content={note.content} />
      </CyberCard>
    </div>
  );
};

export default NoteView;