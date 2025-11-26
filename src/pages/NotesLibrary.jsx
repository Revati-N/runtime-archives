import { useState } from 'react';
import SearchBar from '../components/UI/SearchBar';
import NoteList from '../components/Notes/NoteList';
import { notes, getAllCategories } from '../data/notes';
import { searchNotes } from '../utils/search';

const NotesLibrary = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...getAllCategories()];

  const filteredNotes = notes.filter(note => {
    const matchesCategory = selectedCategory === 'all' || note.category === selectedCategory;
    const matchesSearch = searchNotes([note], searchQuery).length > 0;
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-cyber font-bold text-cyber-cyan-300 neon-text mb-2">
          NOTES LIBRARY
        </h1>
        <p className="text-gray-400">
          Browse through {notes.length} archived entries
        </p>
      </div>

      {/* Search and Filters */}
      <div className="space-y-4">
        <div className="flex justify-center">
          <SearchBar 
            onSearch={setSearchQuery} 
            placeholder="Search notes, tags, content..."
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-4 py-2 rounded-lg font-medium transition-all
                ${selectedCategory === category
                  ? 'bg-cyber-cyan-300 text-cyber-dark glow-cyan'
                  : 'bg-cyber-blue-900/50 text-gray-400 hover:text-cyber-cyan-300 border border-cyber-blue-700'
                }
              `}
            >
              {category === 'all' ? 'All Categories' : category}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="text-center text-gray-500">
        Showing {filteredNotes.length} of {notes.length} notes
      </div>

      {/* Notes Grid */}
      <NoteList notes={filteredNotes} />
    </div>
  );
};

export default NotesLibrary;