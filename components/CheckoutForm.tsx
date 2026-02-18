
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface CheckoutFormProps {
  price: number;
}

const CheckoutForm: React.FC<CheckoutFormProps> = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    // Simulate a successful registration delay without making a real network request
    setTimeout(() => {
      setLoading(false);
      navigate('/success');
    }, 800);
  };

  return (
    <div id="checkout" className="max-w-lg mx-auto bg-white p-8 sm:p-12 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Claim Your Free Copy</h2>
        <p className="text-slate-500">Enter your email to receive the download link.</p>
      </div>

      <form onSubmit={handleRegister} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-600 transition-all outline-none text-slate-900"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-5 rounded-2xl text-white font-bold text-lg shadow-lg shadow-blue-200 flex items-center justify-center transition-all ${
            loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 hover:-translate-y-0.5 active:translate-y-0'
          }`}
        >
          {loading ? (
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            `Get Access Now`
          )}
        </button>

        <p className="text-xs text-center text-slate-400">
          Your privacy is safe. <br /> You'll receive the download link instantly.
        </p>
      </form>
    </div>
  );
};

export default CheckoutForm;
