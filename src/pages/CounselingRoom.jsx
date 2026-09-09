import React, { useState, useEffect, useRef } from 'react';
import { Send, Sparkles, User, BrainCircuit, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CounselingRoom() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { role: 'system', content: 'Hi! I am your AI Career Counselor. To help find your perfect career path, I have a few fun questions for you. Ready to start? First, what are 2 or 3 things you absolutely love doing in your free time?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const newMessages = [...messages, { role: 'user', content: input.trim() }];
    setMessages(newMessages);
    setInput('');
    setIsTyping(true);

    // TODO: Send to Supabase Edge Function (OpenAI)
    // Simulate AI response for now
    setTimeout(() => {
      setIsTyping(false);
      if (newMessages.length === 2) {
        setMessages([...newMessages, { role: 'system', content: "That's awesome! Those are great hobbies. Now, out of all the subjects you study in school, which one do you find the most interesting, and why?" }]);
      } else if (newMessages.length === 4) {
        setMessages([...newMessages, { role: 'system', content: "Interesting choice! Last question before I build your report: If you could solve any one big problem in the world right now, what would it be?" }]);
      } else {
        setMessages([...newMessages, { role: 'system', content: "Thank you for sharing! I have enough information to build your personalized Career Roadmap.", isFinished: true }]);
      }
    }, 1500);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 font-sans text-gray-900">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shrink-0">
        <button onClick={() => navigate('/career')} className="text-gray-500 hover:text-gray-900 font-bold text-sm flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-purple to-purple-400 flex items-center justify-center text-white shadow-sm">
            <BrainCircuit className="w-4 h-4" />
          </div>
          <span className="font-black tracking-tight text-lg">Growtopper AI</span>
        </div>
        <div className="w-16"></div> {/* Spacer for centering */}
      </header>

      {/* Chat Area */}
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
            <div className={`max-w-[80%] rounded-2xl px-5 py-3.5 shadow-sm text-[15px] leading-relaxed font-medium ${
              msg.role === 'system' 
                ? 'bg-white border border-gray-100 text-gray-800 rounded-tl-none' 
                : 'bg-brand-purple text-white rounded-tr-none'
            }`}>
              {msg.content}
              
              {msg.isFinished && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button onClick={() => navigate('/report')} className="w-full py-3 bg-brand-dark text-white rounded-xl font-bold hover:bg-gray-800 transition-colors">
                    Generate My Report ⚡
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
      <div className="bg-white border-t border-gray-200 p-4 shrink-0">
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
            className="absolute right-3 bottom-3 p-2 rounded-xl bg-brand-purple text-white hover:bg-brand-purple/90 disabled:opacity-50 transition-all"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
        <p className="text-center text-xs text-gray-400 font-medium mt-3">
          AI can make mistakes. Growtopper mentors will review your final report.
        </p>
      </div>
    </div>
  );
}
