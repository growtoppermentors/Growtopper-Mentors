import React, { useState, useEffect } from 'react';

const NAMES = [
  "Aarav", "Aditi", "Aditya", "Akshay", "Ananya", "Aniket", "Anjali", "Ansh", "Anushka", "Aryan",
  "Ayush", "Bhavya", "Chaitanya", "Deepak", "Dev", "Dhruv", "Diya", "Gaurav", "Gauri", "Harsh",
  "Hrithik", "Ishaan", "Ishita", "Janvi", "Kabir", "Karan", "Karthik", "Kavya", "Kiara", "Krish",
  "Kriti", "Lakshya", "Madhav", "Manish", "Meera", "Mihir", "Myra", "Nakul", "Neha", "Nikhil",
  "Nisha", "Nitin", "Om", "Palak", "Parth", "Pooja", "Pranav", "Pratham", "Pratik", "Priya",
  "Priyanka", "Rahul", "Raj", "Rajat", "Riya", "Rohan", "Rohit", "Ruchi", "Rudrash", "Sahil",
  "Samar", "Sameer", "Sanjay", "Sanya", "Sarthak", "Saurabh", "Shikha", "Shivam", "Shreya", "Shruti",
  "Siddharth", "Simran", "Sneha", "Soham", "Sonal", "Soumya", "Sparsh", "Srishti", "Surya", "Tanmay",
  "Tanya", "Tarun", "Tejas", "Trisha", "Uday", "Utkarsh", "Vaibhav", "Varun", "Vedant", "Vidhi",
  "Vidyut", "Vikas", "Vinay", "Virat", "Vishal", "Vivek", "Yash", "Yuvraj", "Zara", "Zoya"
];

const CITIES = [
  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Pune", 
  "Chennai", "Kolkata", "Ahmedabad", "Jaipur", "Surat",
  "Lucknow", "Chandigarh", "Indore", "Nagpur", "Patna",
  "Bhopal", "Vadodara", "Ludhiana", "Agra", "Nashik"
];

const ACTIONS = [
  "booked a Clarity Session",
  "unlocked their AI Growth Report",
  "started the AI SWOT Test",
  "scheduled a 1-on-1 Mentor Call",
  "requested an invite",
  "secured a spot in the next cohort",
  "completed the AI Career Assessment",
  "upgraded to the premium roadmap",
  "downloaded their personalized plan",
  "joined the Growtopper community",
  "claimed the ₹299 special offer",
  "booked a strategy call with a founder",
  "is analyzing their 10 growth parameters",
  "took the first step towards clarity",
  "locked in their 1-on-1 video call",
  "received their academic roadmap",
  "finished the Growtch AI interview",
  "verified their student profile",
  "unlocked their custom study strategy",
  "is discovering their true zone of genius"
];

// Pre-generate a shuffled list of 100 unique notifications so they don't repeat quickly
const generateNotifications = () => {
  const shuffledNames = [...NAMES].sort(() => 0.5 - Math.random());
  return shuffledNames.map(name => ({
    name: `${name}'s parent`,
    city: CITIES[Math.floor(Math.random() * CITIES.length)],
    action: ACTIONS[Math.floor(Math.random() * ACTIONS.length)]
  }));
};

const NOTIFICATIONS = generateNotifications();

export default function LiveNotification() {
  const [current, setCurrent] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let localIndex = 0; // use local variable for timeout closures

    const showNext = () => {
      if (!isMounted) return;
      const notification = NOTIFICATIONS[localIndex % NOTIFICATIONS.length];
      setCurrent(notification);
      setIsVisible(true);
      localIndex++;

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
