import React from 'react'
import { ArrowUpRight, Gamepad2, Code2, Box, Gauge, Menu, X, Github, Mail, Linkedin, ChevronRight } from 'lucide-react'

const services = [
  { icon: Gamepad2, title: 'Gameplay Engineering', text: 'Responsive player controls, combat loops, interaction systems, and polished moment-to-moment gameplay.' },
  { icon: Box, title: 'World & Environment', text: 'Atmospheric environments, modular level design, lighting, and immersive open-world spaces.' },
  { icon: Code2, title: 'Systems & Tools', text: 'Clean, maintainable gameplay architecture, UI systems, AI behaviors, and editor tooling.' },
  { icon: Gauge, title: 'Optimization', text: 'Profiling, performance tuning, scalable settings, and practical optimization for target hardware.' },
]
const projects = [
  { n: '01', type: 'OPEN-WORLD / GAMEPLAY', title: 'NeonDistrict', desc: 'An ambitious urban sandbox concept focused on living traffic, pedestrian AI, vehicle interaction, and a reactive city.', tags: ['Unreal Engine 5', 'C++', 'AI Systems'], cls: 'city' },
  { n: '02', type: 'PROTOTYPE / SYSTEMS', title: 'Vehicle Framework', desc: 'A modular driving foundation exploring vehicle handling, enter-and-exit interaction, damage, and repair loops.', tags: ['Vehicle Physics', 'Blueprints', 'C++'], cls: 'car' },
  { n: '03', type: 'TECH DEMO / ENVIRONMENT', title: 'Afterglow District', desc: 'A cinematic environment study built around mood, material detail, composition, and real-time lighting.', tags: ['Environment Art', 'Lighting', 'UE5'], cls: 'land' },
]
function App() {
  const [menu, setMenu] = React.useState(false)
  const close = () => setMenu(false)
  return <div className="site-shell">
    <div className="noise" />
    <header className="nav wrap">
      <a className="brand" href="#top"><span className="brand-mark">N</span><span>NEON<span className="muted">DISTRICT</span><small>GAME DEVELOPMENT</small></span></a>
      <button className="menu-toggle" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">{menu ? <X/> : <Menu/>}</button>
      <nav className={menu ? 'nav-links open' : 'nav-links'}>
        <a href="#work" onClick={close}>Work</a><a href="#services" onClick={close}>Services</a><a href="#about" onClick={close}>About</a><a className="nav-cta" href="#contact" onClick={close}>Let’s talk <ArrowUpRight size={15}/></a>
      </nav>
    </header>

    <main id="top">
      <section className="hero wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse"/> INDEPENDENT GAME DEVELOPMENT</div>
          <h1>BUILD WORLDS.<br/><em>CREATE</em> EXPERIENCES.</h1>
          <p className="hero-lede">I turn ambitious game ideas into playable experiences — from core gameplay systems to immersive real-time worlds.</p>
          <div className="hero-actions"><a className="button primary" href="#work">Explore my work <ArrowUpRight size={17}/></a><a className="text-link" href="#contact">Start a project <ChevronRight size={16}/></a></div>
          <div className="hero-meta"><span><b>01</b> GAMEPLAY SYSTEMS</span><span><b>02</b> REAL-TIME WORLDS</span><span><b>03</b> TECHNICAL DESIGN</span></div>
        </div>
        <div className="hero-art" aria-label="Abstract futuristic neon city artwork">
          <div className="art-grid"/><div className="sun"/><div className="tower t1"/><div className="tower t2"/><div className="tower t3"/><div className="road"/><div className="art-label"><span>WORLD_001</span><b>THE CITY NEVER SLEEPS</b><small>REAL-TIME / INTERACTIVE / ALIVE</small></div>
          <div className="crosshair">+</div>
        </div>
        <div className="scroll-note">SCROLL TO EXPLORE <span/></div>
      </section>

      <section className="ticker"><div>DESIGN <i>✳</i> DEVELOP <i>✳</i> OPTIMIZE <i>✳</i> SHIP <i>✳</i> DESIGN <i>✳</i> DEVELOP <i>✳</i> OPTIMIZE <i>✳</i> SHIP <i>✳</i></div></section>

      <section className="section wrap" id="work">
        <div className="section-head"><div><div className="eyebrow">01 / SELECTED PROJECTS</div><h2>MADE TO BE <em>PLAYED.</em></h2></div><p>Experiments, prototypes, and worlds in progress. Each project is an opportunity to solve interesting problems and create memorable play.</p></div>
        <div className="project-grid">{projects.map(p => <article className="project-card" key={p.n}>
          <div className={`project-visual ${p.cls}`}><div className="visual-lines"/><span className="project-number">{p.n} / PROJECT</span><span className="visual-cross">✳</span><span className="visual-caption">NEON DISTRICT LABS</span></div>
          <div className="project-info"><div className="project-type">{p.type}</div><h3>{p.title}</h3><p>{p.desc}</p><div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div></div>
        </article>)}</div>
      </section>

      <section className="services-section" id="services"><div className="wrap section">
        <div className="section-head"><div><div className="eyebrow">02 / WHAT I DO</div><h2>FROM CONCEPT<br/>TO <em>CONTROLLER.</em></h2></div><p>Practical development support for teams and creators who want to turn a strong concept into a solid playable foundation.</p></div>
        <div className="service-grid">{services.map((s,i) => <article className="service" key={s.title}><div className="service-top"><span>0{i+1}</span><s.icon size={24}/></div><h3>{s.title}</h3><p>{s.text}</p><div className="service-line"/></article>)}</div>
      </div></section>

      <section className="about wrap" id="about"><div className="about-mark">ND<span>®</span></div><div className="about-copy"><div className="eyebrow">03 / THE APPROACH</div><h2>BUILT WITH<br/><em>INTENTION.</em></h2><p>I’m an independent game developer focused on the intersection of gameplay, technology, and atmosphere. I care about responsive controls, readable systems, strong visual identity, and performance that respects the player’s hardware.</p><p className="about-small">CURRENT TOOLKIT <b>UNREAL ENGINE</b><b>C++</b><b>REACT</b><b>REAL-TIME 3D</b></p></div></section>

      <section className="contact-section" id="contact"><div className="wrap contact-inner"><div className="eyebrow">04 / HAVE A PROJECT IN MIND?</div><h2>LET’S MAKE<br/><em>SOMETHING REAL.</em></h2><p>Have a game idea, need a gameplay prototype, or want to collaborate? Tell me what you’re building.</p><a className="button primary" href="mailto:hello@example.com">Start a conversation <ArrowUpRight size={17}/></a><div className="contact-orbit">✳</div></div></section>
    </main>
    <footer className="footer wrap"><a className="brand" href="#top"><span className="brand-mark">N</span><span>NEON<span className="muted">DISTRICT</span><small>GAME DEVELOPMENT</small></span></a><span>© {new Date().getFullYear()} NEONDISTRICT. BUILT FOR PLAY.</span><div className="socials"><a href="https://github.com/" aria-label="GitHub"><Github size={17}/></a><a href="mailto:hello@example.com" aria-label="Email"><Mail size={17}/></a><a href="https://linkedin.com/" aria-label="LinkedIn"><Linkedin size={17}/></a></div></footer>
  </div>
}
export default App
