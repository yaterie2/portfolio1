<script lang="ts">
  import { onMount } from "svelte";

  export let links: { name: string; href: string }[] = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about-me" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  let navbar: HTMLElement | null = null;
  let scrolled = false;
  let menuOpen = false;

  function handleScroll() {
    scrolled = window.scrollY > 40;
  }

  onMount(() => {
    navbar = document.getElementById("navbar");
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
</script>

<nav id="navbar" class:scrolled>
  <a href="#hero" class="nav-logo">
    <img src="/LogoPortfolio.png" alt="Logo" />
  </a>

  <ul class="nav-links" class:open={menuOpen}>
    {#each links as link}
      <li>
        <a href={link.href} on:click={() => menuOpen = false}>{link.name}</a>
      </li>
    {/each}
  </ul>

  <button
    class="burger"
    aria-label="Toggle menu"
    on:click={() => menuOpen = !menuOpen}
  >
    <span class:open={menuOpen}></span>
    <span class:open={menuOpen}></span>
    <span class:open={menuOpen}></span>
  </button>
</nav>

<style lang="scss">
$green: #79FF5F;
$cyan: #5FF4FF;
$border: rgba(242, 239, 245, 0.08);

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 8vw;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease, padding 0.3s ease;
  background: transparent;
  border-bottom: 1px solid transparent;
  box-sizing: border-box;

  &.scrolled {
    background: rgba(24, 21, 32, 0.85);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-color: $border;
    padding: 0.85rem 8vw;
  }
}

.nav-logo img {
  width: 40px;
  display: block;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.75;
  }
}

.nav-links {
  display: flex;
  gap: 0.5rem;
  list-style: none;
  margin: 0;
  padding: 0;

  li a {
    display: block;
    padding: 0.45rem 1rem;
    color: rgba(242, 239, 245, 0.7);
    font-size: 0.95rem;
    font-weight: 500;
    text-decoration: none;
    border-radius: 2rem;
    transition: color 0.2s, background 0.2s;

    &:hover {
      color: #F2EFF5;
      background: rgba(255,255,255,0.06);
    }
  }
}

.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.4rem;

  span {
    display: block;
    width: 22px;
    height: 2px;
    background: #F2EFF5;
    border-radius: 2px;
    transition: transform 0.3s, opacity 0.3s;

    &.open:nth-child(1) { transform: translateY(7px) rotate(45deg); }
    &.open:nth-child(2) { opacity: 0; }
    &.open:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
  }
}

@media (max-width: 640px) {
  nav {
    padding: 1rem 1.5rem;
    &.scrolled { padding: 0.75rem 1.5rem; }
  }

  .burger {
    display: flex;
    z-index: 1001;
  }

  .nav-links {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(24, 21, 32, 0.97);
    backdrop-filter: blur(20px);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    transform: translateX(-100%);
    transition: transform 0.35s cubic-bezier(0.77, 0, 0.175, 1);

    &.open { transform: translateX(0); }

    li a {
      font-size: 1.4rem;
      font-weight: 600;
      color: #F2EFF5;
    }
  }
}
</style>