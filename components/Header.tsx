
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800/50 backdrop-blur-sm shadow-lg w-full">
      <div className="container mx-auto px-4 md:px-8 py-4">
        <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500">
          AI 3D Character Renderer
        </h1>
        <p className="text-sm text-gray-400 mt-1">Powered by Gemini</p>
      </div>
    </header>
  );
};

export default Header;
