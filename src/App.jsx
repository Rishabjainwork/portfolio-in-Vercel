import { useEffect, useRef, useState } from "react";
import "./App.css";
import myPhoto from "./my-photo.png";

const skills = [
  { icon: "⚛️", name: "React.js", desc: "Building dynamic UIs with hooks, context & modern patterns", level: 85 },
  { icon: "🎨", name: "CSS / Tailwind", desc: "Pixel-perfect layouts, animations & responsive design", level: 80 },
  { icon: "🟨", name: "JavaScript", desc: "ES6+, async/await, DOM manipulation & algorithms", level: 88 },
  { icon: "🌐", name: "Node.js", desc: "REST APIs, Express servers & backend logic", level: 72 },
  { icon: "🐘", name: "C / C++", desc: "Data structures, algorithms & competitive programming", level: 78 },
  { icon: "🧠", name: "MCP/API", desc: "helps AI models use APIs, tools, and external systems to perform real-world actions.", level: 65 },
];

const projects = [
  { num: "01", title: "ProStudy Platform", desc: "A full-stack study companion with notes, schedules & progress tracking", tags: ["React", "Node.js", "MongoDB"] },
  { num: "02", title: "Portfolio Website", desc: "This very site — animated, responsive & built from scratch", tags: ["React", "Framer Motion", "Vite"] },
  { num: "03", title: "Algorithm Visualizer", desc: "Interactive visualizations for sorting & graph algorithms", tags: ["JavaScript", "Canvas API"] },
  { num: "04", title: "3D Blender Renders", desc: "Personal art & 3D scenes crafted in Blender", tags: ["Blender", "3D", "Art"] },
];

export default function App() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
      setTimeout(() => {
        if (followerRef.current) {
          followerRef.current.style.left = e.clientX + "px";
          followerRef.current.style.top = e.clientY + "px";
        }
      }, 80);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          if (e.target === skillsRef.current) setSkillsVisible(true);
        }
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-follower" ref={followerRef} />

      {/* NAV */}
      <nav>
        <div className="nav-logo">RJ<span>.</span></div>
        <div className="nav-links">
          <a href="#about">about</a>
          <a href="#skills">skills</a>
          <a href="#projects">projects</a>
          <a href="#contact">contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="grid-bg" />
        <div className="glow" />
        <p className="hero-tag">// available for opportunities</p>
        <h1>
          <span className="line"><span>Rishab</span></span>
          <span className="line"><span>Jain<span className="accent">.</span></span></span>
          <span className="line"><span style={{color:'var(--muted)', fontSize:'0.55em', fontWeight:400}}>Developer & Designer</span></span>
        </h1>
        <p className="hero-sub">
          CS student crafting clean code, beautiful interfaces,<br />
          and the occasional 3D render at 2am.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn-primary">View Work</a>
          <a href="#contact" className="btn-ghost">Get in Touch</a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{background:'var(--bg2)'}}>
        <div className="about-grid reveal">
          <div className="about-text">
            <p className="section-label">// 01 — about</p>
            <h2 className="section-title">A bit about<br />who I am</h2>
            <p>I'm <strong>Rishab Jain</strong>, a Computer Science student based in <strong>India</strong>. I love building things for the web — from clean React UIs to backend APIs.</p>
            <p>Currently in my 2nd Year, diving deep into <strong>algorithms, data structures, and full-stack development</strong>. Outside of code, I explore automation workflows and study for GATE.</p>
            <div className="stats">
              <div className="stat"><div className="stat-num">2nd</div><div className="stat-label">YEAR</div></div>
              <div className="stat"><div className="stat-num">10+</div><div className="stat-label">PROJECTS</div></div>
              <div className="stat"><div className="stat-num">6+</div><div className="stat-label">TECHNOLOGIES</div></div>
              <div className="stat"><div className="stat-num">∞</div><div className="stat-label">CURIOSITY</div></div>
            </div>
          </div>
          <div className="about-visual">
            <div className="about-img-box">
              <img src={myPhoto} alt="Rishab Jain" className="about-photo" />
            </div>
            <div className="about-badge">CS Student 🎓</div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <div className="reveal">
          <p className="section-label">// 02 — skills</p>
          <h2 className="section-title">What I work with</h2>
        </div>
        <div className="skills-grid reveal" ref={skillsRef}>
          {skills.map((s, i) => (
            <div className="skill-card" key={i}>
              <div className="skill-icon">{s.icon}</div>
              <div className="skill-name">{s.name}</div>
              <div className="skill-desc">{s.desc}</div>
              <div className="skill-bar">
                <div className="skill-fill" style={{width: skillsVisible ? s.level + '%' : '0%'}} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{background:'var(--bg2)'}}>
        <div className="reveal">
          <p className="section-label">// 03 — projects</p>
          <h2 className="section-title">Things I've built</h2>
        </div>
        <div className="projects-list reveal">
          {projects.map((p, i) => (
            <div className="project-card" key={i}>
              <span className="project-num">{p.num}</span>
              <div className="project-info">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((t, j) => <span className="tag" key={j}>{t}</span>)}
                </div>
              </div>
              <span className="project-arrow">↗</span>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="contact-inner reveal">
          <p className="section-label">// 04 — contact</p>
          <h2 className="section-title">Let's talk</h2>
          <div className="big-email">
            <a href="mailto:rishabjain.workpro@gmail.com">rishabjain.workpro@gmail.com</a>
          </div>
          <p>Open to internships, collaborations, and interesting projects.<br />Drop a message — I read everything.</p>
          <div className="contact-links">
            <a href="https://github.com/Rishabjainwork" target="_blank" className="contact-link">⬡ GitHub</a>
            <a href="https://www.linkedin.com/in/rishab-jain-b30029368" target="_blank" className="contact-link">in LinkedIn</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 <span className="footer-accent">Rishab Jain</span>. Built with React + Vite.</p>
        <p style={{fontFamily:'DM Mono, monospace', fontSize:'0.7rem', color:'var(--muted)'}}>Designed & developed by me 🖤</p>
      </footer>
    </>
  );
}
