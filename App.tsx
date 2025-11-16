
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import PromptEditor from './components/PromptEditor';
import ImageDisplay from './components/ImageDisplay';
import Footer from './components/Footer';
import { generateImage } from './services/geminiService';

const App: React.FC = () => {
  const initialPrompt = "Create a high-quality, realistic 3D render of an 8-year-old Indian girl wearing a traditional outfit: a long flowing frock with rich Indian embroidery and a half-sleeve long blouse. She has a sweet, innocent face, expressive eyes, and neatly styled hair with a small decorative bindi. Use vibrant Indian colors like maroon, gold, or teal. The setting should be bright and festive, with soft lighting that highlights the textures of the fabric. Add gentle highlights, smooth skin tones, and a natural pose that reflects joy and elegance.";
  
  const [prompt, setPrompt] = useState<string>(initialPrompt);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async () => {
    if (!prompt || isLoading) return;

    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);

    try {
      const imageUrl = await generateImage(prompt);
      setGeneratedImage(imageUrl);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [prompt, isLoading]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col font-sans">
      <Header />
      <main className="flex-grow container mx-auto p-4 md:p-8 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/3 flex flex-col">
          <PromptEditor
            prompt={prompt}
            setPrompt={setPrompt}
            onGenerate={handleGenerate}
            isLoading={isLoading}
          />
        </div>
        <div className="lg:w-2/3 flex-grow flex flex-col">
          <ImageDisplay
            imageUrl={generatedImage}
            isLoading={isLoading}
            error={error}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
