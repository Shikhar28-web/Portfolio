'use client'

import { useEffect, useRef, useState } from 'react'
import {
  SiAngular,
  SiBootstrap,
  SiFlask,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiKeras,
  SiMysql,
  SiOpenjdk,
  SiPostman,
  SiPython,
  SiSap,
  SiStreamlit,
  SiTensorflow,
  SiTypescript,
} from 'react-icons/si'
import { FaCss3Alt, FaDatabase } from 'react-icons/fa'
import { TbApi, TbBinaryTree2, TbCpu, TbDatabase, TbHierarchy3 } from 'react-icons/tb'
import { VscVscode } from 'react-icons/vsc'
import { X, ExternalLink } from 'lucide-react'

import { CardStack, CardStackItem } from '@/components/ui/card-stack'
import { Header } from '@/components/ui/header-2'
import { SplineScene } from '@/components/ui/splite'
import { TextHoverEffect, FooterBackgroundGradient } from '@/components/ui/hover-footer'

type ProjectCard = CardStackItem & {
  overview: string
  fullDescription: string
  githubUrl: string
  liveUrl: string
  details: string[]
}

export function SplineSceneBasic() {
  const heroRef = useRef<HTMLDivElement>(null)
  const fullName = 'Shikhar Verma'
  const [typedName, setTypedName] = useState('')
  const [typingDone, setTypingDone] = useState(false)
  const introFull = "Passionate about creating meaningful digital experiences and constantly exploring new ways to grow, learn, and innovate.";
  const [introTyped, setIntroTyped] = useState('')
  const [introDone, setIntroDone] = useState(false)
  const skillGroups = [
    {
      title: 'Languages',
      items: [
        { name: 'Java', Icon: SiOpenjdk },
        { name: 'Python', Icon: SiPython },
        { name: 'JavaScript', Icon: SiJavascript },
        { name: 'TypeScript', Icon: SiTypescript },
        { name: 'SQL', Icon: FaDatabase },
      ],
    },
    {
      title: 'Web Development',
      items: [
        { name: 'Angular', Icon: SiAngular },
        { name: 'HTML', Icon: SiHtml5 },
        { name: 'CSS', Icon: FaCss3Alt },
        { name: 'Bootstrap', Icon: SiBootstrap },
        { name: 'REST APIs', Icon: TbApi },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      items: [
        { name: 'Flask', Icon: SiFlask },
        { name: 'Streamlit', Icon: SiStreamlit },
        { name: 'TensorFlow', Icon: SiTensorflow },
        { name: 'Keras', Icon: SiKeras },
      ],
    },
    {
      title: 'Database Technologies',
      items: [
        { name: 'MySQL', Icon: SiMysql },
        { name: 'SAP HANA', Icon: SiSap },
      ],
    },
    {
      title: 'Developer Tools',
      items: [
        { name: 'Git', Icon: SiGit },
        { name: 'GitHub', Icon: SiGithub },
        { name: 'VS Code', Icon: VscVscode },
        { name: 'Postman', Icon: SiPostman },
      ],
    },
    {
      title: 'Computer Science Fundamentals',
      items: [
        { name: 'DSA', Icon: TbBinaryTree2 },
        { name: 'OOPs', Icon: TbHierarchy3 },
        { name: 'DBMS', Icon: TbDatabase },
        { name: 'Operating Systems', Icon: TbCpu },
      ],
    },
  ]
  const aboutCards = [
    {
      title: 'What I study',
      text: 'B.Tech(Hons)-CS student building a stronger engineering foundation every day.',
    },
    {
      title: 'How I build',
      text: 'Clean, modern digital experiences with a focus on structure and detail.',
    },
    {
      title: 'What keeps me inspired',
      text: 'Basketball, music, and exploring new AI tools and ideas.',
    },
  ]
  const floatingBadges = [
    { title: 'Background', text: 'B.Tech(Hons)-CS student', className: 'box1' },
    { title: 'Focus', text: 'Innovation & Learning', className: 'box2' },
    { title: 'Mindset', text: 'Creative problem solving', className: 'box3' },
    { title: 'Passion', text: 'Exploring new AI tools', className: 'box4' },
  ]
  const projects: ProjectCard[] = [
    {
      id: 1,
      title: 'Aira',

      ctaLabel: 'Open project',
      description: 'A multilingual AI companion platform with voice chat, offline AI processing, wake-word detection, and personalized companion interactions powered by a multi-agent AI system.',
      overview: 'A multilingual AI companion platform with voice chat, offline AI processing, wake-word detection, and personalized companion interactions powered by a multi-agent AI system.',
      fullDescription:
        'Aira combines a web app, standalone voice assistant, and offline-first AI pipeline to deliver intelligent real-time conversations with voice cloning, multilingual support, secure authentication, and companion-based memory. It uses multiple AI agents for speech recognition, reasoning, and speech synthesis to create a smooth human-like assistant experience.',
      imageSrc: '/Aira.png',
      githubUrl: 'https://github.com/Shikhar28-web/Aira#aira-aira',
      liveUrl: 'https://github.com/Shikhar28-web/Aira#aira-aira',
      details: ['Python', 'Flask', 'SQLite', 'JavaScript', 'HTML', 'CSS', 'Ollama', 'Faster-Whisper', 'Coqui XTTS v2', ' ElevenLabs API', 'TensorFlow', 'pyttsx3', 'bcrypt', 'Web APIs'],
    },
    {
      id: 2,
      title: 'Quiz Hub ',

      ctaLabel: 'Open project',
      description: 'AI-powered quiz generation platform that creates smart quizzes from files, URLs, or text with auto-grading and AI assistance.',
      overview: 'Quiz Hub helps teachers and learners generate interactive quizzes instantly using AI. It supports multiple question types, shareable test links, student feedback, and real-time evaluation.',
      fullDescription:
        'Quiz Hub helps teachers and learners generate interactive quizzes instantly using AI. It supports multiple question types, shareable test links, student feedback, and real-time evaluation.',
      imageSrc: '\quizehub.png',
      githubUrl: 'https://github.com/Shikhar28-web/Quiz-Hub',
      liveUrl: 'https://github.com/Shikhar28-web/Quiz-Hub',
      details: ['Flask', 'SQLite', 'HTML', 'CSS', 'JavaScript', 'Google Gemini API', 'Hugging Face API'],
    },
    {
      id: 3,
      title: 'Financial Report Analysis',
      tag: 'Agentic AI',
      ctaLabel: 'Open project',
      description: 'RAG-powered AI platform to query financial reports using natural language.',
      overview: 'Upload PDF, Excel, or CSV financial reports and ask plain-language questions — the system retrieves relevant sections and returns accurate, fact-based insights using LLMs and semantic search.',
      fullDescription:
        'Built on a FastAPI backend with Groq Llama 3.1 as the LLM, this RAG architecture uses Sentence Transformers (all-MiniLM-L6-v2) for embeddings and ChromaDB for persistent vector storage. LangChain handles section-aware chunking and retrieval, while Pandas and PyPDF process the uploaded documents. Features include automatic fiscal year detection, semantic document search, and multi-format file support.',
      imageSrc: '/finreport.png',
      githubUrl: 'https://github.com/Shikhar28-web/Finacial_report_analysis',
      liveUrl: 'https://github.com/Shikhar28-web/Finacial_report_analysis',
      details: ['FastAPI', 'Groq Llama 3.1', 'ChromaDB', 'Sentence Transformers', 'LangChain', 'Pandas + PyPDF'],
    },
    {
      id: 4,
      title: 'NutriScan',
      tag: 'AI / Health',
      ctaLabel: 'Open project',
      description: 'AI-powered smart nutrition analyzer that scans barcodes and gives instant health insights.',
      overview: 'NutriScan lets users scan any product barcode and instantly get nutrition details, AI-based health scores, and personalized food ratings to make smarter dietary choices.',
      fullDescription:
        'Built with a React + Tailwind frontend and a Flask backend, NutriScan integrates the Open Food Facts API to fetch real product data and applies AI health scoring to rate foods on the fly. Barcode scanning, REST APIs, and a lightweight SQLite database make the whole experience fast and offline-friendly.',
      imageSrc: '/nutriscan.png',
      githubUrl: 'https://github.com/Shikhar28-web/NutriScan',
      liveUrl: 'https://github.com/Shikhar28-web/NutriScan',
      details: ['React + Tailwind', 'Flask (Python)', 'Open Food Facts API', 'AI Health Scoring', 'Barcode Scanner', 'SQLite'],
    },
    {
      id: 5,
      title: 'Bull Brain',
      tag: 'Stock Market',
      ctaLabel: 'Open project',
      description: 'AI-powered stock market prediction web app that forecasts future stock prices using LSTM deep learning models and historical market data.',
      overview: 'AI-powered stock market prediction web app that forecasts future stock prices using LSTM deep learning models and historical market data.',
      fullDescription:
        'This platform allows users to analyze stock trends, visualize moving averages, and compare actual vs predicted prices through interactive charts and real-time insights. It combines machine learning with a clean and user-friendly interface for smarter investment analysis.',
      imageSrc: '\stcok.png',
      githubUrl: 'https://github.com/Shikhar28-web/Stock-Prediction',
      liveUrl: 'https://github.com/Shikhar28-web/Stock-Prediction',
      details: ['Python', 'Streamlit', 'TensorFlow', 'Keras', 'Pandas', 'NumPy', ' Scikit-Learn', 'Matplotlib', 'yFinance', 'HTML', 'CSS', 'JavaScript'],
    },
  ]
  const [selectedProject, setSelectedProject] = useState<ProjectCard | null>(null)
  const [isPhone, setIsPhone] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  )

  useEffect(() => {
    const check = () => setIsPhone(window.innerWidth <= 768)
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const moveCursor = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect()
      hero.style.setProperty('--cursor-x', `${event.clientX - rect.left}px`)
      hero.style.setProperty('--cursor-y', `${event.clientY - rect.top}px`)
    }

    hero.addEventListener('pointermove', moveCursor)
    hero.style.setProperty('--cursor-x', `${window.innerWidth / 2}px`)
    hero.style.setProperty('--cursor-y', `${window.innerHeight / 2}px`)

    return () => {
      hero.removeEventListener('pointermove', moveCursor)
    }
  }, [])

  useEffect(() => {
    let index = 0
    let timeoutId = 0

    const tick = () => {
      setTypedName(fullName.slice(0, index))

      if (index >= fullName.length) {
        setTypingDone(true)
        return
      }

      index += 1
      timeoutId = window.setTimeout(tick, 130)
    }

    timeoutId = window.setTimeout(tick, 250)

    return () => window.clearTimeout(timeoutId)
  }, [])

  // typed intro
  useEffect(() => {
    let i = 0
    let t = 0
    const tickIntro = () => {
      setIntroTyped(introFull.slice(0, i))
      if (i >= introFull.length) {
        setIntroDone(true)
        return
      }
      i += 1
      t = window.setTimeout(tickIntro, 20)
    }
    t = window.setTimeout(tickIntro, 400)
    return () => window.clearTimeout(t)
  }, [])

  // scroll/fade observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement
          if (entry.isIntersecting) el.classList.add('in-view')
          else el.classList.remove('in-view')
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll('.fade-item').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!selectedProject) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedProject(null)
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleEscape)
    }
  }, [selectedProject])



  return (
    <div ref={heroRef} className="hero-page" id="home">
      <Header />
      <div className="cursor-glow" aria-hidden="true" />
      <div className="hero-texture" aria-hidden="true" />

      <section className="hero-content">
        <div className="hero-copy">
          <h1 className="hero-title">
            <span className="line line-small hero-greeting">Hello, I&apos;m</span>
            <span className="line name name-large typing-line">
              {typedName}
              {!typingDone && <span className="typing-cursor" aria-hidden="true" />}
            </span>
          </h1>
          <p className="subtitle">
            B.Tech(H) 3rd year student passionate about full-stack development,
            AI/ML, and creating innovative digital experiences. Specializing in
            modern web technologies with a keen interest in data science.
          </p>
        </div>

        {!isPhone && (
          <div className="hero-robot" aria-label="3D robot scene">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="hero-spline"
            />
          </div>
        )}
      </section>


      <section className="about-full fade-item" id="about">
        <div className="about-badges" aria-hidden="true">
          {floatingBadges.map((badge) => (
            <div key={badge.title} className={`float-box ${badge.className} fade-item`}>
              <strong>{badge.title}</strong>
              <span>{badge.text}</span>
            </div>
          ))}
        </div>

        <div className="about-content">
          <div className="about-copy">
            <h2 className="about-heading fade-item">A grounded builder with a curious streak</h2>
            <p className="typed-intro fade-item" style={{ transitionDelay: '80ms' }}>
              {introTyped}
              {!introDone && <span className="typing-cursor small" />}
            </p>

            <div className="about-main">
              <p className="fade-item">
                I’m a curious and creative individual who enjoys turning ideas into reality
                through dedication, consistency, and continuous learning.
              </p>

              <p className="fade-item">
                I enjoy building clean and modern digital experiences while focusing on
                creativity, problem-solving, and attention to detail.
              </p>

              <p className="fade-item">
                Outside of work, I enjoy photography, exploring creative designs, following
                cricket, and discovering music that keeps me motivated and inspired.
              </p>
            </div>

            <div className="about-details">
              {aboutCards.map((card, i) => (
                <article key={card.title} className="about-detail-card fade-item" style={{ transitionDelay: `${120 + i * 80}ms` }}>
                  <p className="about-detail-label">{card.title}</p>
                  <p className="about-detail-text">{card.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="about-visual" aria-hidden="false">
            <div className="about-portrait-frame fade-item" style={{ transitionDelay: '200ms' }}>
              <img className="about-photo" src="/me.jpg" alt="Shikhar Verma" />
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section" id="skill">
        <div className="skills-title-wrap fade-item">
          <p className="section-label skills-label skills-label-center">Skills</p>
        </div>

        <div className="skills-panels fade-item">
          {skillGroups.map((group, gi) => (
            <article key={group.title} className="skills-panel fade-item" style={{ transitionDelay: `${gi * 80}ms` }}>
              <p className="skills-panel-title">{group.title}</p>
              <div className="skill-ball-grid" role="list" aria-label={group.title}>
                {group.items.map((item, index) => (
                  <div
                    key={item.name}
                    className={`skill-ball skill-ball-${(index % 5) + 1}`}
                    role="listitem"
                    aria-label={item.name}
                  >
                    <item.Icon className="skill-ball-icon" aria-hidden="true" />
                    <span className="skill-ball-name">{item.name}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="projects-header fade-item">
          <h2 className="projects-heading">Crafting smart digital experiences with AI and modern tech.</h2>

        </div>

        <div className="projects-stack-wrap fade-item">
          <CardStack
            items={projects}
            initialIndex={0}
            autoAdvance
            intervalMs={2600}
            pauseOnHover
            showDots
            onAction={(project) => setSelectedProject(project)}
            className="projects-stack"
          />
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="site-footer fade-item relative overflow-hidden" id="contact">
        <div className="footer-inner relative z-10">




          {/* Contact section */}
          <div className="footer-contact pb-12">
            <p className="footer-contact-heading">Get in touch</p>
            <div className="footer-contact-links">
              {/* Email */}
              <a
                href="mailto:shikharverma950@gmail.com"
                className="footer-contact-card"
                aria-label="Send email to Shikhar Verma"
              >
                <span className="footer-contact-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <span className="footer-contact-info">
                  <strong>Email</strong>
                  <span>shikharverma950@gmail.com</span>
                </span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/shikharverma"
                target="_blank"
                rel="noreferrer"
                className="footer-contact-card"
                aria-label="Shikhar Verma on GitHub"
              >
                <span className="footer-contact-icon" aria-hidden="true">
                  <SiGithub size={20} />
                </span>
                <span className="footer-contact-info">
                  <strong>GitHub</strong>
                  <span>github.com/shikharverma</span>
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/shikhar-verma-72a732325/"
                target="_blank"
                rel="noreferrer"
                className="footer-contact-card"
                aria-label="Shikhar Verma on LinkedIn"
              >
                <span className="footer-contact-icon linkedin" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </span>
                <span className="footer-contact-info">
                  <strong>LinkedIn</strong>
                  <span>shikhar-verma-72a732325</span>
                </span>
              </a>
            </div>


            {/* Divider */}
            <div className="footer-divider" aria-hidden="true" />
          </div>
        </div>
        {/* Text hover effect */}
        <div className="lg:flex hidden h-[30rem] -mt-24 -mb-36 relative z-0">
          <TextHoverEffect text="SHIKHAR" className="z-50" />
        </div>

        <FooterBackgroundGradient />
      </footer>

      {selectedProject ? (
        <div
          className="project-modal-overlay"
          role="presentation"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="project-modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="project-modal-media">
              <img src={selectedProject.imageSrc} alt={selectedProject.title} className="project-modal-image" />
            </div>

            <div className="project-modal-body">
              <p className="project-modal-tag">{selectedProject.tag}</p>
              <h3 id="project-modal-title" className="project-modal-title">
                {selectedProject.title}
              </h3>
              <p className="project-modal-overview">{selectedProject.overview}</p>
              <p className="project-modal-description">{selectedProject.fullDescription}</p>

              <div className="project-modal-details">
                {selectedProject.details.map((detail) => (
                  <span key={detail} className="project-modal-pill">
                    {detail}
                  </span>
                ))}
              </div>

              <div className="project-modal-links">
                <a href={selectedProject.githubUrl} target="_blank" rel="noreferrer" className="project-link-btn">
                  <SiGithub className="h-4 w-4" />
                  GitHub
                </a>
                <a href={selectedProject.liveUrl} target="_blank" rel="noreferrer" className="project-link-btn project-link-btn-primary">
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}

    </div>
  )
}
