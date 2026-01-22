import React from 'react';

interface FilterSectionProps {
  titleWidth?: string;
  children: React.ReactNode;
}

const FilterSection: React.FC<FilterSectionProps> = ({ titleWidth = 'w-20', children }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className={`h-5 ${titleWidth} bg-neutral-300 rounded`}></div>
      {children}
    </div>
  );
};

const FilterOption: React.FC = () => {
  return <div className="h-6 bg-neutral-100 rounded"></div>;
};

const PropertyCard: React.FC = () => {
  return (
    <div className="bg-neutral-100 rounded-xl overflow-hidden flex flex-col">
      <div className="h-48 bg-neutral-200"></div>
      <div className="p-4 flex flex-col gap-2">
        <div className="h-5 bg-neutral-200 rounded w-3/4"></div>
        <div className="h-4 bg-neutral-200 rounded w-1/2"></div>
        <div className="h-6 bg-neutral-300 rounded w-1/3 mt-2"></div>
      </div>
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <header className="h-16 border-b border-neutral-200 flex items-center px-6 gap-4">
      <div className="h-8 w-32 bg-neutral-900 rounded"></div>
      <div className="flex-1"></div>
      <div className="h-10 w-80 bg-neutral-100 rounded-full"></div>
      <div className="flex-1"></div>
      <div className="h-8 w-8 bg-neutral-200 rounded-full"></div>
    </header>
  );
};

const NavigationSidebar: React.FC = () => {
  return (
    <nav className="w-72 border-r border-neutral-200 p-6 flex flex-col gap-6">
      <FilterSection titleWidth="w-20">
        <div className="h-10 bg-neutral-100 rounded"></div>
      </FilterSection>

      <FilterSection titleWidth="w-24">
        <div className="h-2 bg-neutral-200 rounded-full"></div>
      </FilterSection>

      <FilterSection titleWidth="w-20">
        <div className="flex flex-col gap-2">
          <FilterOption />
          <FilterOption />
          <FilterOption />
        </div>
      </FilterSection>

      <FilterSection titleWidth="w-28">
        <div className="flex flex-col gap-2">
          <FilterOption />
          <FilterOption />
        </div>
      </FilterSection>
    </nav>
  );
};

const PostsHeader: React.FC = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="h-6 w-48 bg-neutral-200 rounded"></div>
      <div className="h-8 w-32 bg-neutral-100 rounded"></div>
    </div>
  );
};

const MainContent: React.FC = () => {
  return (
    <main className="flex-1 p-6 flex flex-col gap-4 overflow-auto">
      <PostsHeader />
      <ul className="grid grid-cols-3 gap-4 flex-1">
        <li><PropertyCard /></li>
        <li><PropertyCard /></li>
        <li><PropertyCard /></li>
        <li><PropertyCard /></li>
        <li><PropertyCard /></li>
        <li><PropertyCard /></li>
        <li><PropertyCard /></li>
        <li><PropertyCard /></li>
        <li><PropertyCard /></li>
        <li><PropertyCard /></li>
      </ul>
    </main>
  );
};

const AirbnbLayout: React.FC = () => {
  return (
    <div className="flex-1 overflow-hidden">
      <div className="flex flex-col h-full">
        <Header />
        <div className="flex flex-1">
          <NavigationSidebar />
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default AirbnbLayout;