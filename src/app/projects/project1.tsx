'use client'

import { useState } from 'react'
import { Github, Star, Eye, GitBranch, Code2, Copy, Check, Terminal, Zap, Trophy } from 'lucide-react'
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
    topics: ['healthcare', 'machine-learning', 'tensorflow', 'react'],
  },
  {
    id: 2,
    name: 'portfolio-website',
    title: 'Interactive Portfolio',
    description: 'Modern, responsive portfolio website with dark mode support and smooth animations.',
    languages: ['TS', 'JS'],
    stars: 28,
    watchers: 15,
    forks: 8,
    mainLanguage: 'TS',
    topics: ['portfolio', 'nextjs', 'tailwind', 'react'],
  },
  {
    id: 3,
    name: 'e-commerce-platform',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration and inventory management.',
    languages: ['TS', 'Java', 'Ruby'],
    stars: 67,
    watchers: 34,
    forks: 19,
    mainLanguage: 'TS',
    topics: ['ecommerce', 'fullstack', 'nodejs', 'stripe'],
  },
  {
    id: 4,
    name: 'mobile-fitness-app',
    title: 'Mobile Fitness Tracker',
    description: 'Cross-platform fitness tracking app with workout logging and progress analytics.',
    languages: ['Flutter', 'Dart'],
    stars: 89,
    watchers: 56,
    forks: 34,
    mainLanguage: 'Flutter',
    topics: ['flutter', 'fitness', 'mobile', 'cross-platform'],
  },
  {
    id: 5,
    name: 'game-2d-platformer',
    title: '2D Platformer Game',
    description: 'Engaging 2D platformer with pixel-perfect controls and challenging levels.',
    languages: ['CSharp', 'JS'],
    stars: 52,
    watchers: 29,
    forks: 15,
    mainLanguage: 'CSharp',
    topics: ['gamedev', 'unity', 'csharp', '2d'],
  },
  {
    id: 6,
    name: 'cli-task-manager',
    title: 'CLI Task Manager',
    description: 'Command-line task management tool with persistent storage and beautiful terminal UI.',
    languages: ['Python', 'JS'],
    stars: 34,
    watchers: 18,
    forks: 7,
    mainLanguage: 'Python',
    topics: ['cli', 'python', 'productivity', 'terminal'],
  }
]

export default function Home() {
  const [copied, setCopied] = useState(false)
  const [easterEgg, setEasterEgg] = useState(false)
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

  const handleTerminalCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const input = terminalInput.toLowerCase().trim()
      let output = [...terminalOutput, `$ ${terminalInput}`]

      if (input === 'help') {
        output.push('Available commands:')
        output.push('  help              - Show this help message')
        output.push('  whoami            - Display user info')
        output.push('  skills            - List my skills')
        output.push('  projects          - List all projects')
        output.push('  social            - Show social links')
        output.push('  easter            - Find the easter egg')
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
      } else if (input === 'easter' || input === 'git commit -m "found the easter egg"') {
        setEasterEgg(true)
        output.push('🎉 EASTER EGG FOUND! 🎉')
        output.push('[main] commit abc123def "found the easter egg"')
        output.push('You\'ve unlocked a secret achievement!')
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
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white">
              MZ
            </div>
            <div>
              <p className="font-bold text-white">Muhammad Zaki</p>
              <p className="text-xs text-gray-400">@Zakianggoro</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-300 hover:text-white transition">About</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Projects</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Contact</a>
            <a href="https://github.com/Zakianggoro" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-3 py-1 border border-gray-600 rounded-md hover:border-gray-400 transition">
              <Github size={16} />
              <span className="text-sm">Follow</span>
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-8 mb-8">
            <div className="grid grid-cols-3 gap-8 items-start">
              <div className="col-span-1 flex justify-center">
                <div className="w-48 h-48 rounded-lg overflow-hidden border-2 border-gray-700 hover:border-blue-500 transition shadow-lg">
                  <img 
                    src="/placeholder/Profile Picture.jpg" 
                    alt="Muhammad Zaki Anggoro" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="col-span-2">
                <h1 className="text-4xl font-bold mb-2 text-white">Muhammad Zaki Anggoro</h1>
                <p className="text-xl text-blue-400 mb-4">@Zakianggoro</p>
                <p className="text-gray-300 mb-6 leading-relaxed">Crafting digital experiences with code. Passionate about web development, machine learning, and game design. Always learning, always building.</p>
                
                <div className="flex items-center space-x-4 mb-6">
                  <button onClick={copyEmail} className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition">
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                    <span>{copied ? 'Copied!' : 'Copy Email'}</span>
                  </button>
                  <a href="#terminal" className="flex items-center space-x-2 px-4 py-2 border border-gray-600 hover:border-gray-400 rounded-md transition">
                    <Terminal size={16} />
                    <span>Terminal</span>
                  </a>
                </div>

                <div className="space-y-3 mb-6">
                  <p className="text-gray-400 text-sm"><span className="text-gray-500">📍 Location:</span> Jakarta, Indonesia</p>
                  <p className="text-gray-400 text-sm"><span className="text-gray-500">💼 Status:</span> Open to opportunities</p>
                  <p className="text-gray-400 text-sm"><span className="text-gray-500">⚡ Focus:</span> Full-stack development & Game design</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {Object.entries(LANGUAGES).map(([key, { label, icon }]) => (
                    <span key={key} className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-sm hover:border-gray-500 cursor-pointer transition">
                      {icon} {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Experience & Achievements</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-blue-500 transition">
              <h3 className="text-lg font-bold text-blue-400 mb-4 flex items-center space-x-2">
                <Code2 size={20} />
                <span>Technical Skills</span>
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-300 text-sm font-semibold mb-2">Frontend Development</p>
                  <p className="text-gray-400 text-sm">React, Next.js, TypeScript, Tailwind CSS, Responsive Design</p>
                </div>
                <div>
                  <p className="text-gray-300 text-sm font-semibold mb-2">Backend Development</p>
                  <p className="text-gray-400 text-sm">Node.js, Express, Python, Django, REST APIs, Databases</p>
                </div>
                <div>
                  <p className="text-gray-300 text-sm font-semibold mb-2">Mobile Development</p>
                  <p className="text-gray-400 text-sm">Flutter, React Native, Cross-platform Applications</p>
                </div>
                <div>
                  <p className="text-gray-300 text-sm font-semibold mb-2">Game Development</p>
                  <p className="text-gray-400 text-sm">Unity, C#, 2D/3D Game Design, Game Mechanics</p>
                </div>
                <div>
                  <p className="text-gray-300 text-sm font-semibold mb-2">AI & Machine Learning</p>
                  <p className="text-gray-400 text-sm">TensorFlow, Python, Healthcare AI, Data Analysis</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-purple-500 transition">
              <h3 className="text-lg font-bold text-purple-400 mb-4 flex items-center space-x-2">
                <Trophy size={20} />
                <span>Experience & Leadership</span>
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-300 text-sm font-semibold mb-2">Project Management</p>
                  <p className="text-gray-400 text-sm">Led cross-functional teams, Agile/Scrum experience, Timeline & deadline management</p>
                </div>
                <div>
                  <p className="text-gray-300 text-sm font-semibold mb-2">Team Collaboration</p>
                  <p className="text-gray-400 text-sm">Strong communication skills, Mentoring junior developers, Code reviews</p>
                </div>
                <div>
                  <p className="text-gray-300 text-sm font-semibold mb-2">Problem Solving</p>
                  <p className="text-gray-400 text-sm">Analytical thinking, Creative solutions, Technical troubleshooting</p>
                </div>
                <div>
                  <p className="text-gray-300 text-sm font-semibold mb-2">User Experience Design</p>
                  <p className="text-gray-400 text-sm">UI/UX principles, Figma design, User-centric approach, Accessibility</p>
                </div>
                <div>
                  <p className="text-gray-300 text-sm font-semibold mb-2">Community Engagement</p>
                  <p className="text-gray-400 text-sm">Open source contributions, Technical writing, Knowledge sharing</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-4">Work History</h3>
            <div className="space-y-6">
              <div className="border-l-2 border-blue-500 pl-4">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-white font-semibold">Senior Full-Stack Developer</h4>
                  <span className="text-gray-400 text-xs">2023 - Present</span>
                </div>
                <p className="text-blue-400 text-sm mb-1">Tech Innovations Inc.</p>
                <p className="text-gray-400 text-sm">Led development of high-performance web applications, mentored team of 5 developers, improved application performance by 40%</p>
              </div>
              <div className="border-l-2 border-purple-500 pl-4">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-white font-semibold">Full-Stack Developer</h4>
                  <span className="text-gray-400 text-xs">2021 - 2023</span>
                </div>
                <p className="text-purple-400 text-sm mb-1">Digital Solutions Ltd.</p>
                <p className="text-gray-400 text-sm">Developed full-stack applications using React and Node.js, implemented AI healthcare system, collaborated with cross-functional teams</p>
              </div>
              <div className="border-l-2 border-green-500 pl-4">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-white font-semibold">Junior Developer</h4>
                  <span className="text-gray-400 text-xs">2020 - 2021</span>
                </div>
                <p className="text-green-400 text-sm mb-1">StartUp Hub Jakarta</p>
                <p className="text-gray-400 text-sm">Built responsive web interfaces, learned agile development, contributed to 3+ production projects</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Recent Repositories</h2>
          <div className="grid grid-cols-1 gap-4">
            {PROJECTS.map((project) => {
              const mainLangData = LANGUAGES[project.mainLanguage as keyof typeof LANGUAGES]
              return (
                <Link
                  key={project.id}
                  href={`/projects/project${project.id}`}
                  className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-gray-500 hover:bg-gray-900/80 transition text-left block"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      <GitBranch className="text-gray-500 mt-1" />
                      <div>
                        <h3 className="text-lg font-bold text-blue-400 hover:underline">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 text-sm mt-1">{project.description}</p>
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

                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full ${mainLangData.color}`}></div>
                        <span className="text-sm text-gray-400">{project.mainLanguage}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-400">
                        <Star size={16} />
                        <span className="text-sm">{project.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-400">
                        <Eye size={16} />
                        <span className="text-sm">{project.watchers}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-400">
                        <GitBranch size={16} />
                        <span className="text-sm">{project.forks}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>

        {/* Terminal Easter Egg */}
        <section id="terminal" className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Interactive Terminal</h2>
          <div className="bg-gray-950 border border-gray-700 rounded-lg overflow-hidden font-mono">
            <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
              <span className="text-sm text-gray-400">terminal</span>
              {easterEgg && <span className="text-sm text-green-400 animate-pulse">🎉 EASTER EGG UNLOCKED!</span>}
            </div>
            <div className="p-4 h-96 overflow-y-auto bg-gray-950">
              {terminalOutput.map((line, i) => (
                <div key={i} className="text-gray-300 text-sm mb-1 whitespace-pre-wrap break-words">
                  {line.startsWith('$') ? (
                    <span className="text-green-400">{line}</span>
                  ) : line.includes('error') ? (
                    <span className="text-red-400">{line}</span>
                  ) : line.includes('EASTER EGG') || line.includes('🎉') ? (
                    <span className="text-yellow-400 font-bold">{line}</span>
                  ) : (
                    line
                  )}
                </div>
              ))}
            </div>
            <div className="bg-gray-900 px-4 py-2 border-t border-gray-700 flex items-center">
              <span className="text-green-400 mr-2">$</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                onKeyDown={handleTerminalCommand}
                placeholder="Try 'help' command..."
                className="bg-transparent text-white outline-none flex-1 font-mono"
                autoFocus
              />
            </div>
          </div>
          <p className="text-gray-400 text-xs mt-2">💡 Hint: Try typing "easter" in the terminal for a surprise!</p>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-900 border border-gray-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-gray-300 mb-6">Interested in collaborating or have questions? Feel free to reach out!</p>
          <div className="flex space-x-4">
            <a href="mailto:mzakianggoro324@gmail.com" className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition text-white">
              Send Email
            </a>
            <a href="https://github.com/Zakianggoro" target="_blank" rel="noopener noreferrer" className="px-6 py-2 border border-gray-600 hover:border-gray-400 rounded-md transition">
              GitHub Profile
            </a>
            <a href="https://www.linkedin.com/in/muhammad-zaki-anggoro/" target="_blank" rel="noopener noreferrer" className="px-6 py-2 border border-gray-600 hover:border-gray-400 rounded-md transition">
              LinkedIn
            </a>
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