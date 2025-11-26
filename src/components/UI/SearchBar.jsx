import { Search, X } from 'lucide-react';
import { useState } from 'react';

const SearchBar = ({ onSearch, placeholder = "Search archives..." }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <div className="relative w-full max-w-2xl">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-cyber-cyan-300">
        <Search size={20} />
      </div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="
          w-full pl-12 pr-12 py-3
          bg-cyber-blue-900/50 
          border border-cyber-cyan-300/50
          rounded-lg
          text-white placeholder-gray-500
          focus:outline-none focus:border-cyber-cyan-300
          focus:glow-cyan
          transition-all duration-300
        "
      />
      {query && (
        <button
          onClick={handleClear}
          className="
            absolute right-4 top-1/2 -translate-y-1/2 
            text-cyber-pink-300 hover:text-cyber-pink-200
            transition-colors
          "
        >
          <X size={20} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;