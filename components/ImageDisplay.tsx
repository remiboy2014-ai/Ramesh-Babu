
import React from 'react';

interface ImageDisplayProps {
  imageUrl: string | null;
  isLoading: boolean;
  error: string | null;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageUrl, isLoading, error }) => {
  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center h-full text-center p-8">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-purple-400"></div>
          <p className="mt-4 text-lg text-gray-300">Generating your masterpiece...</p>
          <p className="text-sm text-gray-500">This can take a few moments.</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="flex flex-col items-center justify-center h-full text-center bg-red-900/20 border border-red-500/50 rounded-lg p-8">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-xl font-semibold text-red-300">Generation Failed</h3>
          <p className="mt-2 text-red-400">{error}</p>
        </div>
      );
    }

    if (imageUrl) {
      return (
        <img
          src={imageUrl}
          alt="Generated 3D render"
          className="w-full h-full object-contain rounded-lg shadow-2xl animate-fade-in"
        />
      );
    }

    return (
      <div className="flex flex-col items-center justify-center h-full text-center p-8">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <h3 className="text-xl font-semibold text-gray-400">Your Generated Image Will Appear Here</h3>
        <p className="mt-2 text-gray-500">Click "Generate Image" to create your 3D render.</p>
      </div>
    );
  };

  return (
    <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg shadow-xl p-4 flex-grow flex items-center justify-center relative min-h-[400px] lg:min-h-full">
      <style>
        {`
          @keyframes fade-in {
            0% { opacity: 0; transform: scale(0.95); }
            100% { opacity: 1; transform: scale(1); }
          }
          .animate-fade-in {
            animation: fade-in 0.5s ease-in-out;
          }
        `}
      </style>
      {renderContent()}
    </div>
  );
};

export default ImageDisplay;
