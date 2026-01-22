import React from 'react';

interface NavItemProps {
  variant?: 'primary' | 'default';
}

const NavItem: React.FC<NavItemProps> = ({ variant = 'default' }) => {
  return (
    <div className={`h-10 rounded ${variant === 'primary' ? 'bg-neutral-200' : 'bg-neutral-100'}`}></div>
  );
};

interface PostProps {
  height?: 'sm' | 'md' | 'lg';
}

const Post: React.FC<PostProps> = ({ height = 'md' }) => {
  const heightClasses = {
    sm: 'h-40',
    md: 'h-56',
    lg: 'h-64'
  };

  return (
    <div className={`${heightClasses[height]} bg-neutral-100 rounded border border-neutral-200`}></div>
  );
};

interface TrendingItemProps {
  height?: 'sm' | 'md' | 'lg';
}

const TrendingItem: React.FC<TrendingItemProps> = ({ height = 'sm' }) => {
  const heightClasses = {
    sm: 'h-48',
    md: 'h-56',
    lg: 'h-64'
  };

  return (
    <div className={`${heightClasses[height]} bg-neutral-100 rounded-xl`}></div>
  );
};

const Navigation: React.FC = () => {
  return (
    <nav className="w-64 border-r border-neutral-200 p-4 flex flex-col gap-2">
      <ul className="flex flex-col gap-2">
        <li><NavItem variant="primary" /></li>
        <li><NavItem /></li>
        <li><NavItem /></li>
        <li><NavItem /></li>
      </ul>
      <div className="flex-1"></div>
      <div className="h-12 bg-neutral-900 rounded"></div>
    </nav>
  );
};

const MainContent: React.FC = () => {
  return (
    <main className="flex-1 border-r border-neutral-200 flex flex-col">
      <header className="h-14 border-b border-neutral-200"></header>
      <section className="flex-1 p-4 flex flex-col gap-4 overflow-auto">
        <ul className="flex flex-col gap-4">
          <li><Post height="sm" /></li>
          <li><Post height="md" /></li>
          <li><Post height="sm" /></li>
        </ul>
      </section>
    </main>
  );
};

const Aside: React.FC = () => {
  return (
    <aside className="w-80 p-4 flex flex-col gap-4">
      <div className="h-10 bg-neutral-100 rounded-full"></div>
      <ul className="flex flex-col gap-4">
        <li><TrendingItem height="sm" /></li>
        <li><TrendingItem height="lg" /></li>
      </ul>
    </aside>
  );
};

const TwitterLayout: React.FC = () => {
  return (
    <div className="flex-1 overflow-hidden">
      <div className="flex h-full">
        <Navigation />
        <MainContent />
        <Aside />
      </div>
    </div>
  );
};

export default TwitterLayout;