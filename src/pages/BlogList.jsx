import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { blogs } from '../data/blogs';
import { ArrowUpRight } from 'lucide-react';

export default function BlogList({ onRequestInvite }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredBlog = blogs[0];
  const remainingBlogs = blogs.slice(1);

  return (
    <div className="min-h-screen bg-[#F8F9FE] font-sans">
      <Navbar onRequestInvite={onRequestInvite} />

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center md:text-left mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-[11px] font-black tracking-widest uppercase mb-4 border border-brand-purple/20">
            Growtopper Journal
          </div>
          <h1 className="text-[36px] md:text-[54px] lg:text-[64px] font-black text-brand-dark tracking-tight leading-[1.05] mb-4">
            Insights for the <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-pink-500">future of education.</span>
          </h1>
          <p className="text-[16px] md:text-[18px] font-medium text-gray-500 max-w-2xl">
            Expert strategies, current education news, and actionable advice to help your child navigate the modern academic landscape and build essential life skills.
          </p>
        </div>

        {/* Featured Blog (Large Card) */}
        <Link to={`/blog/${featuredBlog.slug}`} className="group block mb-12 md:mb-20">
            <div className="bg-white rounded-[32px] p-4 md:p-5 lg:p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-5 md:gap-8 hover:shadow-xl hover:shadow-brand-purple/5 transition-all duration-500 relative overflow-hidden items-stretch">
              <div className="w-full md:w-1/2 h-[260px] md:h-auto md:min-h-[300px] lg:min-h-[340px] rounded-[24px] overflow-hidden relative">
                <img src={featuredBlog.image} alt={featuredBlog.title} className="w-full h-full object-cover absolute inset-0 transform group-hover:scale-105 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
              </div>
              
              <div className="w-full md:w-1/2 flex flex-col justify-center py-2 md:py-6 lg:py-8 md:pr-6 lg:pr-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-[11px] font-black uppercase tracking-widest">{featuredBlog.category}</span>
                <span className="text-[13px] font-bold text-gray-400">{featuredBlog.readTime}</span>
              </div>
              <h2 className="text-[28px] md:text-[36px] font-black text-brand-dark leading-[1.15] tracking-tight mb-4 group-hover:text-brand-purple transition-colors">
                {featuredBlog.title}
              </h2>
              <p className="text-[15px] text-gray-500 leading-relaxed font-medium mb-8 line-clamp-3">
                {featuredBlog.excerpt}
              </p>
              
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-purple/5 overflow-hidden flex items-center justify-center border border-gray-100">
                    <img src={featuredBlog.authorAvatar} alt={featuredBlog.author} className="w-8 h-8 object-cover" />
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-brand-dark leading-tight">{featuredBlog.author}</div>
                    <div className="text-[12px] font-medium text-gray-400">{featuredBlog.date}</div>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-brand-purple group-hover:text-white text-brand-dark transition-colors border border-gray-100 group-hover:border-brand-purple">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* 3-Column Grid for Remaining Blogs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {remainingBlogs.map((blog) => (
            <Link key={blog.id} to={`/blog/${blog.slug}`} className="group flex flex-col bg-white rounded-[28px] p-3 md:p-4 shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-brand-purple/5 transition-all duration-500 h-full">
              <div className="w-full h-[220px] rounded-[20px] overflow-hidden mb-5 relative">
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-brand-dark text-[10px] font-black uppercase tracking-widest shadow-sm">
                  {blog.category}
                </div>
              </div>
              
              <div className="px-2 pb-3 flex flex-col flex-grow">
                <div className="text-[12px] font-bold text-brand-purple mb-2">{blog.readTime}</div>
                <h3 className="text-[18px] md:text-[20px] font-black text-brand-dark leading-[1.25] tracking-tight mb-3 group-hover:text-brand-purple transition-colors line-clamp-3">
                  {blog.title}
                </h3>
                <p className="text-[14px] text-gray-500 leading-relaxed font-medium mb-6 line-clamp-2 mt-auto">
                  {blog.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-brand-purple/5 overflow-hidden flex items-center justify-center border border-gray-100">
                      <img src={blog.authorAvatar} alt={blog.author} className="w-6 h-6 object-cover" />
                    </div>
                    <div>
                      <div className="text-[12px] font-bold text-brand-dark">{blog.author}</div>
                      <div className="text-[11px] font-medium text-gray-400">{blog.date}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-brand-purple transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </main>

      <Footer onRequestInvite={onRequestInvite} />
    </div>
  );
}
