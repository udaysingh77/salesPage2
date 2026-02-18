
import React from 'react';

export interface ReviewProps {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
}

const ReviewCard: React.FC<ReviewProps> = ({ name, role, avatar, rating, text }) => {
  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="flex text-yellow-400 mb-4">
        {[...Array(rating)].map((_, i) => (
          <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-slate-600 mb-6 italic leading-relaxed flex-grow">"{text}"</p>
      <div className="flex items-center space-x-4 pt-6 border-t border-slate-50">
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full border-2 border-blue-50 object-cover" />
        <div>
          <h4 className="font-bold text-slate-900 leading-tight">{name}</h4>
          <p className="text-sm text-slate-400 font-medium">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
