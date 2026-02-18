
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-indigo-100/50 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-bold tracking-wide uppercase mb-8 border border-blue-100 animate-pulse">
          New Release: 2024 Edition
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
          Master the <span className="text-blue-600">Digital Economy</span> <br className="hidden md:block" /> from Scratch.
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed">
          Stop guessing. Start building. The ultimate blueprint to creating, scaling, and automating your digital product empire in 90 days or less.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button 
            onClick={onCtaClick}
            className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white text-lg font-bold rounded-2xl hover:bg-blue-700 hover:scale-105 transition-all shadow-xl shadow-blue-200 active:scale-95"
          >
            Get Instant Access – ₹299
          </button>
          <p className="text-slate-500 font-medium">
            Join 5,000+ readers today.
          </p>
        </div>
        <div className="mt-16 relative">
          <div className="max-w-4xl mx-auto">
            <img 
              src="https://picsum.photos/seed/book/1200/600" 
              alt="Digital Book Mockup" 
              className="rounded-3xl shadow-2xl border-4 border-white transform lg:rotate-[-2deg] hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
