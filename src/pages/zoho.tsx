import React from 'react';

const NavButton: React.FC = () => {
  return <div className="h-7 w-28 bg-neutral-100 rounded-full"></div>;
};

interface SubNavItemProps {
  width?: string;
}

const SubNavItem: React.FC<SubNavItemProps> = ({ width = 'w-12' }) => {
  return <div className={`${width} h-5 bg-neutral-200 rounded`}></div>;
};

interface TableCellProps {
  width: string;
  variant?: 'primary' | 'default';
}

const TableCell: React.FC<TableCellProps> = ({ width, variant = 'default' }) => {
  return (
    <div className={`${width} h-5 rounded ml-4 ${variant === 'primary' ? 'bg-neutral-200' : 'bg-neutral-100'}`}></div>
  );
};

const ActionButton: React.FC = () => {
  return <div className="h-6 w-6 bg-neutral-200 rounded"></div>;
};

interface PaginationButtonProps {
  variant?: 'active' | 'default';
}

const PaginationButton: React.FC<PaginationButtonProps> = ({ variant = 'default' }) => {
  return (
    <div className={`h-8 w-8 rounded ${variant === 'active' ? 'bg-neutral-200' : 'bg-neutral-100'}`}></div>
  );
};

const TableRow: React.FC = () => {
  return (
    <div className="h-14 border-b border-neutral-100 flex items-center px-4 hover:bg-neutral-50">
      <div className="w-12 h-5 bg-neutral-200 rounded"></div>
      <TableCell width="w-48" />
      <TableCell width="w-40" />
      <TableCell width="w-32" />
      <TableCell width="w-32" />
      <TableCell width="w-24" variant="primary" />
      <div className="flex-1"></div>
      <div className="w-20 flex gap-2">
        <ActionButton />
        <ActionButton />
      </div>
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <header className="h-14 border-b border-neutral-200 flex items-center px-6 gap-4">
      <div className="h-6 w-40 bg-neutral-200 rounded"></div>
      <div className="flex-1"></div>
      <div className="h-8 w-32 bg-neutral-100 rounded"></div>
      <div className="h-8 w-24 bg-neutral-900 rounded"></div>
    </header>
  );
};

const Navigation: React.FC = () => {
  return (
    <nav className="h-12 border-b border-neutral-200 flex items-center px-6 gap-2">
      <NavButton />
      <NavButton />
      <NavButton />
      <div className="flex-1"></div>
      <div className="h-7 w-48 bg-neutral-100 rounded"></div>
    </nav>
  );
};

const TableHeader: React.FC = () => {
  return (
    <div className="h-10 bg-neutral-100 border-b border-neutral-200 flex items-center px-4 sticky top-0">
      <SubNavItem width="w-12" />
      <SubNavItem width="w-48" />
      <SubNavItem width="w-40" />
      <SubNavItem width="w-32" />
      <SubNavItem width="w-32" />
      <SubNavItem width="w-24" />
      <div className="flex-1"></div>
      <SubNavItem width="w-20" />
    </div>
  );
};

// Main Content Component
const MainContent: React.FC = () => {
  return (
    <div className="flex-1 overflow-auto">
      <div className="min-w-full">
        <TableHeader />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="h-12 border-t border-neutral-200 flex items-center justify-between px-6">
      <div className="h-5 w-32 bg-neutral-200 rounded"></div>
      <div className="flex gap-2">
        <PaginationButton />
        <PaginationButton variant="active" />
        <PaginationButton />
        <PaginationButton />
        <PaginationButton />
      </div>
    </footer>
  );
};

const ZohoLayout: React.FC = () => {
  return (
    <div className="flex-1 overflow-hidden">
      <div className="flex flex-col h-full">
        <Header />
        <Navigation />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
};

export default ZohoLayout;