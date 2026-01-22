import React from 'react';

interface FormListItemProps {
  isActive?: boolean;
}

interface ToolButtonProps {
  isActive?: boolean;
}

interface PropertyFieldProps {
  labelWidth: string;
  inputType: 'input' | 'toggle';
  toggleState?: boolean;
}

const FormListItem: React.FC<FormListItemProps> = ({ isActive = false }) => {
  return (
    <div className={`p-3 rounded-lg border ${
      isActive ? 'border-neutral-900 bg-neutral-100' : 'border-neutral-200'
    }`}>
      <div className="flex items-center gap-2 mb-2">
        <div className="h-4 w-4 bg-neutral-300 rounded"></div>
        <div className="h-4 w-4 bg-neutral-200 rounded"></div>
        <div className="h-4 flex-1 bg-neutral-200 rounded"></div>
      </div>
      <div className="h-3 w-3/4 bg-neutral-100 rounded"></div>
    </div>
  );
};

const LeftSidebar: React.FC = () => {
  return (
    <div className="w-72 border-r border-neutral-200 flex flex-col">
      <div className="h-14 border-b border-neutral-200 flex items-center px-4">
        <div className="h-6 w-32 bg-neutral-200 rounded"></div>
      </div>
      <div className="p-4">
        <div className="h-10 bg-neutral-900 rounded mb-4"></div>
      </div>
      <div className="flex-1 p-4 pt-0 flex flex-col gap-2 overflow-auto">
        <FormListItem />
        <FormListItem isActive={true} />
        <FormListItem />
        <FormListItem />
        <FormListItem />
      </div>
    </div>
  );
};

const ToolButton: React.FC<ToolButtonProps> = ({ isActive = false }) => {
  return (
    <div className={`h-8 w-8 ${
      isActive ? 'bg-neutral-900' : 'bg-neutral-200'
    } rounded`}></div>
  );
};

const Toolbar: React.FC = () => {
  return (
    <div className="h-14 bg-white border-b border-neutral-200 flex items-center justify-center gap-4">
      <ToolButton />
      <ToolButton />
      <ToolButton isActive={true} />
      <ToolButton />
    </div>
  );
};

const FormCard: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xl">
      <div className="h-6 w-3/4 bg-neutral-200 rounded mb-6"></div>
      <div className="flex flex-col gap-4">
        <div className="h-12 bg-neutral-100 rounded"></div>
        <div className="h-12 bg-neutral-100 rounded"></div>
        <div className="flex gap-3 mt-4">
          <div className="h-10 flex-1 bg-neutral-200 rounded"></div>
          <div className="h-10 flex-1 bg-neutral-900 rounded"></div>
        </div>
      </div>
    </div>
  );
};

const MainContent: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col bg-neutral-100">
      <Toolbar />
      <div className="flex-1 flex items-center justify-center p-8">
        <FormCard />
      </div>
    </div>
  );
};

const PropertyField: React.FC<PropertyFieldProps> = ({ 
  labelWidth, 
  inputType, 
  toggleState = false 
}) => {
  if (inputType === 'toggle') {
    return (
      <div className="flex items-center justify-between">
        <div className={`h-4 ${labelWidth} bg-neutral-200 rounded`}></div>
        <div className={`h-6 w-10 ${
          toggleState ? 'bg-neutral-900' : 'bg-neutral-300'
        } rounded-full`}></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <div className={`h-4 ${labelWidth} bg-neutral-200 rounded`}></div>
      <div className="h-10 bg-neutral-100 rounded"></div>
    </div>
  );
};

const RightSidebar: React.FC = () => {
  return (
    <div className="w-72 border-l border-neutral-200 flex flex-col">
      <div className="h-14 border-b border-neutral-200 flex items-center px-4">
        <div className="h-5 w-24 bg-neutral-200 rounded"></div>
      </div>
      <div className="flex-1 p-4 flex flex-col gap-4">
        <PropertyField labelWidth="w-16" inputType="input" />
        <PropertyField labelWidth="w-20" inputType="input" />
        <PropertyField labelWidth="w-20" inputType="toggle" toggleState={false} />
        <PropertyField labelWidth="w-24" inputType="toggle" toggleState={true} />
      </div>
    </div>
  );
};

const FormBuilderLayout: React.FC = () => {
  return (
    <div className="flex-1 overflow-hidden">
      <div className="flex h-full">
        <LeftSidebar />
        <MainContent />
        <RightSidebar />
      </div>
    </div>
  );
};

export default FormBuilderLayout;