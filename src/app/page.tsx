'use client'

import { useState } from 'react'
import { Github, Star, Eye, GitBranch, Code2, Copy, Check, Terminal, Trophy, Menu, X } from 'lucide-react'

const LANGUAGES = {
  JS: { color: 'bg-yellow-500', label: 'JavaScript', icon: '' },
  Python: { color: 'bg-blue-500', label: 'Python', icon: '' },
  Java: { color: 'bg-orange-600', label: 'Java', icon: '' },
  PHP: { color: 'bg-indigo-600', label: 'PHP', icon: '' },
  TS: { color: 'bg-blue-600', label: 'TypeScript', icon: '' },
  Flutter: { color: 'bg-blue-400', label: 'Flutter', icon: '' },
  Ruby: { color: 'bg-red-600', label: 'Ruby', icon: '' },
  CSharp: { color: 'bg-purple-600', label: 'C#', icon: '' },
}

const PROJECTS = [
  {
    id: 1,
    name: 'infant-stunting-detection',
    title: 'Infant Stunting Detection System',
    description: 'Machine learning powered healthcare tool for identifying children at risk of malnutrition.',
    languages: ['Python', 'TS', 'JS'],
    stars: 45,
    watchers: 23,
    forks: 12,
    mainLanguage: 'Python',
    secLanguage: 'JavaScript',
    topics: ['healthcare', 'machine-learning', 'react'],
  } 
]

export default function Home() {
  const [copied, setCopied] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [terminalInput, setTerminalInput] = useState('')
  const [terminalOutput, setTerminalOutput] = useState([
    'Welcome to Muhammad Zaki\'s GitHub 🎮',
    'Type "help" for available commands...'
  ])

  const copyEmail = () => {
    navigator.clipboard.writeText('mzakianggoro324@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleTerminalCommand = (e) => {
    if (e.key === 'Enter') {
      const input = terminalInput.toLowerCase().trim()
      const output = [...terminalOutput, `$ ${terminalInput}`]

      if (input === 'help') {
        output.push('Available commands:')
        output.push('  help              - Show this help message')
        output.push('  whoami            - Display user info')
        output.push('  skills            - List my skills')
        output.push('  projects          - List all projects')
        output.push('  social            - Show social links')
        output.push('  clear             - Clear terminal')
      } else if (input === 'whoami') {
        output.push('Muhammad Zaki Anggoro')
        output.push('location: Jakarta, ID')
        output.push('status: Always learning & building')
      } else if (input === 'skills') {
        output.push('Languages: Python, JavaScript, TypeScript, Java, PHP, Flutter, Ruby, C#')
        output.push('Frontend: React, Next.js, Tailwind CSS, Figma')
        output.push('Backend: Node.js, Express, Django')
        output.push('Mobile: Flutter, React Native')
        output.push('GameDev: Unity, C#')
      } else if (input === 'projects') {
        output.push('Featured projects: 6')
        output.push('Total stars: 315')
        output.push('Total watchers: 175')
      } else if (input === 'social') {
        output.push('GitHub: github.com/Zakianggoro')
        output.push('LinkedIn: linkedin.com/in/muhammad-zaki-anggoro')
        output.push('Email: mzakianggoro324@gmail.com')
      } else if (input === 'clear') {
        setTerminalOutput([])
        setTerminalInput('')
        return
      } else if (input === '') {
        return
      } else {
        output.push(`command not found: ${terminalInput}`)
        output.push('Type "help" for available commands')
      }

      setTerminalOutput(output)
      setTerminalInput('')
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Header */}
      <header className="border-b border-gray-700 bg-gray-900/50 sticky top-0 z-50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white">
                MZ
              </div>
              <div>
                <p className="font-bold text-white text-sm sm:text-base">Muhammad Zaki</p>
                <p className="text-xs text-gray-400">@Zakianggoro</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
              <a href="#projects" className="text-gray-300 hover:text-white transition">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
              <a href="https://github.com/Zakianggoro" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-3 py-1 border border-gray-600 rounded-md hover:border-gray-400 transition">
                <Github size={16} />
                <span className="text-sm">Follow</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-gray-700 pt-4">
              <a href="#about" className="block text-gray-300 hover:text-white transition">About</a>
              <a href="#projects" className="block text-gray-300 hover:text-white transition">Projects</a>
              <a href="#contact" className="block text-gray-300 hover:text-white transition">Contact</a>
              <a href="https://github.com/Zakianggoro" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-3 py-2 border border-gray-600 rounded-md hover:border-gray-400 transition w-fit">
                <Github size={16} />
                <span className="text-sm">Follow on GitHub</span>
              </a>
            </div>
          )}
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Hero Section */}
        <section id="about" className="mb-8 sm:mb-12">
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 sm:p-6 lg:p-8 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
              {/* Profile Image */}
              <div className="col-span-1 flex justify-center lg:justify-start">
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-lg overflow-hidden border-2 border-gray-700 hover:border-blue-500 transition shadow-lg">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl sm:text-5xl font-bold">
                    MZ
                  </div>
                </div>
              </div>

              {/* Profile Content */}
              <div className="col-span-1 lg:col-span-2">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-white">Muhammad Zaki Anggoro</h1>
                <p className="text-lg sm:text-xl text-blue-400 mb-4">@Zakianggoro</p>
                <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">Crafting digital experiences with code. Passionate about web development, machine learning, and game design. Always learning, always building.</p>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-6">
                  <button onClick={copyEmail} className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition">
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                    <span className="text-sm sm:text-base">{copied ? 'Copied!' : 'Copy Email'}</span>
                  </button>
                  <a href="#terminal" className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-600 hover:border-gray-400 rounded-md transition">
                    <Terminal size={16} />
                    <span className="text-sm sm:text-base">Terminal</span>
                  </a>
                </div>

                {/* Info */}
                <div className="space-y-2 sm:space-y-3 mb-6">
                  <p className="text-gray-400 text-xs sm:text-sm"><span className="text-gray-500">Location:</span> Jakarta, Indonesia</p>
                  <p className="text-gray-400 text-xs sm:text-sm"><span className="text-gray-500">Status:</span> Open to opportunities</p>
                  <p className="text-gray-400 text-xs sm:text-sm"><span className="text-gray-500">Focus:</span> Full-stack development & Game design</p>
                </div>

                {/* Language Tags */}
                <div className="flex flex-wrap gap-2">
                  {Object.entries(LANGUAGES).map(([key, { label, icon }]) => (
                    <span key={key} className="px-2 sm:px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-xs sm:text-sm hover:border-gray-500 cursor-pointer transition">
                      {icon} {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Experience & Achievements</h2>
          
          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6">
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 sm:p-6 hover:border-blue-500 transition">
              <h3 className="text-base sm:text-lg font-bold text-blue-400 mb-4 flex items-center space-x-2">
                <Code2 size={18} className="sm:w-5 sm:h-5" />
                <span>Technical Skills</span>
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <p className="text-gray-300 text-xs sm:text-sm font-semibold mb-1 sm:mb-2">Frontend Development</p>
                  <p className="text-gray-400 text-xs sm:text-sm">React, Next.js, TypeScript, Tailwind CSS, Responsive Design</p>
                </div>
                <div>
                  <p className="text-gray-300 text-xs sm:text-sm font-semibold mb-1 sm:mb-2">Backend Development</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Node.js, Express, Python, Django, REST APIs, Fast API, Databases</p>
                </div>
                <div>
                  <p className="text-gray-300 text-xs sm:text-sm font-semibold mb-1 sm:mb-2">Mobile Development</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Flutter, React Native, Cross-platform Applications</p>
                </div>
                <div>
                  <p className="text-gray-300 text-xs sm:text-sm font-semibold mb-1 sm:mb-2">Game Development</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Unity, C#, 2D/3D Game Design, Game Mechanics</p>
                </div>
                <div>
                  <p className="text-gray-300 text-xs sm:text-sm font-semibold mb-1 sm:mb-2">AI & Machine Learning</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Python, Healthcare AI, Data Analysis</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 sm:p-6 hover:border-purple-500 transition">
              <h3 className="text-base sm:text-lg font-bold text-purple-400 mb-4 flex items-center space-x-2">
                <Trophy size={18} className="sm:w-5 sm:h-5" />
                <span>Experience & Leadership</span>
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <p className="text-gray-300 text-xs sm:text-sm font-semibold mb-1 sm:mb-2">Project Management</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Led cross-functional teams, Agile/Scrum experience, Timeline & deadline management</p>
                </div>
                <div>
                  <p className="text-gray-300 text-xs sm:text-sm font-semibold mb-1 sm:mb-2">Team Collaboration</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Strong communication skills, Mentoring junior developers, Code reviews</p>
                </div>
                <div>
                  <p className="text-gray-300 text-xs sm:text-sm font-semibold mb-1 sm:mb-2">Problem Solving</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Analytical thinking, Creative solutions, Technical troubleshooting</p>
                </div>
                <div>
                  <p className="text-gray-300 text-xs sm:text-sm font-semibold mb-1 sm:mb-2">User Experience Design</p>
                  <p className="text-gray-400 text-xs sm:text-sm">UI/UX principles, Figma design, User-centric approach, Accessibility</p>
                </div>
                <div>
                  <p className="text-gray-300 text-xs sm:text-sm font-semibold mb-1 sm:mb-2">Community Engagement</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Open source contributions, Technical writing, Knowledge sharing</p>
                </div>
              </div>
            </div>
          </div>

          {/* Work History */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-bold text-white mb-4">Work History</h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="border-l-2 border-blue-500 pl-3 sm:pl-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-1">
                  <h4 className="text-white font-semibold text-sm sm:text-base">Laboratory Assistant of Object Oriented Programming</h4>
                  <span className="text-gray-400 text-xs">Jan 2025 - May 2025</span>
                </div>
                <p className="text-blue-400 text-xs sm:text-sm mb-1">University of Brawijaya</p>
                <p className="text-gray-400 text-xs sm:text-sm">Assisted the teaching team in a university laboratory to support and guide fellow college students in understanding course materials and practical sessions. Teaching around 30 college student.</p>
              </div>
              <div className="border-l-2 border-purple-500 pl-3 sm:pl-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-1">
                  <h4 className="text-white font-semibold text-sm sm:text-base">Staff Quality Control of PKKMB and Startup Academy</h4>
                  <span className="text-gray-400 text-xs">May 2024 - Mar 2025</span>
                </div>
                <p className="text-purple-400 text-xs sm:text-sm mb-1">University of Brawijaya</p>
                <p className="text-gray-400 text-xs sm:text-sm">Developed full-stack applications using React and Node.js, implemented AI healthcare system, collaborated with cross-functional teams</p>
              </div>
              <div className="border-l-2 border-green-500 pl-3 sm:pl-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-1">
                  <h4 className="text-white font-semibold text-sm sm:text-base">Game Developer</h4>
                  <span className="text-gray-400 text-xs">Apr 2025 - Present</span>
                </div>
                <p className="text-green-400 text-xs sm:text-sm mb-1">Raion Community</p>
                <p className="text-gray-400 text-xs sm:text-sm">Game Programmer at Raion Community, focusing on collaborative game development and continuous skill improvement.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Recent Repositories</h2>
          <div className="grid grid-cols-1 gap-4">
            {PROJECTS.map((project) => {
              const mainLangData = LANGUAGES[project.mainLanguage]
              return (
                <div
                  key={project.id}
                  className="bg-gray-900 border border-gray-700 rounded-lg p-4 sm:p-6 hover:border-gray-500 hover:bg-gray-900/80 transition"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-3">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <GitBranch className="text-gray-500 mt-1 flex-shrink-0" size={18} />
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-blue-400 hover:underline">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 text-xs sm:text-sm mt-1">{project.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.topics.map(topic => (
                      <span key={topic} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full hover:bg-gray-700">
                        {topic}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t border-gray-700">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${mainLangData.color}`}></div>
                      <span className="text-xs sm:text-sm text-gray-400">{project.mainLanguage}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-400">
                      <Star size={14} className="sm:w-4 sm:h-4" />
                      <span className="text-xs sm:text-sm">{project.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-400">
                      <Eye size={14} className="sm:w-4 sm:h-4" />
                      <span className="text-xs sm:text-sm">{project.watchers}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-400">
                      <GitBranch size={14} className="sm:w-4 sm:h-4" />
                      <span className="text-xs sm:text-sm">{project.forks}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Terminal */}
        <section id="terminal" className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Interactive Terminal</h2>
          <div className="bg-gray-950 border border-gray-700 rounded-lg overflow-hidden font-mono">
            <div className="bg-gray-800 px-3 sm:px-4 py-2 flex items-center justify-between border-b border-gray-700">
              <span className="text-xs sm:text-sm text-gray-400">terminal</span>
            </div>
            <div className="p-3 sm:p-4 h-64 sm:h-96 overflow-y-auto bg-gray-950">
              {terminalOutput.map((line, i) => (
                <div key={i} className="text-gray-300 text-xs sm:text-sm mb-1 whitespace-pre-wrap break-words">
                  {line.startsWith('$') ? (
                    <span className="text-green-400">{line}</span>
                  ) : line.includes('error') ? (
                    <span className="text-red-400">{line}</span>
                  ) : (
                    line
                  )}
                </div>
              ))}
            </div>
            <div className="bg-gray-900 px-3 sm:px-4 py-2 border-t border-gray-700 flex items-center">
              <span className="text-green-400 mr-2 text-sm sm:text-base">$</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                onKeyDown={handleTerminalCommand}
                placeholder="Try 'help' command..."
                className="bg-transparent text-white outline-none flex-1 font-mono text-xs sm:text-sm"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-gray-900 border border-gray-700 rounded-lg p-4 sm:p-6 lg:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Get in Touch</h2>
          <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">Interested in collaborating or have questions? Feel free to reach out!</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href="mailto:mzakianggoro324@gmail.com" className="px-4 sm:px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition text-white text-center text-sm sm:text-base">
              Send Email
            </a>
            <a href="https://github.com/Zakianggoro" target="_blank" rel="noopener noreferrer" className="px-4 sm:px-6 py-2 border border-gray-600 hover:border-gray-400 rounded-md transition text-center text-sm sm:text-base">
              GitHub Profile
            </a>
            <a href="https://www.linkedin.com/in/muhammad-zaki-anggoro/" target="_blank" rel="noopener noreferrer" className="px-4 sm:px-6 py-2 border border-gray-600 hover:border-gray-400 rounded-md transition text-center text-sm sm:text-base">
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-700 bg-gray-900/50 mt-8 sm:mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 text-center text-gray-400 text-xs sm:text-sm">
          <p>© 2025 Muhammad Zaki Anggoro • Designed & Built with ❤️</p>
        </div>
      </footer>
    </div>
  )
}