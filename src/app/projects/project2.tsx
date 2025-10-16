'use client'

import { useState } from 'react'
import { Github, Star, Eye, GitBranch, ExternalLink, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const LANGUAGES = {
  JS: { color: 'bg-yellow-500', label: 'JavaScript', icon: '📘' },
  Python: { color: 'bg-blue-500', label: 'Python', icon: '🐍' },
  Java: { color: 'bg-orange-600', label: 'Java', icon: '☕' },
  PHP: { color: 'bg-indigo-600', label: 'PHP', icon: '🐘' },
  TS: { color: 'bg-blue-600', label: 'TypeScript', icon: '📗' },
  Flutter: { color: 'bg-blue-400', label: 'Flutter', icon: '🦋' },
  Ruby: { color: 'bg-red-600', label: 'Ruby', icon: '💎' },
  CSharp: { color: 'bg-purple-600', label: 'C#', icon: '⚫' },
  Dart: { color: 'bg-cyan-500', label: 'Dart', icon: '🎯' },
}

export default function Project2() {
  const [selectedImage, setSelectedImage] = useState(0)

  const project = {
    name: 'portfolio-website',
    title: 'Interactive Portfolio',
    description: 'Modern, responsive portfolio website with dark mode support and smooth animations.',
    longDescription: 'A showcase of modern web design principles, this portfolio website features responsive layouts, smooth animations, and interactive components. Built with Next.js for optimal performance and SEO, it demonstrates best practices in web development including accessibility, performance optimization, and user experience design. The portfolio includes project showcases, an interactive terminal with easter eggs, and a comprehensive about section.',
    languages: ['TS', 'JS'],
    stars: 28,
    watchers: 15,
    forks: 8,
    repoLink: 'https://github.com/Zakianggoro/portfolio',
    mainLanguage: 'TS',
    topics: ['portfolio', 'nextjs', 'tailwind', 'react'],
    gallery: [
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1597239957537-8b93b82b4cf1?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1563062622-2f844ff588e0?w=800&h=600&fit=crop'
    ]
  }

  const mainLangData = LANGUAGES[project.mainLanguage as keyof typeof LANGUAGES]

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Header */}
      <header className="border-b border-gray-700 bg-gray-900/50 sticky top-0 z-50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition"
          >
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </Link>
          <a href="https://github.com/Zakianggoro" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-3 py-1 border border-gray-600 rounded-md hover:border-gray-400 transition">
            <Github size={16} />
            <span className="text-sm">Profile</span>
          </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Project Title Section */}
        <section className="mb-8">
          <h1 className="text-5xl font-bold text-white mb-4">{project.title}</h1>
          <div className="flex items-center space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <div className={`w-4 h-4 rounded-full ${mainLangData.color}`}></div>
              <span className="text-gray-300">{project.mainLanguage}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Star size={18} />
              <span>{project.stars} stars</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Eye size={18} />
              <span>{project.watchers} watchers</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <GitBranch size={18} />
              <span>{project.forks} forks</span>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Gallery</h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
              <img
                src={project.gallery[selectedImage]}
                alt={`${project.title} screenshot ${selectedImage + 1}`}
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-4 gap-4">
              {project.gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative rounded-lg overflow-hidden border-2 transition h-24 ${
                    selectedImage === index
                      ? 'border-blue-500'
                      : 'border-gray-700 hover:border-gray-500'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">About This Project</h2>
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">{project.longDescription}</p>

            <div className="border-t border-gray-700 pt-6 mb-6">
              <h3 className="text-lg font-bold text-white mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {project.languages.map(lang => {
                  const langData = LANGUAGES[lang as keyof typeof LANGUAGES]
                  return (
                    <span
                      key={lang}
                      className={`px-4 py-2 ${langData.color} text-white rounded-full text-sm font-medium`}
                    >
                      {langData.icon} {langData.label}
                    </span>
                  )
                })}
              </div>
            </div>

            <div className="border-t border-gray-700 pt-6">
              <h3 className="text-lg font-bold text-white mb-4">Topics & Tags</h3>
              <div className="flex flex-wrap gap-2">
                {project.topics.map(topic => (
                  <span
                    key={topic}
                    className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full hover:bg-gray-700 cursor-pointer transition"
                  >
                    #{topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: '✨', title: 'Modern Design', desc: 'Cutting-edge UI with smooth animations' },
              { icon: '⚡', title: 'Fast Performance', desc: 'Optimized for speed with Next.js' },
              { icon: '🎨', title: 'Beautiful UI', desc: 'Dark theme with perfect contrast' },
              { icon: '📱', title: 'Fully Responsive', desc: 'Perfect on desktop, tablet, and mobile' },
              { icon: '🔍', title: 'SEO Optimized', desc: 'Built-in meta tags and structured data' },
              { icon: '♿', title: 'Accessible', desc: 'WCAG compliant with proper semantics' }
            ].map((feature, i) => (
              <div key={i} className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-blue-500 transition">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Repository Link */}
        <section className="mb-12">
          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg hover:opacity-90 transition shadow-lg"
          >
            <div className="flex items-center space-x-6">
              <Github size={40} />
              <div>
                <p className="text-2xl font-bold">View Repository on GitHub</p>
                <p className="text-sm text-gray-200 mt-1">github.com/Zakianggoro/{project.name}</p>
              </div>
            </div>
            <ExternalLink size={28} />
          </a>
        </section>

        {/* Stats Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Project Statistics</h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">{project.stars}</div>
              <p className="text-gray-400 text-sm">Total Stars</p>
            </div>
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">{project.watchers}</div>
              <p className="text-gray-400 text-sm">Watchers</p>
            </div>
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">{project.forks}</div>
              <p className="text-gray-400 text-sm">Forks</p>
            </div>
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-400 mb-2">{project.languages.length}</div>
              <p className="text-gray-400 text-sm">Languages Used</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-700 bg-gray-900/50 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-gray-400 text-sm">
          <p>© 2025 Muhammad Zaki Anggoro • Designed & Built with ❤️</p>
        </div>
      </footer>
    </div>
  )
}