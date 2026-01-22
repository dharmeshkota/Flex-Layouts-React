import React from 'react';

interface NavItemProps {
  isActive?: boolean;
  width?: string;
}

interface PostItemProps {
  index?: number;
}

const NavItem: React.FC<NavItemProps> = ({ isActive = false, width = 'w-12' }) => {
  return (
    <div className={`h-5 ${width} ${isActive ? 'bg-neutral-900' : 'bg-neutral-200'} rounded`}></div>
  );
};

const PostItem: React.FC<PostItemProps> = () => {
  return (
    <div className="mb-8">
      <div className="h-3 w-64 bg-neutral-100 rounded mb-1"></div>
      <div className="h-5 w-96 bg-neutral-300 rounded mb-2"></div>
      <div className="h-4 w-full bg-neutral-100 rounded mb-1"></div>
      <div className="h-4 w-3/4 bg-neutral-100 rounded"></div>
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <div className="border-b border-neutral-200 px-6 py-4">
      <div className="flex items-center gap-6">
        <div className="h-8 w-24 bg-neutral-300 rounded"></div>
        <div className="h-12 flex-1 max-w-2xl bg-neutral-100 rounded-full border border-neutral-300"></div>
        <div className="flex-1"></div>
        <div className="h-8 w-8 bg-neutral-200 rounded"></div>
        <div className="h-8 w-8 bg-neutral-200 rounded-full"></div>
      </div>
      <div className="flex gap-6 mt-4 ml-32">
        <NavItem isActive={true} width="w-12" />
        <NavItem width="w-16" />
        <NavItem width="w-14" />
        <NavItem width="w-12" />
        <NavItem width="w-10" />
      </div>
    </div>
  );
};

const ResultsMeta: React.FC = () => {
  return (
    <div className="h-4 w-48 bg-neutral-200 rounded mb-6"></div>
  );
};

const PostsList: React.FC = () => {
  return (
    <>
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
    </>
  );
};

const MainContent: React.FC = () => {
  return (
    <div className="flex-1 overflow-auto px-6 py-4">
      <div className="max-w-2xl ml-32">
        <ResultsMeta />
        <PostsList />
      </div>
    </div>
  );
};

const SearchLayout: React.FC = () => {
  return (
    <div className="flex-1 overflow-hidden">
      <div className="flex flex-col h-full">
        <Header />
        <MainContent />
      </div>
    </div>
  );
};

export default SearchLayout;