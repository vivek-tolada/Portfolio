'use client'
import './globals.css'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Scroll fade-up animation
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80)
        }
      })
    }, { threshold: 0.1 })
    document.querySelectorAll('.fade-up').forEach(el => obs.observe(el))

    // Cursor glow
    const handleMouseMove = (e) => {
      const x = e.clientX, y = e.clientY
      let glow = document.getElementById('cursor-glow')
      if (!glow) {
        glow = document.createElement('div')
        glow.id = 'cursor-glow'
        glow.style.cssText = 'position:fixed;width:300px;height:300px;border-radius:50%;background:radial-gradient(circle,rgba(0,255,179,0.04) 0%,transparent 70%);pointer-events:none;z-index:0;transition:transform 0.1s;'
        document.body.appendChild(glow)
      }
      glow.style.transform = `translate(${x - 150}px,${y - 150}px)`
    }
    document.addEventListener('mousemove', handleMouseMove)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      obs.disconnect()
    }
  }, [])

  return (
    <>
      {/* NAV */}
      <nav>
        <div className="nav-logo">VT.</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div className="hero-tag">AI / ML Engineer</div>
        <div className="hero-name">
          <div className="line1">Tolada Venkat</div>
          <div className="line2">Sai Vivek</div>
        </div>
        <p className="hero-desc">
          Building intelligent systems at the intersection of{' '}
          <strong>Large Language Models</strong>, autonomous agents, and real-world
          data pipelines. Currently completing B.Tech in AI &amp; Data Science at
          Chaitanya Engineering College, Visakhapatnam.
        </p>
        <div className="hero-ctas">
          <a className="btn-primary" href="#projects">View Projects</a>
          <a className="btn-secondary" href="mailto:vivektolada@gmail.com">Hire Me →</a>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <div className="num">4+</div>
            <div className="lbl">AI Projects Shipped</div>
          </div>
          <div className="stat-item">
            <div className="num">8.3</div>
            <div className="lbl">CGPA</div>
          </div>
          <div className="stat-item">
            <div className="num">3</div>
            <div className="lbl">Industry Internships</div>
          </div>
          <div className="stat-item">
            <div className="num">2026</div>
            <div className="lbl">Graduating</div>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      {/* ABOUT */}
      <section id="about">
        <div className="section-header fade-up">
          <div className="section-tag">About Me</div>
          <h2 className="section-title">Engineering AI that<br />actually works.</h2>
        </div>
        <div className="about-grid fade-up">
          <div className="about-text">
            <p>I&apos;m a final-year <strong>AI &amp; Data Science</strong> student with a focus on building production-ready intelligent systems — from autonomous learning agents to real-time computer vision pipelines.</p>
            <p>My work spans the full ML stack: designing LLM-powered workflows, engineering prompt systems, integrating ML models into web APIs, and optimizing inference pipelines. I&apos;m particularly drawn to <strong>explainable AI</strong> and systems that can reason transparently.</p>
            <p>Beyond code, I&apos;ve applied my skills in three real-world internships — gaining exposure to IT operations, ML fundamentals, and intelligent agent development through Infosys Springboard.</p>
          </div>
          <div className="about-highlights">
            <div className="highlight-card">
              <div className="h-num">LLM</div>
              <div className="h-txt">FastAPI + LLM integration for DevOps automation</div>
            </div>
            <div className="highlight-card">
              <div className="h-num">CV</div>
              <div className="h-txt">Real-time facial recognition with OpenCV &amp; Python</div>
            </div>
            <div className="highlight-card">
              <div className="h-num">XAI</div>
              <div className="h-txt">Feynman-pedagogy explainable autonomous agents</div>
            </div>
            <div className="highlight-card">
              <div className="h-num">8.3</div>
              <div className="h-txt">CGPA — Chaitanya Engineering College, Vizag</div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* PROJECTS */}
      <section id="projects">
        <div className="section-header fade-up">
          <div className="section-tag">Featured Work</div>
          <h2 className="section-title">Projects that ship.</h2>
        </div>
        <div className="projects-grid">

          <div className="project-card featured fade-up">
            <div>
              <span className="proj-tag agent">Autonomous Agent</span>
              <h3 className="proj-title">Autonomous Learning Agent with Checkpoint Verification &amp; Feynman Pedagogy</h3>
              <p className="proj-desc">Engineered an AI agent capable of iterative self-teaching with structured validation gates. Integrated Feynman Pedagogy principles — forcing the model to explain concepts back in simple terms — to surface gaps in reasoning. Result: measurable gains in knowledge retention and reasoning transparency over baseline LLM responses.</p>
              <div className="proj-metrics">
                <div className="metric"><span className="m-num">~40%</span><span className="m-lbl">Retention Improvement</span></div>
                <div className="metric"><span className="m-num">XAI</span><span className="m-lbl">Explainability Built-In</span></div>
                <div className="metric"><span className="m-num">Infosys</span><span className="m-lbl">Springboard Project</span></div>
              </div>
              <div className="proj-stack">
                <span className="stack-tag">Python</span>
                <span className="stack-tag">LLM APIs</span>
                <span className="stack-tag">Checkpoint Validation</span>
                <span className="stack-tag">Explainable AI</span>
                <span className="stack-tag">Feynman Method</span>
              </div>
            </div>
          </div>

          <div className="project-card fade-up">
            <span className="proj-tag llm">LLM · DevOps</span>
            <h3 className="proj-title">LLM-Powered DevOps Assistant</h3>
            <p className="proj-desc">Built a FastAPI backend serving an LLM assistant that automates CI/CD debugging, generates Dockerfiles, explains Kubernetes configs, and reviews pull requests — cutting repetitive DevOps toil by intelligently routing developer questions through prompt-engineered pipelines.</p>
            <div className="proj-metrics">
              <div className="metric"><span className="m-num">5+</span><span className="m-lbl">DevOps Workflows</span></div>
              <div className="metric"><span className="m-num">FastAPI</span><span className="m-lbl">REST Backend</span></div>
            </div>
            <div className="proj-stack">
              <span className="stack-tag">FastAPI</span>
              <span className="stack-tag">LLMs</span>
              <span className="stack-tag">Prompt Engineering</span>
              <span className="stack-tag">Docker</span>
              <span className="stack-tag">Kubernetes</span>
            </div>
          </div>

          <div className="project-card fade-up">
            <span className="proj-tag cv">Computer Vision</span>
            <h3 className="proj-title">Face Recognition Attendance System</h3>
            <p className="proj-desc">Designed an end-to-end real-time attendance pipeline using Python and OpenCV. Handles face encoding, identity matching, and timestamp logging to a structured database — fully optimized for live webcam feeds with low-latency inference.</p>
            <div className="proj-metrics">
              <div className="metric"><span className="m-num">Real-Time</span><span className="m-lbl">Webcam Inference</span></div>
              <div className="metric"><span className="m-num">Auto-Log</span><span className="m-lbl">DB Timestamping</span></div>
            </div>
            <div className="proj-stack">
              <span className="stack-tag">Python</span>
              <span className="stack-tag">OpenCV</span>
              <span className="stack-tag">face_recognition</span>
              <span className="stack-tag">SQLite</span>
            </div>
          </div>

          <div className="project-card fade-up">
            <span className="proj-tag data">Data · Analytics</span>
            <h3 className="proj-title">Strategic Product Placement Analysis</h3>
            <p className="proj-desc">Built a data-driven framework for evaluating product placement effectiveness using pattern-based analytical models. Delivered actionable positioning recommendations by quantifying visibility metrics and correlating placement decisions with outcome signals.</p>
            <div className="proj-metrics">
              <div className="metric"><span className="m-num">Pattern ML</span><span className="m-lbl">Models Used</span></div>
              <div className="metric"><span className="m-num">Data-First</span><span className="m-lbl">Decision Framework</span></div>
            </div>
            <div className="proj-stack">
              <span className="stack-tag">Python</span>
              <span className="stack-tag">Pandas</span>
              <span className="stack-tag">Scikit-learn</span>
              <span className="stack-tag">Tableau</span>
              <span className="stack-tag">Seaborn</span>
            </div>
          </div>

        </div>
      </section>

      <div className="divider"></div>

      {/* EXPERIENCE */}
      <section id="experience">
        <div className="section-header fade-up">
          <div className="section-tag">Experience</div>
          <h2 className="section-title">Where I&apos;ve worked.</h2>
        </div>
        <div className="exp-timeline">
          <div className="exp-item fade-up">
            <div className="exp-period">Sep 2025 — Jan 2026</div>
            <div className="exp-role">AI / ML Intern</div>
            <div className="exp-company">Infosys Springboard Virtual Internship 6.0</div>
            <div className="exp-desc">Developed an Autonomous Learning Agent as the capstone project, applying explainable AI principles and intelligent agent design patterns. Gained deep exposure to autonomous system development, checkpoint verification architectures, and XAI-driven pedagogical frameworks.</div>
          </div>
          <div className="exp-item fade-up">
            <div className="exp-period">May 2025 — Jul 2025</div>
            <div className="exp-role">IT &amp; Systems Intern</div>
            <div className="exp-company">CTC Tech Services</div>
            <div className="exp-desc">Gained hands-on exposure to enterprise IT infrastructure, system troubleshooting workflows, and technical support operations in production environments. Collaborated with cross-functional teams on software deployments and incident resolution.</div>
          </div>
          <div className="exp-item fade-up">
            <div className="exp-period">May 2025 — Jul 2025</div>
            <div className="exp-role">Data Science Intern</div>
            <div className="exp-company">Edunutshell</div>
            <div className="exp-desc">Applied Python programming for hands-on data analysis and ML project development. Built foundational ML pipelines covering preprocessing, feature engineering, model training, and evaluation — with a focus on practical project delivery.</div>
          </div>
          <div className="exp-item fade-up">
            <div className="exp-period">Oct 2022 — Jul 2026</div>
            <div className="exp-role">B.Tech — AI &amp; Data Science</div>
            <div className="exp-company">Chaitanya Engineering College, Visakhapatnam · CGPA: 8.3</div>
            <div className="exp-desc">Pursuing a degree in Artificial Intelligence and Data Science with coursework spanning ML theory, deep learning architectures, data engineering, and intelligent systems design.</div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* SKILLS */}
      <section id="skills">
        <div className="section-header fade-up">
          <div className="section-tag">Technical Skills</div>
          <h2 className="section-title">The stack I build with.</h2>
        </div>
        <div className="skills-grid fade-up">
          <div className="skill-group">
            <div className="skill-group-label">Languages</div>
            <div className="skill-list">
              <div className="skill-row"><span className="skill-name">Python</span><div className="skill-bar-wrap"><div className="skill-bar" style={{width:'90%'}}></div></div></div>
              <div className="skill-row"><span className="skill-name">SQL</span><div className="skill-bar-wrap"><div className="skill-bar" style={{width:'75%'}}></div></div></div>
              <div className="skill-row"><span className="skill-name">C</span><div className="skill-bar-wrap"><div className="skill-bar" style={{width:'60%'}}></div></div></div>
            </div>
          </div>
          <div className="skill-group">
            <div className="skill-group-label">ML / AI Frameworks</div>
            <div className="skill-list">
              <div className="skill-row"><span className="skill-name">Scikit-learn</span><div className="skill-bar-wrap"><div className="skill-bar" style={{width:'85%'}}></div></div></div>
              <div className="skill-row"><span className="skill-name">TensorFlow / Keras</span><div className="skill-bar-wrap"><div className="skill-bar" style={{width:'75%'}}></div></div></div>
              <div className="skill-row"><span className="skill-name">PyTorch</span><div className="skill-bar-wrap"><div className="skill-bar" style={{width:'65%'}}></div></div></div>
              <div className="skill-row"><span className="skill-name">FastAPI</span><div className="skill-bar-wrap"><div className="skill-bar" style={{width:'80%'}}></div></div></div>
              <div className="skill-row"><span className="skill-name">OpenCV</span><div className="skill-bar-wrap"><div className="skill-bar" style={{width:'78%'}}></div></div></div>
            </div>
          </div>
          <div className="skill-group">
            <div className="skill-group-label">Data &amp; Visualization</div>
            <div className="skill-list">
              <div className="skill-row"><span className="skill-name">Pandas / NumPy</span><div className="skill-bar-wrap"><div className="skill-bar" style={{width:'88%'}}></div></div></div>
              <div className="skill-row"><span className="skill-name">Matplotlib / Seaborn</span><div className="skill-bar-wrap"><div className="skill-bar" style={{width:'80%'}}></div></div></div>
              <div className="skill-row"><span className="skill-name">Tableau</span><div className="skill-bar-wrap"><div className="skill-bar" style={{width:'70%'}}></div></div></div>
              <div className="skill-row"><span className="skill-name">MySQL</span><div className="skill-bar-wrap"><div className="skill-bar" style={{width:'72%'}}></div></div></div>
            </div>
          </div>
        </div>

        <div className="section-tag fade-up" style={{marginTop:'2rem',marginBottom:'1.5rem'}}>Certifications</div>
        <div className="certs-grid fade-up">
          <div className="cert-card">
            <div className="cert-icon">ML</div>
            <div>
              <div className="cert-name">Machine Learning Foundation Certification</div>
              <div className="cert-issuer">Infosys — Algorithms, Preprocessing, Model Evaluation</div>
            </div>
          </div>
          <div className="cert-card">
            <div className="cert-icon">DS</div>
            <div>
              <div className="cert-name">Data Science Professional Certificate</div>
              <div className="cert-issuer">Coursera — Statistics, ML, Visualization, Python</div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* CONTACT */}
      <div className="contact-section" id="contact">
        <div className="contact-big fade-up">
          Let&apos;s build something<br /><span>intelligent.</span>
        </div>
        <p className="contact-sub fade-up">Open to full-time roles, internships, and collaborative AI/ML projects. Currently based in Visakhapatnam, India.</p>
        <div className="contact-links fade-up">
          <a className="contact-link" href="mailto:vivektolada@gmail.com">✉ vivektolada@gmail.com</a>
          <a className="contact-link" href="https://www.linkedin.com/in/vivek-tolada-b52b25287/" target="_blank" rel="noopener noreferrer">↗ LinkedIn</a>
          <a className="contact-link" href="https://github.com/vivek-tolada" target="_blank" rel="noopener noreferrer">↗ GitHub</a>
          <a className="contact-link" href="tel:7995135452">📞 +91 7995135452</a>
        </div>
      </div>

      <footer>
        <span>© 2025 Tolada Venkat Sai Vivek · Built with intent, not a template.</span>
      </footer>
    </>
  )
}
