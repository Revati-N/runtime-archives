import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Tag } from 'lucide-react';
import CyberCard from '../components/UI/CyberCard';
import NoteList from '../components/Notes/NoteList';
import { getAllTags, getNotesByTag, notes } from '../data/notes';

const TagsView = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedTag, setSelectedTag] = useState(searchParams.get('tag') || null);

  const tags = getAllTags();
  const tagCounts = {};

  // Count notes per tag
  tags.forEach(tag => {
    tagCounts[tag] = getNotesByTag(tag).length;
  });

  const displayedNotes = selectedTag ? getNotesByTag(selectedTag) : notes;

  useEffect(() => {
    const tag = searchParams.get('tag');
    setSelectedTag(tag);
  }, [searchParams]);

  const handleTagClick = (tag) => {
    if (selectedTag === tag) {
      setSearchParams({});
      setSelectedTag(null);
    } else {
      setSearchParams({ tag });
      setSelectedTag(tag);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-cyber font-bold text-cyber-cyan-300 neon-text mb-2">
          TAGS EXPLORER
        </h1>
        <p className="text-gray-400">
          {selectedTag 
            ? `Showing ${displayedNotes.length} notes tagged with #${selectedTag}`
            : `Browse ${tags.length} tags across ${notes.length} notes`
          }
        </p>
      </div>

      {/* Tags Cloud */}
      <CyberCard glowColor="purple" className="scanline">
        <h2 className="text-2xl font-bold text-cyber-purple-300 mb-6 flex items-center space-x-2">
          <Tag size={24} />
          <span>Tag Cloud</span>
        </h2>

        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => {
            const count = tagCounts[tag];
            const isSelected = selectedTag === tag;

            return (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={`
                  px-4 py-2 rounded-lg font-medium transition-all
                  transform hover:scale-105
                  ${isSelected
                    ? 'bg-cyber-purple-300 text-cyber-dark glow-purple'
                    : 'bg-cyber-blue-900/50 text-cyber-purple-200 border border-cyber-purple-300/50 hover:border-cyber-purple-300'
                  }
                `}
              >
                #{tag}
                <span className="ml-2 text-xs opacity-70">({count})</span>
              </button>
            );
          })}
        </div>

        {selectedTag && (
          <button
            onClick={() => {
              setSearchParams({});
              setSelectedTag(null);
            }}
            className="mt-4 text-cyber-cyan-300 hover:text-cyber-cyan-200 text-sm underline"
          >
            Clear filter
          </button>
        )}
      </CyberCard>

      {/* Notes with Selected Tag */}
      <div>
        <h2 className="text-2xl font-bold text-cyber-cyan-300 mb-6">
          {selectedTag ? `Notes tagged #${selectedTag}` : 'All Notes'}
        </h2>
        <NoteList notes={displayedNotes} />
      </div>
    </div>
  );
};

export default TagsView;