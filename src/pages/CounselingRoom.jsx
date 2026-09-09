import React, { useState, useEffect, useRef } from 'react';
import { Send, Sparkles, User, BrainCircuit, ArrowLeft, Compass, Rocket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CounselingRoom() {
  const navigate = useNavigate();
  const [step, setStep] = useState('selection'); // 'selection' | 'chat'
  const [path, setPath] = useState(null); // 'discover' | 'execute'
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const startChat = (selectedPath) => {
    setPath(selectedPath);
    setStep('chat');
    
    if (selectedPath === 'discover') {
      setMessages([
        { role: 'system', content: "Hi! I am Growtch AI. Don't worry if you feel lost—that's what I'm here for! Over the next 30 minutes, I'll ask you a series of questions to figure out your true zone of genius.\n\nFirst question: What are 2 or 3 things you absolutely love doing in your free time, even if they don't seem related to school?" }
      ]);
    } else {
      setMessages([
        { role: 'system', content: "Hi! I am Growtch AI. It's awesome that you already have a goal in mind!\n\nTell me, what exactly do you want to be? And what grade/class are you currently in right now?" }
      ]);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (step === 'chat') {
      scrollToBottom();
    }
  }, [messages, isTyping, step]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', content: input.trim() }];
    setMessages(newMessages);
    setInput('');
    setIsTyping(true);

    // Simulate AI response based on path
    setTimeout(() => {
      setIsTyping(false);
      
      if (path === 'discover') {
        if (newMessages.length === 2) {
          setMessages([...newMessages, { role: 'system', content: "That's a great start. Knowing what you enjoy is step one. Now, out of all the subjects you study in school, which one feels the most natural to you, and why?" }]);
        } else {
          setMessages([...newMessages, { role: 'system', content: "Thank you! I am building your personalized 30-minute assessment now. (Demo: Click Generate Report below)", isFinished: true }]);
        }
      } else {
        if (newMessages.length === 2) {
          setMessages([...newMessages, { role: 'system', content: "That's an incredible ambition. To achieve that, you need a highly strategic execution plan. What is your biggest weakness or distraction currently stopping you from focusing on this goal?" }]);
        } else {
          setMessages([...newMessages, { role: 'system', content: "I have analyzed the modern landscape for your goal and your current grade. I have prepared your step-by-step execution roadmap.", isFinished: true }]);
        }
      }
    }, 1500);
  };

  return (
    <div className="flex flex-col h-screen bg-[#F8F9FE] font-sans text-gray-900">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4 flex items-center justify-between shrink-0 shadow-sm relative z-10">
        <button onClick={() => navigate('/career')} className="text-gray-500 hover:text-gray-900 font-bold text-sm flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-purple to-purple-400 flex items-center justify-center text-white shadow-sm">
            <BrainCircuit className="w-4 h-4" />
          </div>
          <span className="font-black tracking-tight text-lg">Growtch AI</span>
        </div>
        <div className="w-16"></div>
      </header>

      {/* Path Selection Screen */}
      {step === 'selection' && (
        <div className="flex-1 overflow-y-auto p-6 flex items-center justify-center">
          <div className="max-w-4xl w-full mx-auto">
            <h1 className="text-3xl sm:text-4xl font-black text-center mb-4">How can we help you today?</h1>
            <p className="text-gray-600 text-center mb-12 text-lg font-medium">Select your current situation so Growtch can adapt its counseling model.</p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              
              <button 
                onClick={() => startChat('discover')}
                className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-200 hover:border-brand-purple hover:shadow-xl hover:shadow-brand-purple/10 transition-all group text-left relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-purple-100 transition-colors"></div>
                <div className="w-14 h-14 bg-brand-purple/10 rounded-2xl flex items-center justify-center mb-6 text-brand-purple group-hover:scale-110 transition-transform relative z-10">
                  <Compass className="w-7 h-7" />
                </div>
                <h2 className="text-2xl font-black mb-3 relative z-10">I am completely blank.</h2>
                <p className="text-gray-600 font-medium relative z-10 leading-relaxed">
                  I don't know what I want to be. I need the AI to give me a 30-minute test and recommend the perfect career paths for me based on my personality.
                </p>
              </button>

              <button 
                onClick={() => startChat('execute')}
                className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-200 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition-all group text-left relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-blue-100 transition-colors"></div>
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform relative z-10">
                  <Rocket className="w-7 h-7" />
                </div>
                <h2 className="text-2xl font-black mb-3 relative z-10">I know my dream career.</h2>
                <p className="text-gray-600 font-medium relative z-10 leading-relaxed">
                  I already have a goal in mind. I need the AI to analyze my current grade and give me a strict step-by-step execution plan to actually achieve it.
                </p>
              </button>

            </div>
          </div>
        </div>
      )}

      {/* Chat Screen */}
      {step === 'chat' && (
        <>
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 max-w-3xl mx-auto w-full">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                {/* Avatar */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm ${
                  msg.role === 'system' ? 'bg-brand-purple text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {msg.role === 'system' ? <Sparkles className="w-5 h-5" /> : <User className="w-5 h-5" />}
                </div>
                
                {/* Message Bubble */}
                <div className={`max-w-[85%] sm:max-w-[80%] rounded-2xl px-5 py-3.5 shadow-sm text-[15px] leading-relaxed font-medium ${
                  msg.role === 'system' 
                    ? 'bg-white border border-gray-100 text-gray-800 rounded-tl-none whitespace-pre-wrap' 
                    : 'bg-brand-purple text-white rounded-tr-none whitespace-pre-wrap'
                }`}>
                  {msg.content}
                  
                  {msg.isFinished && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <button onClick={() => navigate('/report')} className="w-full py-3 bg-brand-dark text-white rounded-xl font-bold hover:bg-gray-800 transition-colors shadow-lg">
                        {path === 'discover' ? 'Generate Career Recommendations ⚡' : 'Generate My Execution Roadmap ⚡'}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-purple text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-none px-5 py-4 shadow-sm flex gap-1.5 items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: '0.15s' }}></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="bg-white border-t border-gray-200 p-4 shrink-0 shadow-[0_-10px_40px_rgba(0,0,0,0.03)]">
            <form onSubmit={handleSend} className="max-w-3xl mx-auto relative flex items-end gap-3">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend(e);
                  }
                }}
                placeholder="Type your answer here..."
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-5 pr-14 outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple resize-none text-[15px] font-medium"
                rows="2"
              />
              <button 
                type="submit"
                disabled={!input.trim()}
                className="absolute right-3 bottom-3 p-2 rounded-xl bg-brand-purple text-white hover:bg-brand-purple/90 disabled:opacity-50 transition-all shadow-md"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
            <p className="text-center text-xs text-gray-400 font-medium mt-3">
              Growtch AI can make mistakes. Growtopper mentors will personally review your final roadmap.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
