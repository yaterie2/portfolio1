<script lang="ts">
  import { onMount } from "svelte";

  export let links: { name: string; href: string }[] = [
    { name: "About me", href: "#about-me" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  let navbar: HTMLElement | null = null;

  function handleScroll() {
    if (navbar) {
      let scrollRatio = Math.min(window.scrollY / (window.innerHeight * 0.3), 1); // Trigger fade-in sooner
      navbar.style.backgroundColor = `rgba(44, 39, 49, ${scrollRatio * 0.9})`; // Earlier fade-in with smoother opacity
      navbar.style.backdropFilter = `blur(${scrollRatio * 30}px)`; // Dynamic blur effect
    }
  }

  onMount(() => {
    navbar = document.getElementById("navbar");
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
</script>

<nav id="navbar">
  <img src="/LogoPortfolio.png" alt="Logo" class="logo" />
  <ul>
    {#each links as link}
      <li><a href={link.href}>{link.name}</a></li>
    {/each}
  </ul>
</nav>

<style lang="scss">
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.6rem 8rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    transition: background-color 0.5s ease, backdrop-filter 0.5s ease; // Smoother transition

    /* Initial fully transparent state */
    background-color: rgba(44, 39, 49, 0);
    backdrop-filter: blur(0px);
  }

  .logo {
    width: 50px;
  }

  ul {
    display: flex;
    gap: 2rem;
    list-style: none;
    padding: 0;
    margin-right: 16rem;
  }

  li a {
    color: #fff;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 200;
    &:hover {
      color: #4caf50;
    }
  }
</style>
