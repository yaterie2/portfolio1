<script lang="ts">
  import "./Navbar.scss";
  import { onMount } from "svelte";
  import { themeMode } from "../../lib/themeStore";
  import type { ThemeMode } from "../../lib/themeStore";
  import { scrollToSection } from "../../lib/navigation";

  export let links: { name: string; target: string }[] = [
    { name: "About",    target: "about-me" },
    { name: "Skills",   target: "skills" },
    { name: "Projects", target: "projects" },
  ];

  let scrolled: boolean = false;
  let menuOpen: boolean = false;
  let dropdownOpen: boolean = false;

  function handleScroll(e: Event) {
    const target = e.target as HTMLElement;
    scrolled = (target.scrollTop ?? window.scrollY) > 40;
  }

  function scrollToTop(): void {
    // Nutzt das Snap-System damit currentIndex und Depth-Effekt korrekt bleiben
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
    const mainEl = document.querySelector<HTMLElement>('.main');
    const scrollTarget = mainEl ?? window;
    scrollTarget.addEventListener('scroll', handleScroll as EventListener);
    window.addEventListener('click', closeDropdown);
    return () => {
      scrollTarget.removeEventListener('scroll', handleScroll as EventListener);
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

<nav id="navbar" class:scrolled>
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