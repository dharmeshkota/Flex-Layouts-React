import React from 'react';

interface AvatarProps {
  variant?: 'stacked' | 'default';
}

const Avatar: React.FC<AvatarProps> = ({ variant = 'default' }) => {
  const classes = variant === 'stacked' 
    ? 'h-8 w-8 bg-neutral-300 rounded-full border-2 border-white'
    : 'h-6 w-6 bg-neutral-200 rounded-full';
  
  return <div className={classes}></div>;
};

const KanbanCard: React.FC = () => {
  return (
    <article className="bg-white rounded-lg p-3 shadow-sm flex flex-col gap-2">
      <div className="h-4 w-full bg-neutral-200 rounded"></div>
      <div className="h-4 w-3/4 bg-neutral-100 rounded"></div>
      <div className="flex justify-between items-center mt-2">
        <div className="flex gap-1">
          <div className="h-5 w-12 bg-neutral-200 rounded"></div>
        </div>
        <Avatar />
      </div>
    </article>
  );
};

interface ColumnProps {
  cardCount: number;
}

const KanbanColumn: React.FC<ColumnProps> = ({ cardCount }) => {
  return (
    <section className="w-72 shrink-0 bg-neutral-200 rounded-xl p-3 flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <div className="h-5 w-24 bg-neutral-400 rounded"></div>
        <div className="h-5 w-6 bg-neutral-400 rounded"></div>
      </div>
      <div className="flex-1 flex flex-col gap-2">
        {Array.from({ length: cardCount }).map((_, index) => (
          <KanbanCard key={index} />
        ))}
      </div>
      <div className="h-8 w-full bg-neutral-300 rounded mt-2"></div>
    </section>
  );
};

const Header: React.FC = () => {
  return (
    <header className="h-14 border-b border-neutral-200 flex items-center px-6 gap-4">
      <div className="h-6 w-48 bg-neutral-200 rounded"></div>
      <div className="flex-1"></div>
      <div className="flex -space-x-2">
        <Avatar variant="stacked" />
        <Avatar variant="stacked" />
        <Avatar variant="stacked" />
        <Avatar variant="stacked" />
      </div>
      <div className="h-8 w-24 bg-neutral-100 rounded"></div>
    </header>
  );
};

const BoardContent: React.FC = () => {
  return (
    <main className="flex-1 p-6 flex gap-4 overflow-x-auto bg-neutral-100">
      <KanbanColumn cardCount={3} />
      <KanbanColumn cardCount={4} />
      <KanbanColumn cardCount={2} />
      <KanbanColumn cardCount={3} />
      <KanbanColumn cardCount={3} />
    </main>
  );
};

const KanbanBoard: React.FC = () => {
  return (
    <div className="flex-1 overflow-hidden">
      <div className="flex flex-col h-full">
        <Header />
        <BoardContent />
      </div>
    </div>
  );
};

export default KanbanBoard;