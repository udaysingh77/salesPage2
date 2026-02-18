
import React, { useState } from 'react';
import { askAuthorAssistant } from '../services/aiAssistant';

const AIAssistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!query) return;
    setLoading(true);
    const response = await askAuthorAssistant(query);
    setAnswer(response);
    setLoading(false);
  };

  return (
    <div className="bg-slate-900 rounded-[2rem] p-8 text-white">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-bold text-lg">AI</div>
        <div>
          <h3 className="text-xl font-bold">Ask the Author Assistant</h3>
          <p className="text-slate-400 text-sm">Powered by Gemini AI</p>
        </div>
      </div>

      {answer && (
        <div className="mb-6 p-4 bg-slate-800 rounded-xl border-l-4 border-blue-500 animate-in fade-in slide-in-from-bottom-2">
          <p className="text-slate-200 italic">"{answer}"</p>
        </div>
      )}

      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Will this help me if I have zero followers?"
          className="flex-grow bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-slate-500"
        />
        <button
          onClick={handleAsk}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition-colors disabled:opacity-50"
        >
          {loading ? 'Thinking...' : 'Ask Author'}
        </button>
      </div>
    </div>
  );
};

export default AIAssistant;
