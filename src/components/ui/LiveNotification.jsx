import React, { useState, useEffect } from 'react';

const NOTIFICATIONS = [
  { name: "Rohan's parent", city: 'Delhi', action: 'requested an invite' },
  { name: "Priya's parent", city: 'Mumbai', action: 'secured a cohort seat' },
  { name: "Aarav's parent", city: 'Bangalore', action: 'requested an invite' },
  { name: "Sneha's parent", city: 'Pune', action: 'just applied for grade 9' },
  { name: "Kabir's parent", city: 'Hyderabad', action: 'requested an invite' },
  { name: "Ananya's parent", city: 'Chennai', action: 'just applied for grade 7' },
  { name: "Vihaan's parent", city: 'Gurgaon', action: 'secured a cohort seat' },
  { name: "A Parent", city: 'Ahmedabad', action: 'requested an invite' },
  { name: "Kavya's parent", city: 'Kolkata', action: 'just applied for grade 8' }
];

export default function LiveNotification() {
  const [current, setCurrent] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let hideTimeout;
    let nextTimeout;
    let isMounted = true;

    const showNext = () => {
      if (!isMounted) return;
      const random = NOTIFICATIONS[Math.floor(Math.random() * NOTIFICATIONS.length)];
      setCurrent(random);
      setIsVisible(true);

      // Hide after 5 seconds
      hideTimeout = setTimeout(() => {
        if (!isMounted) return;
        setIsVisible(false);
        
        // Schedule next one randomly between 12 to 25 seconds
        const nextDelay = Math.floor(Math.random() * (25000 - 12000 + 1) + 12000);
        nextTimeout = setTimeout(() => {
          showNext();
        }, nextDelay);
        
      }, 5000);
    };

    // Initial delay before showing first notification (12 seconds)
    const initialTimer = setTimeout(() => {
      showNext();
    }, 12000);

    return () => {
      isMounted = false;
      clearTimeout(initialTimer);
      clearTimeout(hideTimeout);
      clearTimeout(nextTimeout);
    };
  }, []);

  return (
    <div 
      className={`fixed z-[90] bottom-4 left-4 right-4 sm:right-auto sm:bottom-6 sm:left-6 transition-all duration-700 ease-out pointer-events-none flex justify-center sm:justify-start ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <div className="bg-white/95 backdrop-blur-md border border-gray-200/60 shadow-[0_12px_40px_rgba(0,0,0,0.08)] rounded-[20px] p-3 sm:p-4 flex items-center gap-3.5 sm:gap-4 max-w-[340px] sm:max-w-[380px] w-full pointer-events-auto">
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center shrink-0 shadow-inner shadow-white/20">
          <svg className="w-5 h-5 sm:w-5 sm:h-5 text-white drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div className="flex flex-col">
          <p className="text-[13px] sm:text-[14px] text-[#111115] font-black leading-tight tracking-tight">
            {current?.name} <span className="text-gray-500 font-medium">from {current?.city}</span>
          </p>
          <p className="text-[12px] sm:text-[13px] text-brand-purple font-bold tracking-tight mt-0.5">
            {current?.action}
          </p>
        </div>
      </div>
    </div>
  );
}
