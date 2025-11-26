export const notes = [
  {
    id: 1,
    title: "Welcome to Runtime Archives",
    slug: "welcome-to-runtime-archives",
    category: "Getting Started",
    tags: ["intro", "guide", "cyberpunk"],
    date: "2025-11-26",
    excerpt: "Your cyberpunk knowledge hub is now live. This is where your digital consciousness lives.",
    content: `# Welcome to Runtime Archives

Welcome to your **cyberpunk-themed knowledge hub**. This is where you store, organize, and access your digital knowledge.

## Features

- **Fast Search**: Search across all notes, tags, and categories
- **Markdown Support**: Write notes with full markdown syntax
- **Code Highlighting**: Syntax highlighting for code blocks
- **Tags & Categories**: Organize your knowledge efficiently
- **Timeline View**: Track your learning journey
- **Responsive Design**: Access from any device

## Getting Started

To add new notes, edit the \`src/data/notes.js\` file. Each note is a simple JavaScript object:

\`\`\`javascript
{
  id: 1,
  title: "Your Note Title",
  slug: "your-note-title",
  category: "Category Name",
  tags: ["tag1", "tag2"],
  date: "2025-11-26",
  excerpt: "Brief description",
  content: \`Your markdown content here\`
}
\`\`\`

## Customization

- **Colors**: Modify \`tailwind.config.js\` for color themes
- **Layout**: Components are in \`src/components/\`
- **Pages**: Main pages in \`src/pages/\`

## Code Example

Here's a Python example:

\`\`\`python
def greet(name):
    """Cyberpunk greeting function"""
    return f"Welcome to the Grid, {name}!"

# Test it
print(greet("Runner"))
\`\`\`

## What's Next?

- Explore the **Notes Library**
- Check out **Tags View** to see all topics
- View your **Timeline** of knowledge
- Read the **About** page

> "The future is already here — it's just not evenly distributed." - William Gibson

---

**STATUS**: SYSTEM ONLINE | **VERSION**: 1.0.0 | **RUNTIME**: ACTIVE
`
    }, 
  {
    id: 2,
    title: "My ML Journey Begins",
    slug: "my-ml-journey-begins",
    category: "Machine Learning",
    tags: ["ml", "python", "journey"],
    date: "2025-11-26",
    excerpt: "Starting my machine learning journey with Runtime Archives",
    content: `
# My ML Journey Begins

Today I'm starting to document my ML learning journey!

## What I'm Learning
- Deep Learning fundamentals
- NLP with transformers
- Building real projects

## First Project Idea
Create a sentiment analysis model using Twitter data.

## Code Setup
\`\`\`python
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split

# Load dataset
data = pd.read_csv('tweets.csv')
print(f"Dataset shape: {data.shape}")
\`\`\`

## Next Steps
- [ ] Collect dataset
- [ ] Preprocess data
- [ ] Build baseline model
- [ ] Experiment with transformers

Let's go! 🚀
    `
  }
];  

// Helper function to get all unique tags
export const getAllTags = () => {
  const tagSet = new Set();
  notes.forEach(note => {
    note.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
};

// Helper function to get all unique categories
export const getAllCategories = () => {
  const categorySet = new Set();
  notes.forEach(note => categorySet.add(note.category));
  return Array.from(categorySet).sort();
};

// Helper function to get note by slug
export const getNoteBySlug = (slug) => {
  return notes.find(note => note.slug === slug);
};

// Helper function to get note by id
export const getNoteById = (id) => {
  return notes.find(note => note.id === id);
};

// Helper function to get notes by tag
export const getNotesByTag = (tag) => {
  return notes.filter(note => note.tags.includes(tag));
};

// Helper function to get notes by category
export const getNotesByCategory = (category) => {
  return notes.filter(note => note.category === category);
};

// Helper function to get recent notes
export const getRecentNotes = (limit = 5) => {
  return [...notes]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
};