import React from 'react';

interface NavItemProps {
  isActive?: boolean;
}

interface SettingRowProps {
  labelWidth?: string;
  subTextWidth?: string;
  inputType?: 'input' | 'toggle';
  toggleState?: boolean;
}

interface SettingGroupProps {
  titleWidth?: string;
  children: React.ReactNode;
}

const SearchBar: React.FC = () => {
  return (
    <div className="h-10 w-full bg-neutral-100 rounded flex items-center px-3 mb-4">
      <div className="h-4 flex-1 bg-neutral-200 rounded"></div>
    </div>
  );
};

const NavItem: React.FC<NavItemProps> = ({ isActive = false }) => {
  return (
    <div className={`h-10 rounded flex items-center px-3 ${
      isActive ? 'bg-neutral-200' : 'hover:bg-neutral-100'
    }`}>
      <div className={`h-4 w-24 rounded ${
        isActive ? 'bg-neutral-400' : 'bg-neutral-200'
      }`}></div>
    </div>
  );
};

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 border-r border-neutral-200 p-4 flex flex-col gap-1">
      <SearchBar />
      <NavItem isActive={true} />
      <NavItem />
      <NavItem />
      <NavItem />
      <NavItem />
      <NavItem />
      <NavItem />
      <NavItem />
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <div className="h-14 border-b border-neutral-200 flex items-center px-6">
      <div className="h-6 w-24 bg-neutral-300 rounded"></div>
    </div>
  );
};

const SettingRow: React.FC<SettingRowProps> = ({ 
  labelWidth = 'w-24', 
  subTextWidth = 'w-48',
  inputType = 'input',
  toggleState = false 
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-1">
        <div className={`h-4 ${labelWidth} bg-neutral-200 rounded`}></div>
        <div className={`h-3 ${subTextWidth} bg-neutral-100 rounded`}></div>
      </div>
      {inputType === 'input' ? (
        <div className="h-10 w-64 bg-neutral-100 rounded"></div>
      ) : (
        <div className={`h-6 w-12 ${
          toggleState ? 'bg-neutral-900' : 'bg-neutral-300'
        } rounded-full`}></div>
      )}
    </div>
  );
};

const SettingGroup: React.FC<SettingGroupProps> = ({ titleWidth = 'w-32', children }) => {
  return (
    <div className="flex flex-col gap-4 pb-6 border-b border-neutral-200">
      <div className={`h-5 ${titleWidth} bg-neutral-300 rounded`}></div>
      {children}
    </div>
  );
};

const ActionFooter: React.FC = () => {
  return (
    <div className="flex justify-end gap-3">
      <div className="h-10 w-24 bg-neutral-200 rounded"></div>
      <div className="h-10 w-24 bg-neutral-900 rounded"></div>
    </div>
  );
};

const MainContent: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col">
      <Header />
      <div className="flex-1 p-6 overflow-auto">
        <div className="max-w-2xl flex flex-col gap-6">
          <SettingGroup titleWidth="w-32">
            <SettingRow labelWidth="w-24" subTextWidth="w-48" />
            <SettingRow labelWidth="w-20" subTextWidth="w-40" />
          </SettingGroup>

          <SettingGroup titleWidth="w-28">
            <SettingRow 
              labelWidth="w-32" 
              subTextWidth="w-56" 
              inputType="toggle" 
              toggleState={false} 
            />
            <SettingRow 
              labelWidth="w-28" 
              subTextWidth="w-48" 
              inputType="toggle" 
              toggleState={true} 
            />
          </SettingGroup>

          <ActionFooter />
        </div>
      </div>
    </div>
  );
};

const SettingsLayout: React.FC = () => {
  return (
    <div className="flex-1 overflow-hidden">
      <div className="flex h-full">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

export default SettingsLayout;