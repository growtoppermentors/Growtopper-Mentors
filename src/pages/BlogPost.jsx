import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, Facebook, Twitter, Linkedin, Instagram, Link as LinkIcon } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { blogs } from '../data/blogs';

export default function BlogPost({ onRequestInvite }) {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const blog = blogs.find((b) => b.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center justify-center font-sans">
        <h1 className="text-4xl font-black text-brand-dark mb-4">Post Not Found</h1>
        <button onClick={() => navigate('/blog')} className="text-brand-purple font-bold hover:underline">
          &larr; Back to Blog
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-purple/20 selection:text-brand-purple">
      <Navbar onRequestInvite={onRequestInvite} />

      <main className="pt-24 md:pt-32 pb-24">
        
        {/* Article Header */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 md:mb-16">
          <Link to="/blog" className="inline-flex items-center gap-2 text-[13px] font-bold text-gray-400 hover:text-brand-purple transition-colors mb-8 md:mb-12">
            <ArrowLeft className="w-4 h-4" /> Back to all posts
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-[11px] font-black uppercase tracking-widest">{blog.category}</span>
            <span className="text-[13px] font-bold text-gray-400">{blog.readTime}</span>
          </div>
          
          <h1 className="text-[36px] md:text-[48px] lg:text-[56px] font-black text-brand-dark leading-[1.1] tracking-tight mb-8">
            {blog.title}
          </h1>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between py-6 border-y border-gray-100 gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-purple/5 overflow-hidden flex items-center justify-center border border-gray-100 shadow-sm">
                <img src={blog.authorAvatar} alt={blog.author} className="w-9 h-9 object-cover" />
              </div>
              <div>
                <div className="text-[15px] font-bold text-brand-dark">{blog.author}</div>
                <div className="text-[13px] font-medium text-gray-500">Published on {blog.date}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-[12px] font-bold text-gray-400 mr-2 uppercase tracking-widest hidden md:inline-block">Share</span>
              
              {/* LinkedIn */}
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#0A66C2] hover:text-white transition-colors" title="Share on LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>

              {/* Facebook */}
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#1877F2] hover:text-white transition-colors" title="Share on Facebook">
                <Facebook className="w-4 h-4" />
              </a>

              {/* Twitter / X */}
              <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(blog.title)}`} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-black hover:text-white transition-colors" title="Share on Twitter">
                <Twitter className="w-4 h-4" />
              </a>

              {/* Instagram (Copy Link Fallback since IG doesn't support web share intent) */}
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link copied to clipboard! You can now paste it on Instagram.');
                }}
                className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white transition-colors" 
                title="Share on Instagram (Copies Link)"
              >
                <Instagram className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-20">
          <div className="w-full h-[300px] md:h-[500px] lg:h-[600px] rounded-[24px] md:rounded-[40px] overflow-hidden shadow-2xl shadow-brand-purple/5">
            <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Article Body */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 
            Since we don't have @tailwindcss/typography, we write custom typography styles 
            specifically tailored for highly readable, premium SaaS blog rendering.
          */}
          <article 
            className="prose-custom text-[17px] md:text-[19px] leading-[1.8] text-[#333333]"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          <style dangerouslySetInnerHTML={{__html: `
            .prose-custom h2 {
              font-size: 1.875rem;
              line-height: 1.2;
              font-weight: 900;
              color: #111827;
              margin-top: 3rem;
              margin-bottom: 1.25rem;
              letter-spacing: -0.025em;
            }
            @media (min-width: 768px) {
              .prose-custom h2 { font-size: 2.25rem; }
            }
            .prose-custom h3 {
              font-size: 1.5rem;
              line-height: 1.3;
              font-weight: 800;
              color: #111827;
              margin-top: 2.5rem;
              margin-bottom: 1rem;
              letter-spacing: -0.015em;
            }
            .prose-custom p {
              margin-bottom: 1.75rem;
              color: #4b5563;
              font-weight: 500;
            }
            .prose-custom ul, .prose-custom ol {
              margin-top: 1.25rem;
              margin-bottom: 1.75rem;
              padding-left: 1.5rem;
              color: #4b5563;
              font-weight: 500;
            }
            .prose-custom li {
              margin-bottom: 0.75rem;
            }
            .prose-custom ul {
              list-style-type: disc;
            }
            .prose-custom ol {
              list-style-type: decimal;
            }
            .prose-custom blockquote {
              border-left: 4px solid #5B10FF;
              padding-left: 1.5rem;
              font-style: italic;
              font-size: 1.25rem;
              line-height: 1.6;
              color: #111827;
              font-weight: 700;
              margin-top: 2.5rem;
              margin-bottom: 2.5rem;
              background: linear-gradient(to right, rgba(91,16,255,0.05), transparent);
              padding-top: 1rem;
              padding-bottom: 1rem;
              border-top-right-radius: 0.5rem;
              border-bottom-right-radius: 0.5rem;
            }
            .prose-custom strong {
              color: #111827;
              font-weight: 800;
            }
            .prose-custom em {
              color: #5B10FF;
            }
          `}} />

          {/* Bottom CTA within Article */}
          <div className="mt-16 bg-[#F9F4FF] rounded-[24px] p-8 md:p-10 border border-brand-purple/10 text-center">
            <h3 className="text-[24px] font-black text-brand-dark mb-3">Ready to accelerate your growth?</h3>
            <p className="text-[15px] font-medium text-gray-500 mb-6 max-w-md mx-auto">Join the exclusive 30-day challenge and let our mentors guide you to your true potential.</p>
            <button onClick={onRequestInvite} className="bg-brand-purple text-white px-8 py-3.5 rounded-full font-bold text-[14px] hover:bg-[#4E0EE6] transition-colors shadow-lg shadow-brand-purple/25">
              Request Invite Only Access
            </button>
          </div>

        </div>
      </main>

      <Footer onRequestInvite={onRequestInvite} />
    </div>
  );
}
