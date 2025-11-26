export const searchNotes = (notes, query) => {
  if (!query || query.trim() === '') {
    return notes;
  }

  const searchTerm = query.toLowerCase().trim();

  return notes.filter(note => {
    // Search in title
    const titleMatch = note.title.toLowerCase().includes(searchTerm);

    // Search in content
    const contentMatch = note.content.toLowerCase().includes(searchTerm);

    // Search in excerpt
    const excerptMatch = note.excerpt.toLowerCase().includes(searchTerm);

    // Search in tags
    const tagsMatch = note.tags.some(tag => 
      tag.toLowerCase().includes(searchTerm)
    );

    // Search in category
    const categoryMatch = note.category.toLowerCase().includes(searchTerm);

    return titleMatch || contentMatch || excerptMatch || tagsMatch || categoryMatch;
  });
};

export const highlightText = (text, query) => {
  if (!query || query.trim() === '') {
    return text;
  }

  const regex = new RegExp(`(${query})`, 'gi');
  return text.replace(regex, '<mark class="bg-cyber-cyan-300 text-cyber-dark">$1</mark>');
};
