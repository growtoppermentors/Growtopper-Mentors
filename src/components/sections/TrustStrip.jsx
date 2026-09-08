import React from 'react';
import { Sparkles } from 'lucide-react';

export default function TrustStrip() {
  return (
    <div className="border-y border-brand-border bg-brand-surface py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              {[1,2,3,4,5].map(i => (
                <img key={i} src={`https://i.pravatar.cc/100?img=${i+20}`} className="w-10 h-10 rounded-full border-2 border-white" alt="Parent" />
              ))}
            </div>
            <div>
              <div className="flex gap-1 text-[#FFB800] mb-0.5">
                {[1,2,3,4,5].map(i => <Sparkles key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-sm font-bold text-brand-dark">Trusted by 500+ parents</p>
            </div>
          </div>

          <div className="h-px md:h-12 w-full md:w-px bg-brand-border hidden md:block"></div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-60 grayscale">
            <div className="font-black text-xl tracking-tighter">THE TIMES OF INDIA</div>
            <div className="font-black text-xl tracking-tighter">Hindustan Times</div>
            <div className="font-black text-xl tracking-tighter">YOURSTORY</div>
          </div>

        </div>
      </div>
    </div>
  );
}
