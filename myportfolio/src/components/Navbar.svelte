<script>
  export let links = [
    { name: "About me", href: "#about-me" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];
</script>

<nav>
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
    padding: 1rem 8rem;
    background-color: #2C2731;

    .logo {
      width: 50px;
    }

    ul {
      display: flex;
      gap: 2rem;
      list-style: none;

      li a {
        color: #fff;
        text-decoration: none;
        font-size: 1.5rem;
        font-weight: 200;
        &:hover {
          color: #4caf50;
        }
      }
    }
  }
</style>
