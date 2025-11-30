import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl animate-fade-in">
          {children}
        </main>
      </div>
      <footer className="bg-deep-brown text-parchment py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="font-display">Runtime Archives © {new Date().getFullYear()}</p>
          <p className="text-sm mt-2 opacity-80">A Personal Knowledge Repository</p>
        </div>
      </footer>
    </div>
  )
}
