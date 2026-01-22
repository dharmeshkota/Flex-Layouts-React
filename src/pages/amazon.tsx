import React from 'react';

interface ThumbnailProps {
  isSelected?: boolean;
}

interface VariantBoxProps {
  isSelected?: boolean;
  isSize?: boolean;
}

const Header: React.FC = () => {
  return (
    <div className="h-14 bg-neutral-900 flex items-center px-6 gap-4">
      <div className="h-8 w-24 bg-neutral-700 rounded"></div>
      <div className="flex-1 max-w-2xl h-10 bg-neutral-800 rounded"></div>
      <div className="flex gap-4">
        <div className="h-8 w-8 bg-neutral-700 rounded"></div>
        <div className="h-8 w-8 bg-neutral-700 rounded"></div>
      </div>
    </div>
  );
};

const Thumbnail: React.FC<ThumbnailProps> = ({ isSelected = false }) => {
  return (
    <div className={`h-20 bg-neutral-200 rounded ${isSelected ? 'border-2 border-neutral-900' : ''}`}></div>
  );
};

const ThumbnailList: React.FC = () => {
  return (
    <div className="w-20 flex flex-col gap-2">
      <Thumbnail isSelected={true} />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
    </div>
  );
};

const MainImage: React.FC = () => {
  return (
    <div className="flex-1 bg-neutral-100 rounded-lg"></div>
  );
};

const Gallery: React.FC = () => {
  return (
    <div className="w-1/2 p-6 flex gap-4">
      <ThumbnailList />
      <MainImage />
    </div>
  );
};

const ProductTitle: React.FC = () => {
  return (
    <>
      <div className="h-4 w-24 bg-neutral-200 rounded"></div>
      <div className="h-8 w-full bg-neutral-200 rounded"></div>
    </>
  );
};

const ProductRating: React.FC = () => {
  return (
    <div className="h-6 w-48 bg-neutral-100 rounded"></div>
  );
};

const Divider: React.FC = () => {
  return (
    <div className="h-px bg-neutral-200"></div>
  );
};

const ProductPrice: React.FC = () => {
  return (
    <div className="h-10 w-32 bg-neutral-300 rounded"></div>
  );
};

const ProductDescription: React.FC = () => {
  return (
    <div className="h-4 w-40 bg-neutral-100 rounded"></div>
  );
};

const VariantBox: React.FC<VariantBoxProps> = ({ isSelected = false, isSize = false }) => {
  if (isSize) {
    return (
      <div className={`h-10 w-12 rounded flex items-center justify-center text-sm ${
        isSelected ? 'border-2 border-neutral-900' : 'border border-neutral-300'
      }`}></div>
    );
  }
  
  return (
    <div className={`h-10 w-10 rounded ${
      isSelected ? 'border-2 border-neutral-900 bg-neutral-200' : 'bg-neutral-100'
    }`}></div>
  );
};

const VariantSection: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="h-5 w-16 bg-neutral-200 rounded"></div>
        <div className="flex gap-2">
          <VariantBox isSelected={true} />
          <VariantBox />
          <VariantBox />
          <VariantBox />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="h-5 w-12 bg-neutral-200 rounded"></div>
        <div className="flex gap-2">
          <VariantBox isSize={true} />
          <VariantBox isSelected={true} isSize={true} />
          <VariantBox isSize={true} />
          <VariantBox isSize={true} />
        </div>
      </div>
    </>
  );
};

const BuyBox: React.FC = () => {
  return (
    <div className="flex gap-3 mt-4">
      <div className="h-12 flex-1 bg-neutral-900 rounded"></div>
      <div className="h-12 w-12 bg-neutral-200 rounded"></div>
    </div>
  );
};

const ProductDetails: React.FC = () => {
  return (
    <div className="w-1/2 p-6 flex flex-col gap-4 border-l border-neutral-200">
      <ProductTitle />
      <ProductRating />
      <Divider />
      <ProductPrice />
      <ProductDescription />
      <Divider />
      <VariantSection />
      <BuyBox />
    </div>
  );
};

const ECommercePDP: React.FC = () => {
  return (
    <div className="flex-1 overflow-hidden">
      <div className="flex flex-col h-full">
        <Header />
        <div className="flex-1 flex overflow-auto">
          <Gallery />
          <ProductDetails />
        </div>
      </div>
    </div>
  );
};

export default ECommercePDP;