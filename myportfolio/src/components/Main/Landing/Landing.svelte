<script lang="ts">
  import "./Landing.scss";
  import { onMount } from 'svelte';
  import { scrollToSection } from '../../../lib/navigation';

  export let name = "Yannick Schwab";
  export let subtitle = "Connecting the worlds of design and coding";

  let nameEl: HTMLElement;
  let heroTextEl: HTMLElement;
  let iframeEl: HTMLIFrameElement;
  let iframeBodyEl: HTMLElement;
  let iframeLoaded = false;

  const IFRAME_WIDTH = 1280;

  function scaleIframe(): void {
    if (!iframeEl || !iframeBodyEl) return;
    const scale = iframeBodyEl.offsetWidth / IFRAME_WIDTH;
    iframeEl.style.transform = `scale(${scale})`;
    iframeBodyEl.style.height = (680 * scale) + 'px';
  }

  let iframePanelEl: HTMLElement;
  let scrollProgress = 0; // 0 = oben, 1 = voll animiert

  function updateScrollAnimation(): void {
    if (!iframePanelEl) return;

    const container = window.innerWidth > 860
      ? document.querySelector('.main') as HTMLElement | null
      : null;
    const scrollTop = container ? container.scrollTop : window.scrollY;
    const vh = container ? container.clientHeight : window.innerHeight;

    // Panel-Position relativ zum Viewport
    const rect = iframePanelEl.getBoundingClientRect();
    // Animation beginnt wenn Panel in den Viewport kommt, endet wenn es zentriert ist
    const start = vh;        // Panel-Oberkante tritt in Viewport ein
    const end   = vh * 0.3;  // Panel ist fast zentriert

    const progress = Math.max(0, Math.min(1, (start - rect.top) / (start - end)));
    scrollProgress = progress;
  }

  function handleScroll(): void {
    updateScrollAnimation();
  }

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
    scaleIframe();
    updateScrollAnimation();

    const mainEl = document.querySelector<HTMLElement>('.main');
    const scrollTarget = window.innerWidth > 860 && mainEl ? mainEl : window;
    scrollTarget.addEventListener('scroll', handleScroll as EventListener, { passive: true });

    const handleResize = () => { fitNameToContainer(); scaleIframe(); updateScrollAnimation(); };
    window.addEventListener('resize', handleResize);

    return () => {
      scrollTarget.removeEventListener('scroll', handleScroll as EventListener);
      window.removeEventListener('resize', handleResize);
    };
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

  <div class="iframe-wrap">
    <!-- Skizze: nur Desktop, verblasst beim Scrollen -->
    <div class="sketch-hint" style="--progress: {scrollProgress}">
      <svg viewBox="0 0 280 130" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <!-- Text rechtsbündig, leicht schräg -->
        <text x="220" y="30"  class="sketch-text" text-anchor="end" transform="rotate(-4 220 30)">A taste of my</text>
        <text x="210" y="60"  class="sketch-text" text-anchor="end" transform="rotate(-4 210 60)">latest semester</text>
        <!-- Pfeil startet unter der Schrift, etwas tiefer -->
        <path d="M 140 84 C 136 100, 124 114, 110 136" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <!-- Pfeilspitze rotiert mit der Kurvenrichtung -->
        <path d="M 110 136 L 102 126" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <path d="M 110 136 L 122 130" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </div>

    <div
      class="iframe-panel"
      bind:this={iframePanelEl}
      style="--progress: {scrollProgress}"
    >
    <div class="iframe-header">
      <div class="iframe-dots">
        <span></span><span></span><span></span>
      </div>
      <div class="iframe-url">interstitial-indol.vercel.app</div>
      <a
        href="https://interstitial-indol.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        class="iframe-open"
        aria-label="In neuem Tab öffnen"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          <polyline points="15 3 21 3 21 9"/>
          <line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
      </a>
    </div>
    <div class="iframe-body" bind:this={iframeBodyEl}>
      {#if !iframeLoaded}
        <div class="iframe-loader">
          <div class="loader-ring"></div>
        </div>
      {/if}
      <iframe
        bind:this={iframeEl}
        src="https://interstitial-indol.vercel.app"
        title="Interaktive Webseite"
        class:loaded={iframeLoaded}
        on:load={() => { iframeLoaded = true; scaleIframe(); }}
        loading="lazy"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
      ></iframe>
    </div>
  </div><!-- /iframe-wrap -->

</section>