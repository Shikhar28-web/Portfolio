'use client'

import { useEffect, useRef, useState } from 'react'

import { Header } from '@/components/ui/header-2'
import { SplineScene } from '@/components/ui/splite'

export function SplineSceneBasic() {
  const heroRef = useRef<HTMLDivElement>(null)
  const fullName = 'Shikhar Verma'
  const [typedName, setTypedName] = useState('')
  const [typingDone, setTypingDone] = useState(false)
  const introFull = "Passionate about creating meaningful digital experiences and constantly exploring new ways to grow, learn, and innovate.";
  const [introTyped, setIntroTyped] = useState('')
  const [introDone, setIntroDone] = useState(false)
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
      { threshold: 0.15 }
    )

    document.querySelectorAll('.fade-item').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  

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
            B.Tech 3rd year student passionate about full-stack development,
            AI/ML, and creating innovative digital experiences. Specializing in
            modern web technologies with a keen interest in data science.
          </p>
        </div>

        <div className="hero-robot" aria-label="3D robot scene">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="hero-spline"
          />
          </div>
      </section>

      
      <section className="about-full" id="about">
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
            <p className="section-label about-label">About Me</p>
            <h2 className="about-heading">A grounded builder with a curious streak</h2>
            <p className="typed-intro">
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
              {aboutCards.map((card) => (
                <article key={card.title} className="about-detail-card fade-item">
                  <p className="about-detail-label">{card.title}</p>
                  <p className="about-detail-text">{card.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="about-visual" aria-hidden="false">
            <div className="about-portrait-frame fade-item">
              <img className="about-photo" src="/me.jpg" alt="Shikhar Verma" />
            </div>
          </div>
        </div>
      </section>

        <section className="section-grid" id="skill">
          <article className="section-card">
            <p className="section-label">Skill</p>
            <h2>React, TypeScript, Tailwind, GSAP, Spline</h2>
          </article>
          <article className="section-card" id="projects">
            <p className="section-label">Projects</p>
            <h2>Interactive landing pages and 3D storytelling builds.</h2>
          </article>
        </section>

        <section className="section-card" id="contact">
          <p className="section-label">Contact</p>
          <h2>Open to freelance, collaboration, and creative builds.</h2>
        </section>
    </div>
  )
}
