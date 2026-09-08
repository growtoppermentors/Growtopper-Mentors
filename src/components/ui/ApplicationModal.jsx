import React, { useState, useEffect } from 'react';
import { 
  X, ArrowRight, ArrowLeft, CheckCircle2, Phone, User, 
  GraduationCap, BookOpen, Building, Mail, Calendar, Clock, Lock
} from 'lucide-react';
import { supabase } from '../../supabase';

export default function ApplicationModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState('');
  
  const [studentName, setStudentName] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [board, setBoard] = useState('');
  
  const [school, setSchool] = useState('');
  const [parentName, setParentName] = useState('');
  const [city, setCity] = useState('');

  const [email, setEmail] = useState('');
  const [callDate, setCallDate] = useState('');
  const [callTime, setCallTime] = useState('');
  
  const [otp, setOtp] = useState('');
  const [otpSending, setOtpSending] = useState(false);
  const [otpVerifying, setOtpVerifying] = useState(false);
  const [error, setError] = useState('');
  
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    // Auto-fetch city based on IP location silently
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (data.city) setCity(data.city);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setStep(1);
      setAnimationKey(1);
      setPhone('');
      setStudentName('');
      setStudentClass('');
      setBoard('');
      setSchool('');
      setParentName('');
      setEmail('');
      setCallDate('');
      setCallTime('');
      setOtp('');
      setError('');
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [isOpen]);

  const goToNextStep = (nextStep) => {
    setAnimationKey(prev => prev + 1);
    setStep(nextStep);
  };

  const goToPrevStep = () => {
    setAnimationKey(prev => prev + 1);
    setStep(prev => prev - 1);
  };

  if (!isOpen) return null;

  const validatePhone = (num) => /^[6-9]\d{9}$/.test(num);
  const validateEmail = (mail) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);

  const handlePhoneSubmit = async (e) => {
    e.preventDefault();
    if (!validatePhone(phone)) {
      setError('Enter a valid 10-digit number (starts with 6-9).');
      return;
    }
    setError('');
    // Check for duplicate phone
    if (supabase) {
      const { data } = await supabase
        .from('applications')
        .select('id')
        .eq('phone', phone)
        .maybeSingle();
      if (data) {
        setError('already_submitted');
        return;
      }
    }
    goToNextStep(2);
  };

  const handleStudentSubmit = (e) => {
    e.preventDefault();
    goToNextStep(3);
  };

  const handleParentSubmit = (e) => {
    e.preventDefault();
    goToNextStep(4);
  };

  // Send real OTP via Supabase
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Enter a valid email.');
      return;
    }
    setError('');
    // Check for duplicate email
    if (supabase) {
      const { data } = await supabase
        .from('applications')
        .select('id')
        .eq('email', email)
        .maybeSingle();
      if (data) {
        setError('already_submitted');
        return;
      }
    }
    setOtpSending(true);
    try {
      if (supabase) {
        const { error: otpError } = await supabase.auth.signInWithOtp({
          email: email.trim().toLowerCase(),
          options: { shouldCreateUser: true },
        });
        if (otpError) throw otpError;
      }
      goToNextStep(5);
    } catch (err) {
      setError('Failed to send OTP. Please try again.');
    } finally {
      setOtpSending(false);
    }
  };

  const handleResendOtp = async () => {
    setError('');
    setOtpSending(true);
    try {
      if (supabase) {
        const { error: otpError } = await supabase.auth.signInWithOtp({
          email: email.trim().toLowerCase(),
          options: { shouldCreateUser: true },
        });
        if (otpError) throw otpError;
      }
      // Give some visual feedback that it worked instead of a raw alert if possible, but simple alert is ok for now.
    } catch (err) {
      setError('Failed to resend OTP. Please try again.');
    } finally {
      setOtpSending(false);
    }
  };

  // Verify real Supabase OTP
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    if (otp.length < 6) {
      setError('Enter the 6-digit OTP sent to your email.');
      return;
    }
    setError('');
    setOtpVerifying(true);
    try {
      if (supabase) {
        let { error: verifyError } = await supabase.auth.verifyOtp({
          email: email.trim().toLowerCase(),
          token: otp.trim(),
          type: 'email',
        });
        
        if (verifyError) {
          const { error: magicError } = await supabase.auth.verifyOtp({
            email: email.trim().toLowerCase(),
            token: otp.trim(),
            type: 'magiclink',
          });
          verifyError = magicError;
        }

        if (verifyError) {
          const { error: signupError } = await supabase.auth.verifyOtp({
            email: email.trim().toLowerCase(),
            token: otp.trim(),
            type: 'signup',
          });
          verifyError = signupError;
        }

        if (verifyError) throw verifyError;
      }

      // Save application to Supabase
      if (supabase) {
        await supabase.from('applications').insert([{
          phone,
          email,
          student_name: studentName,
          student_class: studentClass,
          board,
          school,
          parent_name: parentName,
          city,
          call_date: callDate,
          call_time: callTime,
        }]).catch(() => {});
      }

      goToNextStep(6);
    } catch (err) {
      console.error('OTP Verification Error:', err);
      setError('Invalid OTP. Please check your email and try again.');
    } finally {
      setOtpVerifying(false);
    }
  };

  // Mobile-first highly compact inputs
  const inputClass = "w-full pl-10 pr-3 py-3 sm:py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple focus:bg-white outline-none transition-all font-semibold text-brand-dark shadow-sm text-sm sm:text-base";
  const labelClass = "block text-[11px] sm:text-xs font-bold text-gray-700 mb-1.5 ml-1";
  const iconClass = "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-brand-purple transition-colors";
  
  // Clean fade & slight zoom transition (removes horizontal scroll jitter)
  const animClass = "animate-in fade-in zoom-in-[0.98] duration-300 ease-out fill-mode-both";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      
      <div className="relative bg-white w-full max-w-[440px] rounded-[24px] sm:rounded-[32px] shadow-2xl z-10 flex flex-col">
        
        {/* Absolute Header for Back & Close Buttons (Keeps them out of document flow) */}
        <div className="absolute top-0 left-0 right-0 h-14 flex items-center justify-between px-4 sm:px-5 z-20 mt-1 sm:mt-2">
          {step > 1 && step < 6 ? (
            <button 
              onClick={goToPrevStep} 
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700 font-bold text-[13px] shadow-sm border border-gray-200/50"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
          ) : <div></div>}
          
          {step !== 6 && (
            <button onClick={onClose} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors border border-gray-200/50 shadow-sm">
              <X className="w-5 h-5 text-gray-600" />
            </button>
          )}
        </div>

        {/* Content Container */}
        <div className="p-5 sm:p-8 pt-14 sm:pt-16 pb-6 sm:pb-8">
          
          <div key={animationKey} className={animClass}>
            
            {/* STEP 1: Phone */}
            {step === 1 && (
              <div>
                <div className="mb-6 text-center sm:text-left">
                  <div className="hidden sm:flex w-12 h-12 bg-brand-purple/10 rounded-2xl items-center justify-center mb-5 mx-auto sm:mx-0">
                    <Phone className="w-6 h-6 text-brand-purple" />
                  </div>
                  <h2 className="text-[22px] sm:text-[26px] font-black mb-1.5 text-brand-dark tracking-tight">Request Invite Only Access</h2>
                  <p className="text-gray-600 text-[13px] sm:text-[14px] font-medium">Enter your mobile number to get started.</p>
                </div>

                <form onSubmit={handlePhoneSubmit} className="space-y-5">
                  <div>
                    <label className={labelClass}>Mobile Number</label>
                    <div className="flex border border-gray-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-brand-purple/20 focus-within:border-brand-purple focus-within:bg-white transition-all bg-gray-50 shadow-sm group">
                      <div className="px-4 py-3 sm:py-3.5 bg-brand-purple/5 border-r border-gray-200 text-brand-purple font-black flex items-center group-focus-within:bg-brand-purple/10 transition-colors text-sm sm:text-base">
                        +91
                      </div>
                      <input 
                        required 
                        type="tel" 
                        placeholder="10-digit number"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value.replace(/\D/g, '').slice(0, 10));
                          setError('');
                        }}
                        className="w-full px-4 py-3 sm:py-3.5 bg-transparent outline-none font-bold text-base sm:text-lg text-brand-dark tracking-wide" 
                      />
                    </div>
                    {error && error !== 'already_submitted' && <p className="text-red-500 text-[11px] font-bold mt-1.5 ml-1">{error}</p>}
                  </div>

                  {error === 'already_submitted' ? (
                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-center">
                      <div className="text-2xl mb-2">🙏</div>
                      <p className="font-black text-amber-800 text-[15px] mb-1">Already Received!</p>
                      <p className="text-amber-700 text-[13px] font-medium leading-relaxed">You've already submitted your application with this number. Our mentor team will get back to you shortly — please wait!</p>
                    </div>
                  ) : (
                    <button type="submit" disabled={phone.length < 10} className="w-full py-3.5 rounded-xl bg-brand-purple hover:bg-brand-purple/90 text-white font-bold text-[14px] sm:text-[15px] transition-all flex items-center justify-center gap-2 disabled:opacity-50 shadow-md active:scale-[0.98]">
                      Continue <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </form>
              </div>
            )}

            {/* STEP 2: Student Basics */}
            {step === 2 && (
              <div>
                <div className="mb-6 text-center sm:text-left">
                  <div className="hidden sm:flex w-12 h-12 bg-brand-purple/10 rounded-2xl items-center justify-center mb-5 mx-auto sm:mx-0">
                    <User className="w-6 h-6 text-brand-purple" />
                  </div>
                  <h2 className="text-[22px] sm:text-[26px] font-black mb-1.5 text-brand-dark tracking-tight">Student Info</h2>
                  <p className="text-gray-600 text-[13px] sm:text-[14px] font-medium">Let's personalize this for your child.</p>
                </div>

                <form onSubmit={handleStudentSubmit} className="space-y-4">
                  <div className="relative group">
                    <label className={labelClass}>Student Name</label>
                    <User className={iconClass} />
                    <input required type="text" value={studentName} onChange={(e)=>setStudentName(e.target.value)} className={inputClass} placeholder="E.g. Rohan" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative group">
                      <label className={labelClass}>Class / Grade</label>
                      <GraduationCap className={iconClass} />
                      <select required value={studentClass} onChange={(e)=>setStudentClass(e.target.value)} className={`${inputClass} appearance-none`}>
                        <option value="">Select</option>
                        {[6,7,8,9,10,11,12].map(g => <option key={g} value={g}>Class {g}</option>)}
                      </select>
                    </div>
                    <div className="relative group">
                      <label className={labelClass}>Board</label>
                      <BookOpen className={iconClass} />
                      <select required value={board} onChange={(e)=>setBoard(e.target.value)} className={`${inputClass} appearance-none`}>
                        <option value="">Select</option>
                        <option value="CBSE">CBSE</option>
                        <option value="ICSE">ICSE</option>
                        <option value="State">State</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button type="submit" className="w-full py-3.5 rounded-xl bg-brand-purple hover:bg-brand-purple/90 text-white font-bold text-[14px] sm:text-[15px] transition-all flex items-center justify-center gap-2 shadow-md active:scale-[0.98]">
                      Next Step <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* STEP 3: School & Parent */}
            {step === 3 && (
              <div>
                <div className="mb-6 text-center sm:text-left">
                  <div className="hidden sm:flex w-12 h-12 bg-brand-purple/10 rounded-2xl items-center justify-center mb-5 mx-auto sm:mx-0">
                    <Building className="w-6 h-6 text-brand-purple" />
                  </div>
                  <h2 className="text-[22px] sm:text-[26px] font-black mb-1.5 text-brand-dark tracking-tight">Almost there!</h2>
                  <p className="text-gray-600 text-[13px] sm:text-[14px] font-medium">Just a few more details.</p>
                </div>

                <form onSubmit={handleParentSubmit} className="space-y-4">
                  <div className="relative group">
                    <label className={labelClass}>School Name</label>
                    <Building className={iconClass} />
                    <input required type="text" value={school} onChange={(e)=>setSchool(e.target.value)} className={inputClass} placeholder="Enter school name" />
                  </div>

                  <div className="relative group">
                    <label className={labelClass}>Parent Name</label>
                    <User className={iconClass} />
                    <input required type="text" value={parentName} onChange={(e)=>setParentName(e.target.value)} className={inputClass} placeholder="Your full name" />
                  </div>

                  <div className="relative group">
                    <label className={labelClass}>City</label>
                    <Building className={iconClass} />
                    <input 
                      required 
                      type="text" 
                      list="cities"
                      value={city} 
                      onChange={(e)=>setCity(e.target.value)} 
                      className={inputClass} 
                      placeholder="e.g. Bhubaneswar" 
                    />
                    <datalist id="cities">
                      <option value="Bhubaneswar" />
                      <option value="Mumbai" />
                      <option value="Delhi" />
                      <option value="Bengaluru" />
                      <option value="Hyderabad" />
                      <option value="Chennai" />
                      <option value="Kolkata" />
                      <option value="Pune" />
                    </datalist>
                  </div>

                  <div className="pt-2 flex gap-3">
                    <button type="button" onClick={goToPrevStep} className="px-5 py-3.5 rounded-xl border border-gray-200 text-gray-600 font-bold hover:bg-gray-50 transition-colors">
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <button type="submit" className="flex-1 py-3.5 rounded-xl bg-brand-purple hover:bg-brand-purple/90 text-white font-bold text-[14px] sm:text-[15px] transition-all flex items-center justify-center gap-2 shadow-md active:scale-[0.98]">
                      Next Step <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* STEP 4: Email & Slot */}
            {step === 4 && (
              <div>
                <div className="mb-6 text-center sm:text-left">
                  <div className="hidden sm:flex w-12 h-12 bg-brand-purple/10 rounded-2xl items-center justify-center mb-5 mx-auto sm:mx-0">
                    <Calendar className="w-6 h-6 text-brand-purple" />
                  </div>
                  <h2 className="text-[22px] sm:text-[26px] font-black mb-1.5 text-brand-dark tracking-tight">Schedule Call</h2>
                  <p className="text-gray-600 text-[13px] sm:text-[14px] font-medium">When should our mentor reach you?</p>
                </div>

                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <div className="relative group">
                    <label className={labelClass}>Your Email Address</label>
                    <Mail className={iconClass} />
                    <input 
                      required 
                      type="email" 
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setError(''); }}
                      className={inputClass} 
                    />
                    {error && <p className="text-red-500 text-[11px] font-bold mt-1.5 ml-1">{error}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative group">
                      <label className={labelClass}>Date</label>
                      <Calendar className={iconClass} />
                      <input required type="date" min={new Date().toISOString().split("T")[0]} value={callDate} onChange={(e) => setCallDate(e.target.value)} className={inputClass} style={{colorScheme: 'light'}} />
                    </div>
                    <div className="relative group">
                      <label className={labelClass}>Exact Time</label>
                      <Clock className={iconClass} />
                      <input required type="time" value={callTime} onChange={(e) => setCallTime(e.target.value)} className={inputClass} style={{colorScheme: 'light'}} />
                    </div>
                  </div>

                  <div className="pt-2">
                    {error === 'already_submitted' ? (
                      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-center">
                        <div className="text-2xl mb-2">🙏</div>
                        <p className="font-black text-amber-800 text-[15px] mb-1">Already Received!</p>
                        <p className="text-amber-700 text-[13px] font-medium leading-relaxed">This email is already registered. Our mentor team will get back to you shortly — please wait!</p>
                      </div>
                    ) : (
                      <button type="submit" disabled={otpSending} className="w-full py-3.5 rounded-xl bg-brand-purple hover:bg-brand-purple/90 text-white font-bold text-[14px] sm:text-[15px] transition-all flex items-center justify-center gap-2 shadow-md active:scale-[0.98] disabled:opacity-60">
                        {otpSending ? (
                          <><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></span> Sending OTP…</>
                        ) : (
                          <>Send OTP <ArrowRight className="w-4 h-4" /></>
                        )}
                      </button>
                    )}
                  </div>
                </form>
              </div>
            )}

            {/* STEP 5: OTP */}
            {step === 5 && (
              <div>
                <div className="mb-6 text-center sm:text-left">
                  <div className="hidden sm:flex w-12 h-12 bg-brand-purple/10 rounded-2xl items-center justify-center mb-5 mx-auto sm:mx-0">
                    <Lock className="w-6 h-6 text-brand-purple" />
                  </div>
                  <h2 className="text-[22px] sm:text-[26px] font-black mb-1.5 text-brand-dark tracking-tight">Verify Email</h2>
                  <p className="text-gray-600 text-[13px] sm:text-[14px] font-medium">We've sent a <strong className="text-brand-dark">6-digit code</strong> to <strong className="text-brand-dark">{email}</strong>. Check your inbox.</p>
                </div>

                <form onSubmit={handleOtpSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-3 text-center">Enter your 6-digit OTP</label>
                    
                    <div className="relative w-full max-w-[340px] mx-auto">
                      <input 
                        required 
                        autoFocus
                        type="text"
                        inputMode="numeric"
                        maxLength={6}
                        value={otp}
                        onChange={(e) => { setOtp(e.target.value.replace(/\D/g, '').slice(0, 6)); setError(''); }}
                        className="absolute inset-0 w-full h-full opacity-0 z-10 cursor-text tracking-widest text-transparent" 
                      />
                      <div className="flex gap-2 sm:gap-3 justify-between pointer-events-none">
                        {[0, 1, 2, 3, 4, 5].map((i) => (
                          <div 
                            key={i} 
                            className={`w-11 h-14 sm:w-12 sm:h-16 flex items-center justify-center rounded-xl text-2xl font-black transition-all ${
                              otp[i] 
                                ? 'bg-white border-2 border-brand-purple text-brand-dark shadow-md transform scale-105' 
                                : 'bg-gray-50 border border-gray-200 text-gray-300'
                            }`}
                          >
                            {otp[i] || '•'}
                          </div>
                        ))}
                      </div>
                    </div>

                    {error && <p className="text-red-500 text-[11px] font-bold mt-4 text-center animate-in slide-in-from-top-1">{error}</p>}
                  </div>

                  <div className="pt-1 space-y-3">
                    <button type="submit" disabled={otp.length < 6 || otpVerifying} className="w-full py-3.5 rounded-xl bg-brand-purple hover:bg-brand-purple/90 text-white font-bold text-[14px] sm:text-[15px] transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-50 active:scale-[0.98]">
                      {otpVerifying ? (
                        <><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></span> Verifying…</>
                      ) : (
                        'Verify & Confirm'
                      )}
                    </button>
                    <div className="text-center">
                      <button 
                        type="button" 
                        onClick={handleResendOtp}
                        disabled={otpSending}
                        className="text-[13px] font-bold text-gray-500 hover:text-brand-purple transition-colors disabled:opacity-50"
                      >
                        {otpSending ? 'Sending...' : "Didn't receive code? Resend OTP"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}

            {/* STEP 6: Success Screen */}
            {step === 6 && (
              <div className="text-center py-4 flex flex-col items-center">
                <div className="w-20 h-20 bg-[#E8E2FF] rounded-full flex items-center justify-center mb-5 animate-in zoom-in duration-500 delay-100">
                  <div className="w-12 h-12 bg-brand-purple rounded-full flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <h2 className="text-[26px] sm:text-[32px] font-black mb-3 text-brand-dark tracking-tight leading-tight">
                  Invite Requested!
                </h2>
                
                <div className="bg-gray-50 rounded-xl p-5 mb-6 border border-gray-100 shadow-sm w-full">
                  <p className="text-gray-600 text-[13px] sm:text-[14px] font-medium leading-relaxed">
                    Confirmed! A mentor will call you on <strong className="text-brand-dark block text-base mt-1.5">{callDate ? new Date(callDate).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' }) : ''} at {callTime ? new Date(`2000-01-01T${callTime}`).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }) : ''}</strong> 
                    <span className="block mt-1.5">to discuss a growth plan for <strong className="text-brand-dark">{studentName}</strong>.</span>
                  </p>
                </div>
                
                <button 
                  onClick={onClose}
                  className="w-full py-3.5 rounded-xl bg-brand-dark hover:bg-black text-white font-bold text-[14px] sm:text-[15px] transition-all active:scale-[0.98] shadow-md"
                >
                  Return to Home
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
