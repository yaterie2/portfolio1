<script>
  import "./Landing.scss";
  import { scrollToSection } from '../../../lib/navigation';

  export let name = "Yannick Schwab";
  export let subtitle = "Connecting the worlds of design and coding";
</script>

<section class="hero" id="hero">
  <div class="hero-bg-grid"></div>
  <div class="hero-inner">
    <div class="hero-portrait-wrap">
      <div class="portrait-glow"></div>
      <img src="/PortraitPortfolio.png" alt="Portrait Yannick Schwab" class="portrait" />
      <div class="portrait-badge">
        <span class="badge-dot"></span>
        Available for work
      </div>
    </div>
    <div class="hero-text">
      <span class="hero-eyebrow">Digital Product Designer & Developer</span>
      <h1>Hello, I'm<br><span class="gradient-text">{name}</span></h1>
      <p class="hero-sub">{subtitle}</p>
      <div class="hero-cta">
        <button class="btn-primary" on:click={() => scrollToSection('projects')}>
          View Projects
        </button>
        <button class="btn-ghost" on:click={() => scrollToSection('about-me')}>
          About Me
        </button>
      </div>
    </div>
  </div>
  <div class="scroll-hint">
    <div class="scroll-line"></div>
    <span>Scroll</span>
  </div>
</section>