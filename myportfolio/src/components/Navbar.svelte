<script lang="ts">
  import { onMount } from "svelte";

  export let links: { name: string; href: string }[] = [
    { name: "Home", href: "#hero" },
    { name: "About me", href: "#about-me" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  let navbar: HTMLElement | null = null;

  function handleScroll() {
    if (navbar) {
      let scrollRatio = Math.min(window.scrollY / (window.innerHeight * 0.3), 1);
      navbar.style.backgroundColor = `rgba(44, 39, 49, ${scrollRatio * 0.9})`;
      navbar.style.backdropFilter = `blur(${scrollRatio * 30}px)`;
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
  <img src="/LogoPortfolio.png" alt="Logo" class="logo"/>
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
  // align-items: center;
  padding: 1rem 8rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: background-color 0.5s ease, backdrop-filter 0.5s ease;
  background-color: rgba(44, 39, 49, 0);
  backdrop-filter: blur(0px);
  overflow-x: hidden;
}

.logo {
  width: 50px;
}

ul {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 2rem;
  list-style: none;
  padding-top: 0.7rem;
  margin: 0;
}

li a {
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 400;

  &:hover {
    color: transparent;
    background: linear-gradient(90deg, #79FF5F 18.22%, #5FF4FF 65.51%);
    background-clip: text;
  }
}

@media (max-width: 768px) {
  nav {
    flex-direction: column;
    padding: 1rem 2rem;
  }

  ul {
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }

  li a {
    font-size: 1rem;
  }

  .logo {
    margin-bottom: 0.5rem;
  }
}
</style>
