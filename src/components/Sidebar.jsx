import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { loadAllNotes } from '../utils/noteLoader'
import { getAllTags } from '../utils/searchEngine'

export default function Sidebar() {
  const location = useLocation()
  const [recentNotes, setRecentNotes] = useState([])
  const [topTags, setTopTags] = useState([])
  const [folders, setFolders] = useState([])

  useEffect(() => {
    loadAllNotes().then(notes => {
      setRecentNotes(notes.slice(0, 5))
      setTopTags(getAllTags(notes).slice(0, 8))
      const uniqueFolders = [...new Set(notes.map(n => n.folder))]
      setFolders(uniqueFolders)
    })
  }, [])

  const navLinks = [
    { path: '/', label: '🏛️ Home', icon: '🏛️' },
    { path: '/notes', label: '📚 Library', icon: '📚' },
    { path: '/tags', label: '🏷️ Tags', icon: '🏷️' },
    { path: '/about', label: '📜 About', icon: '📜' },
  ]

  return (
    <aside className="w-64 bg-sepia/30 border-r-2 border-bronze/20 p-6 overflow-y-auto sticky top-0 h-screen hidden lg:block">
      {/* Logo */}
      <Link to="/" className="block mb-8">
        <h2 className="text-xl font-display font-bold text-bronze text-center">
          ⚜ Runtime Archives
        </h2>
      </Link>

      {/* Navigation */}
      <nav className="mb-8">
        <h3 className="text-sm font-display font-semibold text-bronze/70 mb-3 uppercase tracking-wider">
          Navigation
        </h3>
        <ul className="space-y-2">
          {navLinks.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`block px-4 py-2 rounded transition-colors ${
                  location.pathname === link.path
                    ? 'bg-bronze text-parchment font-semibold'
                    : 'text-deep-brown hover:bg-bronze/10'
                }`}
              >
                <span className="mr-2">{link.icon}</span>
                {link.label.replace(/[🏛️📚🏷️📜]\s/, '')}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Categories */}
      <div className="mb-8">
        <h3 className="text-sm font-display font-semibold text-bronze/70 mb-3 uppercase tracking-wider">
          Categories
        </h3>
        <ul className="space-y-1">
          {folders.map(folder => (
            <li key={folder}>
              <Link
                to={`/notes?folder=${folder}`}
                className="block px-3 py-1 text-sm text-leather hover:text-bronze hover:bg-bronze/5 rounded transition-colors"
              >
                📁 {folder.replace(/-/g, ' ')}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Notes */}
      <div className="mb-8">
        <h3 className="text-sm font-display font-semibold text-bronze/70 mb-3 uppercase tracking-wider">
          Recent Notes
        </h3>
        <ul className="space-y-2">
          {recentNotes.map(note => (
            <li key={`${note.folder}-${note.slug}`}>
              <Link
                to={`/notes/${note.folder}/${note.slug}`}
                className="block text-sm text-leather hover:text-bronze transition-colors line-clamp-2"
              >
                {note.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Tags */}
      <div>
        <h3 className="text-sm font-display font-semibold text-bronze/70 mb-3 uppercase tracking-wider">
          Popular Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {topTags.map(({ tag }) => (
            <Link
              key={tag}
              to={`/tags?tag=${tag}`}
              className="text-xs px-2 py-1 bg-bronze/10 text-bronze rounded hover:bg-bronze hover:text-parchment transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
}
