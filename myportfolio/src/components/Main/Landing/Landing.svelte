<script lang="ts">
  import "./Landing.scss";
  import { onMount } from 'svelte';
  import { scrollToSection } from '../../../lib/navigation';

  export let name = "Yannick Schwab";
  export let subtitle = "Connecting the worlds of design and coding";

  let nameEl: HTMLElement;
  let heroTextEl: HTMLElement;

  function fitNameToContainer(): void {
    if (!nameEl || !heroTextEl) return;
    if (window.innerWidth > 860) { nameEl.style.fontSize = ''; return; }

    const containerWidth = heroTextEl.getBoundingClientRect().width;
    let low = 10, high = 80;

    while (high - low > 0.5) {
      const mid = (low + high) / 2;
      nameEl.style.fontSize = mid + 'px';
      if (nameEl.getBoundingClientRect().width <= containerWidth) {
        low = mid;
      } else {
        high = mid;
      }
    }
    nameEl.style.fontSize = low + 'px';
  }

  onMount(() => {
    fitNameToContainer();
    window.addEventListener('resize', fitNameToContainer);
    return () => window.removeEventListener('resize', fitNameToContainer);
  });
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
    <div class="hero-text" bind:this={heroTextEl}>
      <span class="hero-eyebrow">Digital Product Designer & Developer</span>
      <h1>Hello, I'm<br><span class="gradient-text name-nowrap" bind:this={nameEl}>{name}</span></h1>
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