import React, { useRef } from 'react';
import Hero from '../components/Hero.tsx';
import CheckoutForm from '../components/CheckoutForm.tsx';
import ReviewCard from '../components/ReviewCard.tsx';
import type { ReviewProps } from '../components/ReviewCard.tsx';

const SalesPage: React.FC = () => {
  const checkoutRef = useRef<HTMLDivElement>(null);

  const scrollToCheckout = () => {
    checkoutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    { title: "Scaling Secrets", desc: "Learn how to go from $0 to $10k months without an agency.", icon: "🚀" },
    { title: "Automation 101", desc: "Set up systems that sell for you while you sleep.", icon: "⚙️" },
    { title: "High-Ticket Sales", desc: "Close clients with zero friction using our proven scripts.", icon: "💰" },
    { title: "Content Mastery", desc: "The psychology of viral content that builds trust.", icon: "✍️" },
  ];

  const reviews: ReviewProps[] = [
    {
      name: "Sarah Jenkins",
      role: "E-commerce Founder",
      avatar: "https://picsum.photos/seed/sarah/100/100",
      rating: 5,
      text: "The chapter on automation alone saved me at least 15 hours a week. It's a complete game-changer for solo founders."
    },
    {
      name: "Marcus Chen",
      role: "Digital Nomad",
      avatar: "https://picsum.photos/seed/marcus/100/100",
      rating: 5,
      text: "I've read dozens of business books, but this is the first one that gives you a day-by-day blueprint. No fluff, just results."
    },
    {
      name: "Elena Rodriguez",
      role: "Content Creator",
      avatar: "https://picsum.photos/seed/elena/100/100",
      rating: 5,
      text: "Finally, a guide that understands the modern social media landscape. My engagement increased by 40% after implementing the first three tips."
    }
  ];

  return (
    <div className="space-y-24 pb-24">
      <Hero onCtaClick={scrollToCheckout} />

      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">What's Inside the Nexus?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">This isn't just another ebook. It's a complete operating system for your digital career.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-slate-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-600 py-24 text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl sm:text-5xl font-black mb-8 leading-tight">Built for the New Generation of Entrepreneurs.</h2>
          <p className="text-blue-100 text-xl mb-12 italic leading-relaxed">
            "This book was the catalyst I needed. I launched my first product in 14 days and made my first sale 3 hours later. The ROI is insane. It's the only guide you'll ever need."
          </p>
          <div className="flex flex-col items-center">
            <img src="https://picsum.photos/seed/user1/100/100" className="w-20 h-20 rounded-full border-4 border-white mb-4 shadow-lg" alt="Alex Rivera" />
            <div>
              <p className="font-bold text-lg">Alex Rivera</p>
              <p className="text-blue-200">Founder, DesignLab</p>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">Wall of Love</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Join thousands of readers who are already building their digital empires.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </div>
      </section>

      <section ref={checkoutRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CheckoutForm price={299} />
      </section>

      <section id="faq" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            { q: "Is this for beginners?", a: "Yes, it covers everything from basic setup to advanced scaling techniques." },
            { q: "How do I get the book?", a: "Instantly via email and the success page right after payment." },
            { q: "Is there a refund policy?", a: "Due to the digital nature of the product, we offer a 100% satisfaction guarantee or support until you succeed." }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-2">{item.q}</h4>
              <p className="text-slate-600">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SalesPage;