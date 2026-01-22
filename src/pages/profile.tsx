import React from 'react';

interface SuggestionItemProps {
  index?: number;
}

const Header: React.FC = () => {
  return (
    <div className="h-14 bg-white border-b border-neutral-200 flex items-center px-6 gap-4">
      <div className="h-8 w-8 bg-neutral-900 rounded"></div>
      <div className="h-10 w-64 bg-neutral-100 rounded-full"></div>
      <div className="flex-1"></div>
      <div className="flex gap-4">
        <div className="h-8 w-8 bg-neutral-200 rounded"></div>
        <div className="h-8 w-8 bg-neutral-200 rounded"></div>
        <div className="h-8 w-8 bg-neutral-200 rounded"></div>
        <div className="h-8 w-8 bg-neutral-200 rounded"></div>
      </div>
      <div className="h-8 w-8 bg-neutral-300 rounded-full"></div>
    </div>
  );
};

const ProfileIntroCard: React.FC = () => {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-neutral-200">
      <div className="h-32 bg-neutral-300"></div>
      <div className="p-4 relative">
        <div className="h-24 w-24 bg-neutral-200 rounded-full border-4 border-white absolute -top-12"></div>
        <div className="ml-28 flex flex-col gap-2">
          <div className="h-6 w-48 bg-neutral-200 rounded"></div>
          <div className="h-4 w-64 bg-neutral-100 rounded"></div>
        </div>
        <div className="flex gap-2 mt-4">
          <div className="h-8 w-28 bg-neutral-900 rounded"></div>
          <div className="h-8 w-28 bg-neutral-100 rounded border border-neutral-300"></div>
        </div>
      </div>
    </div>
  );
};

const AboutSection: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-neutral-200 p-4">
      <div className="h-5 w-20 bg-neutral-200 rounded mb-3"></div>
      <div className="h-4 w-full bg-neutral-100 rounded"></div>
      <div className="h-4 w-3/4 bg-neutral-100 rounded mt-2"></div>
    </div>
  );
};

const ExperienceSection: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-neutral-200 p-4">
      <div className="h-5 w-24 bg-neutral-200 rounded mb-3"></div>
      <div className="flex gap-4">
        <div className="h-12 w-12 bg-neutral-200 rounded"></div>
        <div className="flex-1 flex flex-col gap-1">
          <div className="h-4 w-48 bg-neutral-200 rounded"></div>
          <div className="h-3 w-32 bg-neutral-100 rounded"></div>
        </div>
      </div>
    </div>
  );
};

const SuggestionItem: React.FC<SuggestionItemProps> = () => {
  return (
    <div className="flex gap-2 py-2">
      <div className="h-8 w-8 bg-neutral-200 rounded-full"></div>
      <div className="flex-1 flex flex-col gap-1">
        <div className="h-3 w-full bg-neutral-100 rounded"></div>
        <div className="h-3 w-2/3 bg-neutral-100 rounded"></div>
      </div>
    </div>
  );
};

const SuggestionsCard: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-neutral-200 p-4">
      <div className="h-5 w-32 bg-neutral-200 rounded mb-3"></div>
      <SuggestionItem />
      <SuggestionItem />
      <SuggestionItem />
    </div>
  );
};

const PromoCard: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-neutral-200 p-4">
      <div className="h-5 w-24 bg-neutral-200 rounded"></div>
    </div>
  );
};

const MainContent: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col gap-4">
      <ProfileIntroCard />
      <AboutSection />
      <ExperienceSection />
    </div>
  );
};

const Sidebar: React.FC = () => {
  return (
    <div className="w-72 flex flex-col gap-4">
      <SuggestionsCard />
      <PromoCard />
    </div>
  );
};

const ProfileLayout: React.FC = () => {
  return (
    <div className="flex-1 overflow-hidden">
      <div className="flex flex-col h-full bg-neutral-100">
        <Header />
        <div className="flex-1 overflow-auto">
          <div className="max-w-4xl mx-auto py-4 flex gap-4">
            <MainContent />
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;