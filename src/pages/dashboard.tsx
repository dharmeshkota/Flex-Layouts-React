import React from 'react';

interface NavIconProps {
  variant?: 'active' | 'default' | 'profile';
}

const NavIcon: React.FC<NavIconProps> = ({ variant = 'default' }) => {
  const bgColor = variant === 'active' ? 'bg-neutral-700' : 'bg-neutral-800';
  const shape = variant === 'profile' ? 'rounded-full' : 'rounded';
  
  return <div className={`h-10 w-10 ${bgColor} ${shape}`}></div>;
};

const InsightCard: React.FC = () => {
  return (
    <div className="h-28 bg-white rounded-xl border border-neutral-200 p-4 flex flex-col justify-between">
      <div className="h-4 w-20 bg-neutral-200 rounded"></div>
      <div className="h-8 w-24 bg-neutral-300 rounded"></div>
      <div className="h-3 w-16 bg-neutral-100 rounded"></div>
    </div>
  );
};

interface ChartTemplateProps {
  titleWidth?: string;
  children: React.ReactNode;
  className?: string;
}

const ChartTemplate: React.FC<ChartTemplateProps> = ({ 
  titleWidth = 'w-32', 
  children, 
  className = '' 
}) => {
  return (
    <div className={`bg-white rounded-xl border border-neutral-200 p-4 flex flex-col ${className}`}>
      <div className={`h-6 ${titleWidth} bg-neutral-200 rounded mb-4`}></div>
      {children}
    </div>
  );
};

const NavigationSidebar: React.FC = () => {
  return (
    <nav className="w-16 bg-neutral-900 flex flex-col items-center py-4 gap-4">
      <ul className="flex flex-col items-center gap-4">
        <li><NavIcon variant="active" /></li>
        <li><NavIcon /></li>
        <li><NavIcon /></li>
        <li><NavIcon /></li>
      </ul>
      <div className="flex-1"></div>
      <div>
        <NavIcon variant="profile" />
      </div>
    </nav>
  );
};

const Header: React.FC = () => {
  return (
    <header className="h-14 border-b border-neutral-200 flex items-center px-6 justify-between">
      <div className="h-6 w-48 bg-neutral-200 rounded"></div>
      <div className="flex gap-2">
        <div className="h-8 w-32 bg-neutral-100 rounded"></div>
        <div className="h-8 w-8 bg-neutral-100 rounded"></div>
      </div>
    </header>
  );
};

const DashboardContent: React.FC = () => {
  return (
    <section className="flex-1 p-6 flex flex-col gap-6 overflow-auto bg-neutral-50">
      <div className="grid grid-cols-4 gap-4">
        <InsightCard />
        <InsightCard />
        <InsightCard />
        <InsightCard />
      </div>

      <div className="flex gap-4 flex-1">
        <ChartTemplate titleWidth="w-32" className="flex-[2]">
          <div className="flex-1 bg-neutral-100 rounded"></div>
        </ChartTemplate>

        <ChartTemplate titleWidth="w-24" className="flex-1">
          <div className="flex-1 flex items-center justify-center">
            <div className="w-40 h-40 rounded-full border-[20px] border-neutral-200 border-t-neutral-900"></div>
          </div>
        </ChartTemplate>
      </div>

      <ChartTemplate titleWidth="w-40" className="h-64">
        <div className="flex-1 bg-neutral-100 rounded"></div>
      </ChartTemplate>
    </section>
  );
};

const DashboardLayout: React.FC = () => {
  return (
    <div className="flex-1 overflow-hidden">
      <div className="flex h-full">
        <NavigationSidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <DashboardContent />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;