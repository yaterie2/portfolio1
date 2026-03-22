<script lang="ts">
  import "./Main.scss";
  import { onMount } from 'svelte';
  import Landing from "./Landing/Landing.svelte";
  import About from "./About/About.svelte";
  import Skills from "./Skills/Skills.svelte";
  import Projects from "./Projects/Projects.svelte";
  import Imprint from "./Imprint/Imprint.svelte";

  const MOBILE_BREAKPOINT = 860;

  const EXIT_START_DESKTOP  = 0.25;
  const ENTER_START_DESKTOP = 0.35;
  const EXIT_START_MOBILE   = 0.75;
  const ENTER_START_MOBILE  = 0.25;

  onMount(() => {
    let isDesktop = window.innerWidth > MOBILE_BREAKPOINT;
    let sections: HTMLElement[] = [];
    let rafId = 0;

    function getSections() {
      sections = Array.from(
        document.querySelectorAll('.snap-section')
      ) as HTMLElement[];
    }

    function applyDepth(section: HTMLElement, scrollTop: number, vh: number) {
      const sTop    = section.offsetTop;
      const sHeight = section.offsetHeight || vh;

      const exitStart  = isDesktop ? EXIT_START_DESKTOP  : EXIT_START_MOBILE;
      const enterStart = isDesktop ? ENTER_START_DESKTOP : ENTER_START_MOBILE;

      const exitRaw  = Math.max(0, Math.min(1, (scrollTop - sTop) / sHeight));
      const exit     = Math.max(0, (exitRaw - exitStart) / (1 - exitStart));

      const enterRaw = Math.max(0, Math.min(1, (sTop + sHeight - scrollTop - vh) / sHeight));
      const enter    = Math.max(0, (enterRaw - (1 - enterStart)) / enterStart);

      if (exitRaw > 0 && exitRaw > enterRaw) {
        section.style.transform = `scale(${(1 - exit * 0.07).toFixed(4)})`;
        section.style.opacity   = (1 - exit * 0.45).toFixed(4);
        section.style.filter    = exit > 0.15 ? `blur(${(exit * 3).toFixed(2)}px)` : '';
      } else if (enterRaw > 0) {
        section.style.transform = `scale(${(0.93 + (1 - enter) * 0.07).toFixed(4)})`;
        section.style.opacity   = (0.55 + (1 - enter) * 0.45).toFixed(4);
        section.style.filter    = '';
      } else {
        section.style.transform = 'scale(1)';
        section.style.opacity   = '1';
        section.style.filter    = '';
      }
    }

    function handleScroll() {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const container = isDesktop
          ? document.querySelector('.main') as HTMLElement | null
          : null;
        const scrollTop = container ? container.scrollTop : window.scrollY;
        const vh        = container ? container.clientHeight : window.innerHeight;
        sections.forEach(s => applyDepth(s, scrollTop, vh));
      });
    }

    (window as unknown as Record<string, unknown>)['snapToSection'] = (id: string) => {
      if (id === '__top') {
        const main = document.querySelector('.main') as HTMLElement | null;
        if (main) main.scrollTo({ top: 0, behavior: 'smooth' });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const target = document.getElementById(id);
      if (!target) return;
      const section = sections.find(s => s.contains(target));
      if (!section) return;
      const main = document.querySelector('.main') as HTMLElement | null;
      if (main && isDesktop) main.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
      else section.scrollIntoView({ behavior: 'smooth' });
    };

    function handleResize() {
      isDesktop = window.innerWidth > MOBILE_BREAKPOINT;
    }

    getSections();

    const mainEl = document.querySelector('.main') as HTMLElement | null;
    if (isDesktop && mainEl) {
      mainEl.addEventListener('scroll', handleScroll, { passive: true });
    } else {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }
    window.addEventListener('resize', handleResize);

    return () => {
      if (mainEl) mainEl.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(rafId);
      delete (window as unknown as Record<string, unknown>)['snapToSection'];
    };
  });
</script>

<main class="main">
  <div class="snap-section"><Landing /></div>
  <div class="snap-section"><Projects /></div>
  <div class="snap-section"><Skills /></div>
  <div class="snap-section"><About /></div>
  <div class="snap-section snap-section--footer"><Imprint /></div>
</main>