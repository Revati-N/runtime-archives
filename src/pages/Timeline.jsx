import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import CyberCard from '../components/UI/CyberCard';
import { notes } from '../data/notes';

const Timeline = () => {
  // Sort notes by date (newest first)
  const sortedNotes = [...notes].sort((a, b) => new Date(b.date) - new Date(a.date));

  // Group by year and month
  const groupedNotes = sortedNotes.reduce((acc, note) => {
    const date = new Date(note.date);
    const year = date.getFullYear();
    const month = date.toLocaleDateString('en-US', { month: 'long' });
    const key = `${year}-${month}`;

    if (!acc[key]) {
      acc[key] = { year, month, notes: [] };
    }
    acc[key].notes.push(note);
    return acc;
  }, {});

  const timelineGroups = Object.values(groupedNotes);

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-cyber font-bold text-cyber-cyan-300 neon-text mb-2">
          TIMELINE
        </h1>
        <p className="text-gray-400">
          Your knowledge journey through time
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-cyan-300 via-cyber-purple-300 to-cyber-pink-300"></div>

        <div className="space-y-12">
          {timelineGroups.map((group, groupIndex) => (
            <div key={`${group.year}-${group.month}`} className="relative">
              {/* Date Marker */}
              <div className="flex items-center mb-6">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-cyber-dark border-4 border-cyber-cyan-300 rounded-full glow-cyan">
                  <Calendar className="text-cyber-cyan-300" size={24} />
                </div>
                <div className="ml-6">
                  <h2 className="text-2xl font-bold text-cyber-cyan-300">{group.month}</h2>
                  <p className="text-gray-500">{group.year}</p>
                </div>
              </div>

              {/* Notes for this period */}
              <div className="ml-24 space-y-4">
                {group.notes.map((note, noteIndex) => (
                  <CyberCard key={note.id} glowColor={noteIndex % 3 === 0 ? 'cyan' : noteIndex % 3 === 1 ? 'purple' : 'pink'}>
                    <Link to={`/notes/${note.slug}`} className="block group">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-cyber-cyan-300 group-hover:text-cyber-cyan-200 transition-colors mb-2">
                            {note.title}
                          </h3>
                          <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                            {note.excerpt}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-cyber-purple-300/20 border border-cyber-purple-300/50 rounded text-xs text-cyber-purple-200">
                              {note.category}
                            </span>
                            {note.tags.slice(0, 3).map(tag => (
                              <span key={tag} className="px-2 py-1 bg-cyber-blue-900/50 border border-cyber-blue-700 rounded text-xs text-gray-400">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <ArrowRight className="text-cyber-cyan-300 group-hover:translate-x-1 transition-transform mt-1 ml-4" size={20} />
                      </div>
                    </Link>
                  </CyberCard>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;