import React from 'react';

interface UserItemProps {
  isActive?: boolean;
}

interface MessageProps {
  isSent?: boolean;
  hasShortLine?: boolean;
}

const UserItem: React.FC<UserItemProps> = ({ isActive = false }) => {
  return (
    <div className={`h-16 flex items-center gap-3 px-4 ${isActive ? 'bg-neutral-100' : 'hover:bg-neutral-50'}`}>
      <div className="h-10 w-10 bg-neutral-300 rounded-full shrink-0"></div>
      <div className="flex-1 flex flex-col gap-1">
        <div className="flex justify-between">
          <div className="h-4 w-24 bg-neutral-200 rounded"></div>
          <div className="h-3 w-10 bg-neutral-200 rounded"></div>
        </div>
        <div className="h-3 w-full bg-neutral-100 rounded"></div>
      </div>
    </div>
  );
};

const MessageBubble: React.FC<MessageProps> = ({ isSent = false, hasShortLine = false }) => {
  if (isSent) {
    return (
      <div className="flex gap-3 self-end">
        <div className="max-w-md bg-neutral-900 rounded-2xl rounded-tr-none p-4">
          <div className="h-4 w-48 bg-neutral-700 rounded"></div>
          {hasShortLine && <div className="h-4 w-32 bg-neutral-700 rounded mt-2"></div>}
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-3">
      <div className="h-8 w-8 bg-neutral-200 rounded-full shrink-0"></div>
      <div className="max-w-md bg-neutral-100 rounded-2xl rounded-tl-none p-4">
        <div className="h-4 w-64 bg-neutral-200 rounded"></div>
        {hasShortLine && <div className="h-4 w-48 bg-neutral-200 rounded mt-2"></div>}
      </div>
    </div>
  );
};

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 border-r border-neutral-200 flex flex-col">
      <div className="h-14 border-b border-neutral-200 flex items-center px-4">
        <div className="h-8 flex-1 bg-neutral-100 rounded"></div>
      </div>

      <div className="flex-1 flex flex-col overflow-auto">
        <UserItem isActive={true} />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
      </div>
    </div>
  );
};

const ChatHeader: React.FC = () => {
  return (
    <div className="h-14 border-b border-neutral-200 flex items-center px-6 gap-3">
      <div className="h-10 w-10 bg-neutral-200 rounded-full"></div>
      <div className="flex flex-col gap-1">
        <div className="h-5 w-32 bg-neutral-200 rounded"></div>
        <div className="h-3 w-20 bg-neutral-100 rounded"></div>
      </div>
      <div className="flex-1"></div>
      <div className="h-8 w-8 bg-neutral-100 rounded"></div>
      <div className="h-8 w-8 bg-neutral-100 rounded"></div>
      <div className="h-8 w-8 bg-neutral-100 rounded"></div>
    </div>
  );
};

const ChatArea: React.FC = () => {
  return (
    <div className="flex-1 p-6 flex flex-col gap-4 overflow-auto">
      <MessageBubble isSent={false} hasShortLine={false} />
      <MessageBubble isSent={true} hasShortLine={true} />
      <MessageBubble isSent={false} hasShortLine={true} />
      <MessageBubble isSent={true} hasShortLine={false} />
    </div>
  );
};

const InputArea: React.FC = () => {
  return (
    <div className="h-20 border-t border-neutral-200 p-4 flex items-center gap-3">
      <div className="h-10 w-10 bg-neutral-100 rounded"></div>
      <div className="flex-1 h-12 bg-neutral-100 rounded-full"></div>
      <div className="h-10 w-10 bg-neutral-900 rounded-full"></div>
    </div>
  );
};

const MainChatArea: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col">
      <ChatHeader />
      <ChatArea />
      <InputArea />
    </div>
  );
};

const MessengerLayout: React.FC = () => {
  return (
    <div className="flex-1 overflow-hidden">
      <div className="flex h-full">
        <Sidebar />
        <MainChatArea />
      </div>
    </div>
  );
};

export default MessengerLayout;