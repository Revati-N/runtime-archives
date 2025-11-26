import { Link, useLocation } from 'react-router-dom';
import { Home, FileText, Tag, Clock, User, ChevronRight } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/', icon: Home, label: 'Dashboard' },
    { path: '/notes', icon: FileText, label: 'Notes Library' },
    { path: '/tags', icon: Tag, label: 'Tags' },
    { path: '/timeline', icon: Clock, label: 'Timeline' },
    { path: '/about', icon: User, label: 'About' }
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <aside className="w-64 bg-cyber-dark border-r border-cyber-blue-700 min-h-screen sticky top-[73px] hidden md:block">
      <nav className="p-6">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  flex items-center space-x-3 px-4 py-3 rounded-lg
                  transition-all duration-300 group
                  ${active 
                    ? 'bg-cyber-cyan-300/10 text-cyber-cyan-300 border border-cyber-cyan-300/50' 
                    : 'text-gray-400 hover:text-cyber-cyan-300 hover:bg-cyber-blue-900/30'
                  }
                `}
              >
                <Icon size={20} className={active ? 'animate-pulse' : ''} />
                <span className="font-medium flex-1">{item.label}</span>
                {active && (
                  <ChevronRight size={16} className="animate-pulse" />
                )}
              </Link>
            );
          })}
        </div>

        {/* System Status */}
        <div className="mt-8 p-4 bg-cyber-blue-900/30 border border-cyber-purple-300/30 rounded-lg">
          <div className="text-xs space-y-1">
            <div className="flex justify-between text-gray-500">
              <span>STATUS:</span>
              <span className="text-cyber-cyan-300 animate-pulse">● ONLINE</span>
            </div>
            <div className="flex justify-between text-gray-500">
              <span>VERSION:</span>
              <span className="text-gray-400">1.0.0</span>
            </div>
            <div className="flex justify-between text-gray-500">
              <span>UPTIME:</span>
              <span className="text-gray-400">99.9%</span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;