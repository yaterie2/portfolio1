<script lang="ts">
  import "./Navbar.scss";
  import { onMount } from "svelte";
  import { themeMode, resolveTheme } from "../../lib/themeStore";
  import type { ThemeMode } from "../../lib/themeStore";

  export let links: { name: string; target: string }[] = [
    { name: "About",    target: "about-me" },
    { name: "Skills",   target: "skills" },
    { name: "Projects", target: "projects" },
  ];

  let scrolled: boolean = false;
  let menuOpen: boolean = false;
  let dropdownOpen: boolean = false;

  function handleScroll(): void {
    scrolled = window.scrollY > 40;
  }

  // Smooth scroll ohne URL-Hash
  function scrollTo(targetId: string): void {
    menuOpen = false;
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", closeDropdown);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", closeDropdown);
    };
  });

  const options: { mode: ThemeMode; label: string; icon: string }[] = [
    { mode: 'auto',   label: 'Auto',            icon: '🕐' },
    { mode: 'light',  label: 'Hell',             icon: '☀️' },
    { mode: 'dark',   label: 'Dunkel',           icon: '🌙' },
    { mode: 'sunset', label: 'Sonnenuntergang',  icon: '🌅' },
  ];

  $: currentIcon = options.find(o => o.mode === $themeMode)?.icon ?? '🕐';
</script>

<nav id="navbar" class:scrolled>
  <!-- Logo → scrollt nach oben, kein Hash in URL -->
  <button class="nav-logo" on:click={scrollToTop} aria-label="Nach oben">
    <img src="/LogoPortfolio.png" alt="Logo" />
  </button>

  <!-- Rechte Seite: Links + Theme-Switcher -->
  <div class="nav-right">
    <ul class="nav-links" class:open={menuOpen}>
      {#each links as link}
        <li>
          <button class="nav-link-btn" on:click={() => scrollTo(link.target)}>
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

    <!-- Burger nur auf Mobile -->
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