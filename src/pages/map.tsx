import React from 'react';

const NavFilterButton: React.FC = () => {
  return <div className="h-8 w-24 bg-neutral-100 rounded-full"></div>;
};

interface MapPinProps {
  position: string;
  variant?: 'light' | 'dark';
}

const MapPin: React.FC<MapPinProps> = ({ position, variant = 'light' }) => {
  return (
    <div className={`absolute ${position} h-8 px-3 ${variant === 'dark' ? 'bg-neutral-900' : 'bg-white'} rounded-full shadow`}></div>
  );
};

const ListingCard: React.FC = () => {
  return (
    <div className="flex gap-4 p-2 rounded-xl hover:bg-neutral-50">
      <div className="w-72 h-48 bg-neutral-200 rounded-xl shrink-0"></div>
      <div className="flex-1 py-2 flex flex-col gap-2">
        <div className="h-4 w-32 bg-neutral-200 rounded"></div>
        <div className="h-6 w-3/4 bg-neutral-200 rounded"></div>
        <div className="h-4 w-1/2 bg-neutral-100 rounded"></div>
        <div className="flex-1"></div>
        <div className="h-6 w-24 bg-neutral-300 rounded"></div>
      </div>
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <header className="h-16 border-b border-neutral-200 flex items-center px-6 gap-4">
      <div className="h-8 w-32 bg-neutral-900 rounded"></div>
      <div className="h-10 flex-1 max-w-2xl bg-neutral-100 rounded-full"></div>
      <div className="flex-1"></div>
      <div className="h-8 w-8 bg-neutral-200 rounded-full"></div>
    </header>
  );
};

const LeftSection: React.FC = () => {
  return (
    <section className="w-1/2 flex flex-col border-r border-neutral-200">
      <nav className="h-12 border-b border-neutral-200 flex items-center px-4 gap-2">
        <ul className="flex gap-2">
          <li><NavFilterButton /></li>
          <li><NavFilterButton /></li>
          <li><NavFilterButton /></li>
        </ul>
      </nav>
      <div className="flex-1 p-4 flex flex-col gap-4 overflow-auto">
        <ul className="flex flex-col gap-4">
          <li><ListingCard /></li>
          <li><ListingCard /></li>
          <li><ListingCard /></li>
          <li><ListingCard /></li>
        </ul>
      </div>
    </section>
  );
};

const RightSection: React.FC = () => {
  return (
    <section className="w-1/2 bg-neutral-200 relative">
      <div className="absolute top-4 left-4 flex flex-col gap-2">
        <div className="h-10 w-10 bg-white rounded shadow"></div>
        <div className="h-10 w-10 bg-white rounded shadow"></div>
      </div>
      <MapPin position="top-20 left-32" />
      <MapPin position="top-40 right-48" />
      <MapPin position="bottom-32 left-48" />
      <MapPin position="bottom-20 right-32" variant="dark" />
    </section>
  );
};

const MapLayout: React.FC = () => {
  return (
    <div className="flex-1 overflow-hidden">
      <div className="flex flex-col h-full">
        <Header />
        <main className="flex flex-1">
          <LeftSection />
          <RightSection />
        </main>
      </div>
    </div>
  );
};

export default MapLayout;