
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900/50 py-4 mt-8">
      <div className="container mx-auto px-4 md:px-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} AI 3D Character Renderer. All rights reserved.</p>
        <p>This is a fictional application for demonstration purposes.</p>
      </div>
    </footer>
  );
};

export default Footer;
