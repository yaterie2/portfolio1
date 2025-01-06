<script>
  export let name = "Yannick Schwab";
  export let title = "Digital Product Designer and Developer";
  export let subtitle = "Connecting the worlds of design and coding";
</script>

<section class="hero">
  <div class="content">
    <h1>Hello, I am {name}</h1>
    <h2>{title}</h2>
    <p>{subtitle}</p>
  </div>
  <div class="profile">
    <img src="/PortaitPortfolio.png" alt="Portrait" />
    <div class="circle"></div>
  </div>
</section>

<style lang="scss">

  .hero {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    color: #fff;
    // background: #242029;

    .content {
      h1 {
        color: #4caf50;
      }
      h2 {
        color: #00d4ff;
      }
      p {
        font-size: 1.2rem;
        margin-top: 1rem;
      }
    }

    .profile {
      position: relative;

      img {
        border-radius: 50%;
        width: 150px;
        height: 150px;
        object-fit: cover;
        z-index: 2;
        position: relative;
      }

      .circle {
        position: absolute;
        width: 180px;
        height: 180px;
        border: 3px solid #4caf50;
        border-radius: 50%;
        top: -15px;
        left: -15px;
        z-index: 1;
      }
    }
  }
</style>
