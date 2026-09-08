import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function DifferenceSection() {

  const testimonials = [
    {
      quote: "Growtopper completely changed how my child approaches studying. In just 30 days, we saw real discipline, a better routine, and most importantly — genuine confidence.",
      name: "Priya Sharma",
      role: "Parent of Grade 8 Student",
      avatar: "https://randomuser.me/api/portraits/women/43.jpg",
      gradient: "from-[#4E14F9]/10 via-[#B28BFF]/5 to-transparent",
      border: "border-[#4E14F9]/20",
      badgeColor: "bg-[#4E14F9]/10 text-[#4E14F9]",
      starColor: "text-[#4E14F9]",
    },
    {
      quote: "It's not just another tuition class. My son learned about finance, AI, and how to communicate better. These are skills school never teaches. Absolutely worth every rupee.",
      name: "Rahul Mehta",
      role: "Parent of Grade 10 Student",
      avatar: "https://randomuser.me/api/portraits/men/43.jpg",
      gradient: "from-[#E96614]/10 via-[#F69748]/5 to-transparent",
      border: "border-[#E96614]/20",
      badgeColor: "bg-[#E96614]/10 text-[#E96614]",
      starColor: "text-[#E96614]",
    },
    {
      quote: "My daughter was struggling with focus and clarity. After the 30-day program, she has a proper study plan, better grades, and she's even started her own small project. Incredible!",
      name: "Anjali Nair",
      role: "Parent of Grade 9 Student",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      gradient: "from-[#74AB55]/10 via-[#9DC67F]/5 to-transparent",
      border: "border-[#74AB55]/20",
      badgeColor: "bg-[#74AB55]/10 text-[#74AB55]",
      starColor: "text-[#74AB55]",
    },
    {
      quote: "The 1:1 mentorship was a game changer. Having someone hold my child accountable daily made all the difference. We'll definitely be back for the next cohort.",
      name: "Suresh Pillai",
      role: "Parent of Grade 11 Student",
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
      gradient: "from-[#9D68A1]/10 via-[#C49EC8]/5 to-transparent",
      border: "border-[#9D68A1]/20",
      badgeColor: "bg-[#9D68A1]/10 text-[#9D68A1]",
      starColor: "text-[#9D68A1]",
    },
  ];

  return (
    <section className="pt-14 md:pt-20 pb-14 md:pb-20 bg-[#F8F9FE]" id="results">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-purple/5 border border-brand-purple/10 text-brand-purple text-xs font-bold uppercase tracking-widest mb-5">
            Trusted By Parents
          </div>
          <h2 className="text-[36px] md:text-[48px] font-black text-brand-dark leading-[1.1] tracking-tight text-balance mb-4">
            Clear Progress. <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-purple-400">Brighter Futures.</span>
          </h2>
          <p className="text-gray-500 text-[17px] font-medium max-w-xl mx-auto text-balance">
            Real words from parents who watched their children transform in just 30 days.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`relative rounded-[28px] border ${t.border} bg-gradient-to-br ${t.gradient} bg-white overflow-hidden p-7 sm:p-8 flex flex-col gap-6 shadow-sm hover:shadow-lg transition-shadow duration-300 group`}
            >
              {/* Quote Icon */}
              <div className={`absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity`}>
                <Quote className="w-10 h-10" style={{ color: 'currentColor' }} />
              </div>

              {/* Stars */}
              <div className="flex gap-1">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className={`w-4 h-4 fill-current ${t.starColor}`} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-[15px] sm:text-[16px] font-medium leading-relaxed flex-1">
                "{t.quote}"
              </p>

              {/* Divider */}
              <div className={`h-px w-full ${t.border} border-t`}></div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-black text-brand-dark text-[14px]">{t.name}</div>
                  <div className={`text-[12px] font-bold px-2.5 py-0.5 rounded-full inline-block mt-1 ${t.badgeColor}`}>
                    {t.role}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom trust strip */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-center">
          <div className="flex flex-col items-center">
            <span className="text-[28px] font-black text-brand-dark">500+</span>
            <span className="text-[12px] font-bold text-gray-500 uppercase tracking-widest mt-0.5">Students Enrolled</span>
          </div>
          <div className="w-px h-10 bg-gray-200 hidden sm:block"></div>
          <div className="flex flex-col items-center">
            <span className="text-[28px] font-black text-brand-dark">4.9 / 5</span>
            <span className="text-[12px] font-bold text-gray-500 uppercase tracking-widest mt-0.5">Parent Rating</span>
          </div>
          <div className="w-px h-10 bg-gray-200 hidden sm:block"></div>
          <div className="flex flex-col items-center">
            <span className="text-[28px] font-black text-brand-dark">98%</span>
            <span className="text-[12px] font-bold text-gray-500 uppercase tracking-widest mt-0.5">Would Recommend</span>
          </div>
        </div>

      </div>
    </section>
  );
}
