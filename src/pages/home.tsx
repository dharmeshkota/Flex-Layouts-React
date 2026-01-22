import { Link } from 'react-router-dom';

const modules = [
  { title: 'Twitter', path: '/twitter', category: 'Social' },
  { title: 'Gmail', path: '/gmail', category: 'Productivity' },
  { title: 'Airbnb', path: '/airbnb', category: 'Booking' },
  { title: 'Maps', path: '/map', category: 'Utility' },
  { title: 'Dashboard', path: '/dashboard', category: 'Analytics' },
  { title: 'CRM', path: '/crm', category: 'Business' },
  { title: 'Zoho', path: '/zoho', category: 'SaaS' },
  { title: 'Kanban', path: '/kanban', category: 'Productivity' },
  { title: 'Messenger', path: '/messenger', category: 'Chat' },
  { title: 'Profile', path: '/profile', category: 'User' },
  { title: 'Search', path: '/search', category: 'Utility' },
  { title: 'Video Player', path: '/video-player', category: 'Media' },
  { title: 'Amazon PDP', path: '/amazon', category: 'E-Commerce' },
  { title: 'Live Score', path: '/live-score', category: 'Data' },
  { title: 'Settings', path: '/settings', category: 'System' },
  { title: 'Form Builder', path: '/form-builder', category: 'Tool' },
];

const Home = () => {
  return (
    <div 
      className="min-h-screen w-full p-8 md:p-16 overflow-y-auto"
      style={{ backgroundColor: 'var(--color-bg-darkest)' }}
    >
      <header className="mb-12 max-w-4xl mx-auto">
        <h1 
          className="text-4xl md:text-6xl font-light tracking-tighter mb-4"
          style={{ color: 'var(--color-bg-lightest)' }}
        >
          Interface Index
        </h1>
        <p 
          className="text-lg font-light opacity-60"
          style={{ color: 'var(--color-bg-darker)' }}
        >
          A collection of modern UI layouts and component recreations.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {modules.map((mod) => (
          <Link 
            key={mod.path} 
            to={mod.path}
            className="group relative block p-6 h-40 transition-all duration-300 ease-out hover:-translate-y-1"
            style={{ 
              backgroundColor: 'rgba(255,255,255, 0.03)', 
              border: `1px solid var(--color-bg-even-darker)`
            }}
          >
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
              style={{ backgroundColor: 'var(--color-bg-light)' }}
            />

            <div className="relative z-10 flex flex-col justify-between h-full">
              <span 
                className="text-xs uppercase tracking-widest font-semibold opacity-50"
                style={{ color: 'var(--color-bg-dark)' }}
              >
                {mod.category}
              </span>
              
              <div className="flex items-end justify-between">
                <h2 
                  className="text-xl font-medium tracking-tight"
                  style={{ color: 'var(--color-bg-lightest)' }}
                >
                  {mod.title}
                </h2>
                
                <svg 
                  className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  style={{ color: 'var(--color-bg-dark)' }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;