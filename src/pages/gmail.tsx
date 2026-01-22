import React from 'react';

interface NavItemProps {
  variant?: 'primary' | 'default';
}

const NavItem: React.FC<NavItemProps> = ({ variant = 'default' }) => {
  return (
    <div className={`h-10 rounded ${variant === 'primary' ? 'bg-neutral-200' : 'bg-neutral-100'}`}></div>
  );
};

const HeaderItem: React.FC = () => {
  return <div className="h-8 w-8 bg-neutral-200 rounded"></div>;
};

const EmailPost: React.FC = () => {
  return (
    <div className="h-12 border-b border-neutral-100 flex items-center gap-3 px-2">
      <div className="w-5 h-5 bg-neutral-200 rounded"></div>
      <div className="w-5 h-5 bg-neutral-200 rounded"></div>
      <div className="w-32 h-4 bg-neutral-200 rounded"></div>
      <div className="flex-1 h-4 bg-neutral-100 rounded"></div>
      <div className="w-16 h-4 bg-neutral-100 rounded"></div>
    </div>
  );
};

const Navigation: React.FC = () => {
  return (
    <nav className="w-64 border-r border-neutral-200 flex flex-col">
      <div className="p-4">
        <div className="h-12 bg-neutral-900 rounded"></div>
      </div>
      <div className="flex-1 p-4 pt-0 flex flex-col gap-1">
        <NavItem variant="primary" />
        <NavItem />
        <NavItem />
        <NavItem />
        <div className="h-px bg-neutral-200 my-2"></div>
        <NavItem />
        <NavItem />
      </div>
    </nav>
  );
};

const Header: React.FC = () => {
  return (
    <header className="h-14 border-b border-neutral-200 flex items-center px-4 gap-2">
      <ul className="flex gap-2">
        <li><HeaderItem /></li>
        <li><HeaderItem /></li>
      </ul>
      <div className="flex-1"></div>
      <div className="h-8 w-64 bg-neutral-100 rounded"></div>
    </header>
  );
};

const MainContent: React.FC = () => {
  return (
    <main className="flex-1 flex flex-col">
      <Header />
      <section className="flex-1 p-4 flex flex-col gap-0 overflow-auto">
        <ul>
          <li><EmailPost /></li>
          <li><EmailPost /></li>
          <li><EmailPost /></li>
          <li><EmailPost /></li>
          <li><EmailPost /></li>
          <li><EmailPost /></li>
        </ul>
      </section>
    </main>
  );
};

const GmailLayout: React.FC = () => {
  return (
    <div className="flex-1 overflow-hidden">
      <div className="flex h-full">
        <Navigation />
        <MainContent />
      </div>
    </div>
  );
};

export default GmailLayout;