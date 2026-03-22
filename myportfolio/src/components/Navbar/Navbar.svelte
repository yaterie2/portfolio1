<script lang="ts">
  import "./Navbar.scss";
  import { onMount } from "svelte";
  import { themeMode } from "../../lib/themeStore";
  import type { ThemeMode } from "../../lib/themeStore";
  import { scrollToSection } from "../../lib/navigation";

  export let links: { name: string; target: string }[] = [
    { name: "About Me",    target: "about-me" },
    { name: "Skills",   target: "skills" },
    { name: "Projects", target: "projects" },
  ];

  let scrolled: boolean = false;
  let hidden: boolean = false;
  let menuOpen: boolean = false;
  let dropdownOpen: boolean = false;

  function scrollToTop(): void {
    scrollToSection('__top');
  }

  function closeDropdown(e: MouseEvent) {
    if (!(e.target as HTMLElement).closest('.theme-switcher')) {
      dropdownOpen = false;
    }
  }

  function setMode(mode: ThemeMode) {
    themeMode.set(mode);
    dropdownOpen = false;
  }

  onMount(() => {
    let lastScrollY = 0;
    const MOBILE_BREAKPOINT = 860;

    function getScrollY(): number {
      if (window.innerWidth <= MOBILE_BREAKPOINT) {
        return window.scrollY;
      }
      const main = document.querySelector<HTMLElement>('.main');
      return main ? main.scrollTop : window.scrollY;
    }

    function handleScroll() {
      const isMobile = window.innerWidth <= MOBILE_BREAKPOINT;
      const currentY = getScrollY();

      scrolled = currentY > 40;

      if (isMobile) {
        hidden = currentY > lastScrollY && currentY > 60;
      } else {
        hidden = false;
      }

      lastScrollY = currentY;
    }

    // Desktop: lauscht auf .main Container
    const mainEl = document.querySelector<HTMLElement>('.main');
    if (mainEl) mainEl.addEventListener('scroll', handleScroll, { passive: true });

    // Mobile: lauscht auf window
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('click', closeDropdown);

    return () => {
      if (mainEl) mainEl.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', closeDropdown);
    };
  });

  const options: { mode: ThemeMode; label: string; icon: string }[] = [
    { mode: 'auto',   label: 'Auto',           icon: '🕐' },
    { mode: 'light',  label: 'Hell',            icon: '☀️' },
    { mode: 'dark',   label: 'Dunkel',          icon: '🌙' },
    { mode: 'sunset', label: 'Sonnenuntergang', icon: '🌅' },
  ];

  $: currentIcon = options.find(o => o.mode === $themeMode)?.icon ?? '🕐';
</script>

<nav id="navbar" class:scrolled class:hidden>
  <button class="nav-logo" on:click={scrollToTop} aria-label="Nach oben">
    <img src="/LogoPortfolio.png" alt="Logo" />
  </button>

  <div class="nav-right">
    <ul class="nav-links" class:open={menuOpen}>
      {#each links as link}
        <li>
          <button class="nav-link-btn" on:click={() => { scrollToSection(link.target); menuOpen = false; }}>
            {link.name}
          </button>
        </li>
      {/each}
    </ul>

    <div class="theme-switcher">
      <button
        class="theme-trigger"
        aria-label="Theme wechseln"
        on:click|stopPropagation={() => dropdownOpen = !dropdownOpen}
      >
        <span style="font-size: 1rem; line-height: 1;">{currentIcon}</span>
      </button>

      {#if dropdownOpen}
        <div class="theme-dropdown">
          {#each options as option}
            <button
              class="theme-option"
              class:active={$themeMode === option.mode}
              on:click={() => setMode(option.mode)}
            >
              <span class="option-icon">{option.icon}</span>
              {option.label}
            </button>
          {/each}
        </div>
      {/if}
    </div>

    <button
      class="burger"
      aria-label="Toggle menu"
      on:click={() => menuOpen = !menuOpen}
    >
      <span class:open={menuOpen}></span>
      <span class:open={menuOpen}></span>
      <span class:open={menuOpen}></span>
    </button>
  </div>
</nav>