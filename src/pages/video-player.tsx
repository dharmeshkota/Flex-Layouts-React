import React from 'react';

interface RecommendedVideoProps {
  index?: number;
}

const Header: React.FC = () => {
  return (
    <div className="h-14 bg-white border-b border-neutral-200 flex items-center px-6 gap-4">
      <div className="h-6 w-24 bg-neutral-900 rounded"></div>
      <div className="flex-1 max-w-xl h-10 bg-neutral-100 rounded-full mx-auto"></div>
      <div className="flex gap-4">
        <div className="h-8 w-8 bg-neutral-200 rounded"></div>
        <div className="h-8 w-8 bg-neutral-200 rounded"></div>
        <div className="h-8 w-8 bg-neutral-200 rounded-full"></div>
      </div>
    </div>
  );
};

const VideoPlayer: React.FC = () => {
  return (
    <div className="aspect-video bg-neutral-900 rounded-xl"></div>
  );
};

const VideoTitle: React.FC = () => {
  return (
    <div className="h-6 w-3/4 bg-neutral-300 rounded"></div>
  );
};

const ChannelInfo: React.FC = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="h-10 w-10 bg-neutral-300 rounded-full"></div>
      <div className="flex flex-col gap-1">
        <div className="h-4 w-32 bg-neutral-200 rounded"></div>
        <div className="h-3 w-24 bg-neutral-100 rounded"></div>
      </div>
      <div className="h-9 w-28 bg-neutral-900 rounded-full ml-4"></div>
      <div className="flex-1"></div>
      <div className="flex gap-2">
        <div className="h-9 w-24 bg-neutral-200 rounded-full"></div>
        <div className="h-9 w-20 bg-neutral-200 rounded-full"></div>
        <div className="h-9 w-9 bg-neutral-200 rounded-full"></div>
      </div>
    </div>
  );
};

const VideoDescription: React.FC = () => {
  return (
    <div className="bg-neutral-200 rounded-xl p-4">
      <div className="h-4 w-48 bg-neutral-300 rounded mb-2"></div>
      <div className="h-4 w-full bg-neutral-300 rounded"></div>
    </div>
  );
};

const RecommendedVideo: React.FC<RecommendedVideoProps> = () => {
  return (
    <div className="flex gap-2">
      <div className="w-40 h-24 bg-neutral-300 rounded-lg shrink-0"></div>
      <div className="flex-1 flex flex-col gap-1">
        <div className="h-4 w-full bg-neutral-200 rounded"></div>
        <div className="h-4 w-3/4 bg-neutral-200 rounded"></div>
        <div className="h-3 w-1/2 bg-neutral-100 rounded mt-1"></div>
        <div className="h-3 w-1/3 bg-neutral-100 rounded"></div>
      </div>
    </div>
  );
};

const MainContent: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col">
      <VideoPlayer />
      <div className="py-4 flex flex-col gap-3">
        <VideoTitle />
        <ChannelInfo />
      </div>
      <VideoDescription />
    </div>
  );
};

const Sidebar: React.FC = () => {
  return (
    <div className="w-96 flex flex-col gap-3">
      <RecommendedVideo />
      <RecommendedVideo />
      <RecommendedVideo />
      <RecommendedVideo />
      <RecommendedVideo />
      <RecommendedVideo />
    </div>
  );
};

const VideoPlayerLayout: React.FC = () => {
  return (
    <div className="flex-1 overflow-hidden">
      <div className="flex flex-col h-full bg-neutral-100">
        <Header />
        <div className="flex-1 flex p-6 gap-6 overflow-auto">
          <MainContent />
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerLayout;