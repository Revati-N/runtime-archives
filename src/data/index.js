// Import all individual notes
import detect_forgery from './notes/forgery-detection-inpainting.js';
import multicancer from './notes/multi-cancer-classification.js';
import depressionClassification from './notes/depression-classification.js';

// Combine all notes into one array
export const notes = [
  detect_forgery,
  multicancer,
  depressionClassification,
];

// Helper functions
export const getAllTags = () => {
  const tagSet = new Set();
  notes.forEach(note => {
    note.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
};

export const getAllCategories = () => {
  const categorySet = new Set();
  notes.forEach(note => categorySet.add(note.category));
  return Array.from(categorySet).sort();
};

export const getNoteBySlug = (slug) => {
  return notes.find(note => note.slug === slug);
};

export const getNoteById = (id) => {
  return notes.find(note => note.id === id);
};

export const getNotesByTag = (tag) => {
  return notes.filter(note => note.tags.includes(tag));
};

export const getNotesByCategory = (category) => {
  return notes.filter(note => note.category === category);
};

export const getRecentNotes = (limit = 5) => {
  return [...notes]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
};
