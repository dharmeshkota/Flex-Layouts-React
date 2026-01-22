import React from 'react';

interface NavItemProps {
  width?: string;
}

interface TabButtonProps {
  isActive?: boolean;
}

interface TableRowProps {
  isHeader?: boolean;
}

interface SidebarWidgetProps {
  index?: number;
}

const TopNav: React.FC = () => {
  return (
    <div className="h-14 bg-neutral-900 flex items-center px-6 gap-4">
      <div className="h-6 w-24 bg-neutral-700 rounded"></div>
      <div className="flex gap-4">
        <div className="h-6 w-16 bg-neutral-800 rounded"></div>
        <div className="h-6 w-16 bg-neutral-800 rounded"></div>
        <div className="h-6 w-16 bg-neutral-800 rounded"></div>
        <div className="h-6 w-16 bg-neutral-800 rounded"></div>
        <div className="h-6 w-16 bg-neutral-800 rounded"></div>
      </div>
      <div className="flex-1"></div>
      <div className="h-8 w-8 bg-neutral-700 rounded"></div>
    </div>
  );
};

const TeamGroup: React.FC<{ alignEnd?: boolean }> = ({ alignEnd = false }) => {
  if (alignEnd) {
    return (
      <div className="flex items-center gap-4">
        <div className="flex flex-col gap-1 items-end">
          <div className="h-5 w-20 bg-neutral-600 rounded"></div>
          <div className="h-8 w-32 bg-neutral-500 rounded"></div>
        </div>
        <div className="h-12 w-12 bg-neutral-600 rounded"></div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <div className="h-12 w-12 bg-neutral-600 rounded"></div>
      <div className="flex flex-col gap-1">
        <div className="h-5 w-20 bg-neutral-600 rounded"></div>
        <div className="h-8 w-32 bg-neutral-500 rounded"></div>
      </div>
    </div>
  );
};

const MatchCenter: React.FC = () => {
  return (
    <div className="text-center">
      <div className="h-4 w-16 bg-neutral-600 rounded mx-auto mb-2"></div>
      <div className="h-6 w-24 bg-red-500/30 rounded"></div>
    </div>
  );
};

const MatchBanner: React.FC = () => {
  return (
    <div className="bg-neutral-800 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between text-white">
          <TeamGroup />
          <MatchCenter />
          <TeamGroup alignEnd={true} />
        </div>
        <div className="h-5 w-72 bg-neutral-700 rounded mx-auto mt-4"></div>
      </div>
    </div>
  );
};

const TabButton: React.FC<TabButtonProps> = ({ isActive = false }) => {
  return (
    <div className={`h-8 w-24 ${isActive ? 'bg-neutral-900' : 'bg-neutral-100'} rounded`}></div>
  );
};

const TabNav: React.FC = () => {
  return (
    <div className="flex gap-2 border-b border-neutral-200 pb-2">
      <TabButton isActive={true} />
      <TabButton />
      <TabButton />
      <TabButton />
    </div>
  );
};

const TableRow: React.FC<TableRowProps> = ({ isHeader = false }) => {
  const bgClass = isHeader ? 'bg-neutral-300' : 'bg-neutral-200';
  const cellBgClass = isHeader ? 'bg-neutral-300' : 'bg-neutral-100';
  const containerClass = isHeader 
    ? 'h-10 bg-neutral-100 flex items-center px-4' 
    : 'h-12 flex items-center px-4 border-t border-neutral-100';

  return (
    <div className={containerClass}>
      <div className={`w-48 h-4 ${bgClass} rounded`}></div>
      <div className="flex-1"></div>
      <div className={`w-12 h-4 ${cellBgClass} rounded`}></div>
      <div className={`w-12 h-4 ${cellBgClass} rounded ml-4`}></div>
      <div className={`w-12 h-4 ${cellBgClass} rounded ml-4`}></div>
      <div className={`w-12 h-4 ${cellBgClass} rounded ml-4`}></div>
    </div>
  );
};

const ScoreTable: React.FC = () => {
  return (
    <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden">
      <TableRow isHeader={true} />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
    </div>
  );
};

const SidebarWidget: React.FC<SidebarWidgetProps> = () => {
  return (
    <div className="p-3 bg-neutral-100 rounded-lg">
      <div className="flex items-center gap-2 mb-2">
        <div className="h-5 w-12 bg-neutral-300 rounded"></div>
        <div className="h-4 w-4 bg-neutral-200 rounded"></div>
      </div>
      <div className="h-4 w-full bg-neutral-200 rounded"></div>
    </div>
  );
};

const MainContent: React.FC = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4">
      <TabNav />
      <ScoreTable />
    </div>
  );
};

const Sidebar: React.FC = () => {
  return (
    <div className="w-80 border-l border-neutral-200 p-4 flex flex-col gap-4">
      <div className="h-6 w-24 bg-neutral-200 rounded"></div>
      <SidebarWidget />
      <SidebarWidget />
      <SidebarWidget />
      <SidebarWidget />
    </div>
  );
};

const LiveScoreLayout: React.FC = () => {
  return (
    <div className="flex-1 overflow-hidden">
      <div className="flex flex-col h-full">
        <TopNav />
        <MatchBanner />
        <div className="flex-1 flex overflow-auto">
          <MainContent />
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default LiveScoreLayout;