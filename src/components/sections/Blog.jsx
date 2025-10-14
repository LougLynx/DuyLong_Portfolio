import { BookOpen, Calendar, ChevronDown } from 'lucide-react';
import React, { useState } from 'react';
import { DetailModal } from '../ui/DetailModal';

export const Blog = ({ t, blogs, scrollToSection, language }) => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // Ensure the toggle label only shows the first two words (e.g., "See more")
  const getTwoWordLabel = (label) => {
    if (typeof label !== 'string') return '';
    return label.trim().split(/\s+/).slice(0, 2).join(' ');
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const locale = language === 'en' ? 'en-US' : 'vi-VN';
    return new Date(dateString).toLocaleDateString(locale, options);
  };

  // Sort blogs by date (most recent first) and limit to 3 if showAll is false
  const sortedBlogs = [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date));
  const displayedBlogs = showAll ? sortedBlogs : sortedBlogs.slice(0, 3);

  // Prepare blog content for modal with tags
  const getBlogModalContent = (blog) => {
    let content = `${t.blog.postedOn} ${formatDate(blog.date)}\n\n`;
    
    if (blog.tags && blog.tags.length > 0) {
      content += `${t.blog.tags}: ${blog.tags.join(', ')}\n\n`;
    }
    
    content += blog.content;
    return content;
  };

  return (
    <>
      <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl mb-4 border border-cyan-400/30 shadow-lg shadow-cyan-500/20">
              <BookOpen className="w-8 h-8 text-cyan-400" />
            </div>
            <h2 className="section-title">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-amber-400 bg-clip-text text-transparent leading-[1.1] md:leading-[1.1]">{t.blog.title}</span>
            </h2>
            {t.blog.subtitle && (
              <p className="mt-2 text-sm text-gray-300">
                {t.blog.subtitle}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedBlogs.map((blog) => (
              <article
                key={blog.id}
                onClick={() => setSelectedBlog(blog)}
                className="group bg-gradient-to-br from-slate-800/90 via-blue-900/50 to-slate-800/90 backdrop-blur-xl rounded-2xl shadow-2xl shadow-cyan-500/10 border border-cyan-500/20 overflow-hidden hover:shadow-cyan-500/30 hover:border-cyan-400/40 transition-all duration-500 hover:scale-105 cursor-pointer"
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={blog.coverImage || blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3 text-gray-400 text-sm">
                    <Calendar size={14} className="text-cyan-400" />
                    <span>{formatDate(blog.date)}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-gray-300 mb-4 line-clamp-3 text-sm leading-relaxed">
                    {blog.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {blog.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full text-xs text-cyan-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* See More / See Less Button */}
          {blogs.length > 3 && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="group relative px-6 py-2 rounded-full border border-cyan-500/30 text-cyan-300 hover:text-white hover:border-cyan-400/60 hover:bg-cyan-500/10 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              >
                <span className="relative z-10 tracking-wide">
                  {showAll ? getTwoWordLabel(t.blog.seeLess) : getTwoWordLabel(t.blog.seeMore)}
                </span>
                {/* animated underline for better UX */}
                <span className="pointer-events-none absolute left-6 right-6 -bottom-1 h-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-amber-500 opacity-0 scale-x-0 origin-left transition-all duration-300 group-hover:opacity-100 group-hover:scale-x-100"></span>
              </button>
            </div>
          )}
        
        {/* Scroll Indicator to References */}
        <div className="flex justify-center mt-8 animate-bounce">
          <ChevronDown
            className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400 cursor-pointer hover:text-amber-400 transition-colors"
            onClick={() => scrollToSection && scrollToSection('references')}
          />
        </div>
        </div>
      </section>

      {/* Blog Detail Modal */}
      <DetailModal
        isOpen={!!selectedBlog}
        onClose={() => setSelectedBlog(null)}
        title={selectedBlog?.title || ''}
        subtitle={selectedBlog?.excerpt || ''}
        period={selectedBlog ? formatDate(selectedBlog.date) : ''}
        description={selectedBlog?.content || ''}
        images={selectedBlog?.images || []}
      />
    </>
  );
};

