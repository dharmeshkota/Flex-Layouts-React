import React from 'react';

interface NavButtonProps {
  variant?: 'primary' | 'default';
}

const NavButton: React.FC<NavButtonProps> = ({ variant = 'default' }) => {
  return (
    <div className={`h-8 w-20 rounded ${variant === 'primary' ? 'bg-neutral-900' : 'bg-neutral-100'}`}></div>
  );
};

interface TabProps {
  variant?: 'active' | 'default';
}

const Tab: React.FC<TabProps> = ({ variant = 'default' }) => {
  return (
    <div className={`h-5 w-16 rounded ${variant === 'active' ? 'bg-neutral-900' : 'bg-neutral-200'}`}></div>
  );
};

const DetailRow: React.FC = () => {
  return (
    <div className="flex justify-between py-2 border-b border-neutral-100">
      <div className="h-4 w-24 bg-neutral-200 rounded"></div>
      <div className="h-4 w-40 bg-neutral-100 rounded"></div>
    </div>
  );
};

const RecordCard: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="h-6 w-32 bg-neutral-200 rounded"></div>
      <DetailRow />
      <DetailRow />
      <DetailRow />
      <DetailRow />
    </div>
  );
};

const NotificationCard: React.FC = () => {
  return (
    <div className="p-3 bg-neutral-50 rounded-lg flex gap-3">
      <div className="h-8 w-8 bg-neutral-200 rounded-full shrink-0"></div>
      <div className="flex-1 flex flex-col gap-1">
        <div className="h-4 w-full bg-neutral-200 rounded"></div>
        <div className="h-3 w-20 bg-neutral-100 rounded"></div>
      </div>
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <header className="h-14 border-b border-neutral-200 flex items-center px-6 gap-4">
      <div className="h-8 w-8 bg-neutral-200 rounded"></div>
      <div className="h-6 w-48 bg-neutral-200 rounded"></div>
      <div className="flex-1"></div>
      <NavButton />
      <NavButton variant="primary" />
    </header>
  );
};

const DescriptionSection: React.FC = () => {
  return (
    <section className="bg-neutral-100 p-6 border-b border-neutral-200">
      <div className="flex gap-6">
        <div className="h-20 w-20 bg-neutral-300 rounded-full"></div>
        <div className="flex-1 flex flex-col gap-2">
          <div className="h-8 w-64 bg-neutral-300 rounded"></div>
          <div className="h-5 w-96 bg-neutral-200 rounded"></div>
          <div className="flex gap-4 mt-2">
            <div className="h-8 w-28 bg-white rounded border border-neutral-300"></div>
            <div className="h-8 w-28 bg-white rounded border border-neutral-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const RecordsSection: React.FC = () => {
  return (
    <section className="flex-1 flex flex-col">
      <nav className="h-12 border-b border-neutral-200 flex items-center px-6 gap-6">
        <ul className="flex gap-6">
          <li><Tab variant="active" /></li>
          <li><Tab /></li>
          <li><Tab /></li>
          <li><Tab /></li>
        </ul>
      </nav>
      <div className="flex-1 p-6 overflow-auto">
        <ul className="grid grid-cols-2 gap-6">
          <li><RecordCard /></li>
          <li><RecordCard /></li>
          <li><RecordCard /></li>
          <li><RecordCard /></li>
        </ul>
      </div>
    </section>
  );
};

const Aside: React.FC = () => {
  return (
    <aside className="w-80 border-l border-neutral-200 p-4 flex flex-col gap-4">
      <div className="h-6 w-24 bg-neutral-200 rounded"></div>
      <ul className="flex flex-col gap-4">
        <li><NotificationCard /></li>
        <li><NotificationCard /></li>
        <li><NotificationCard /></li>
      </ul>
    </aside>
  );
};

const CRMLayout: React.FC = () => {
  return (
    <div className="flex-1 overflow-hidden">
      <div className="flex flex-col h-full">
        <Header />
        <DescriptionSection />
        <main className="flex flex-1">
          <RecordsSection />
          <Aside />
        </main>
      </div>
    </div>
  );
};

export default CRMLayout;