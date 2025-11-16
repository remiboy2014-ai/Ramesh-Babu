
import React from 'react';

interface PromptEditorProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  onGenerate: () => void;
  isLoading: boolean;
}

const PromptEditor: React.FC<PromptEditorProps> = ({ prompt, setPrompt, onGenerate, isLoading }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-xl p-6 flex flex-col h-full">
      <h2 className="text-xl font-semibold mb-4 text-gray-200">Image Prompt</h2>
      <p className="text-sm text-gray-400 mb-4">
        Describe the image you want to create. The more detailed your description, the better the result.
      </p>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt here..."
        className="w-full flex-grow bg-gray-900/50 border border-gray-700 rounded-md p-4 text-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 resize-none min-h-[250px] lg:min-h-0"
        disabled={isLoading}
      />
      <button
        onClick={onGenerate}
        disabled={isLoading || !prompt}
        className="mt-6 w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-lg transform hover:scale-105"
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Generating...
          </>
        ) : (
          'Generate Image'
        )}
      </button>
    </div>
  );
};

export default PromptEditor;
