import React from 'react';

export default function InviteProcess() {
  const process = [
    { id: '01', title: 'REQUEST', desc: 'Parent submits an application.' },
    { id: '02', title: 'EVALUATE', desc: 'We understand the student\'s current needs and goals.' },
    { id: '03', title: 'INVITE', desc: 'If Growtopper is a suitable fit, the family receives an invitation.' },
    { id: '04', title: 'ENROLL', desc: 'Parent confirms participation.' },
    { id: '05', title: 'START', desc: 'The student begins the 30-Day Growth Challenge.' }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#111115] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#6610F2]/10 blur-3xl rounded-full -z-10 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-[44px] leading-tight font-bold mb-6">
            We Don't Accept Every Student.<br className="hidden md:block"/> We Accept Students We Believe We Can Help.
          </h2>
          <p className="text-gray-400 font-medium">
            Invite-only access exists to maintain program quality and personalized attention.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6">
            {process.map((step, i) => (
              <div key={i} className="flex-1 bg-[#1C1C22] rounded-3xl p-6 md:p-8 border border-gray-800 shadow-xl relative group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent to-transparent group-hover:from-[#6610F2] group-hover:to-[#4D43F5] transition-all rounded-t-3xl"></div>
                <div className="text-[#6610F2] font-bold text-sm tracking-widest mb-4">{step.id}</div>
                <h3 className="text-white font-bold mb-2 tracking-wide uppercase">{step.title}</h3>
                <p className="text-gray-400 text-sm font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
