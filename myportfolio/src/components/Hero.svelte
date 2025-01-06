<script>
  export let name = "Yannick Schwab";
  export let title = "Digital Product Designer and Developer";
  export let subtitle = "Connecting the worlds of design and coding";
</script>

<section class="hero">
  <div class="profile">
    <img src="/PortraitPortfolio.png" alt="portrait" class="portrait" />
    <div class="circle"></div>
  </div>
  <div class="intro">
    <h1>Hello, I am {name}</h1>
    <h2>Digital Product Designer<br> and Developer</h2>
    <p>{subtitle}</p>
  </div>
</section>

<style lang="scss">
  .hero {
    display: flex;
    justify-content: space-between; /* Space between profile and intro */
    align-items: center; /* Align items vertically */
    padding: 8rem;
    color: #fff;

.profile {
  display: flex;
  flex-direction: column;
  align-items: center;  /* Centers both portrait and circle horizontally */
  justify-content: center;  /* Centers both portrait and circle vertically */
  position: relative;  /* Ensures correct stacking order */
}

.portrait {
  border-radius: 50%;
  width: 426px;
  height: 420px;
  object-fit: cover;
  margin-left: -20px;  /* Adjust this value to shift the portrait to the left */
  margin-bottom: -32px;
  z-index: 1;
}

.circle {
  width: 400px;
  height: 400px;
  border: 3px solid #4caf50;
  border-radius: 50%;
  position: absolute;  /* Positions the circle on top of the portrait */
  top: 50%;  /* Moves the circle vertically */
  left: 50%;  /* Centers the circle horizontally */
  transform: translate(-50%, -50%);  /* Adjusts the position of the circle */
  z-index: 0;
}

.intro {
  max-width: 70%; /* Adjust intro width as needed */
  text-align: left; /* Align text to the left */
  
  h1 {
    background: linear-gradient(90deg, #79FF5F 29.52%, #5FF4FF 39.35%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1rem; /* Reduce space below h1 */
    font-size: 2.3rem;
    font-weight: 200;
  }

  h2 {
    font-size: 4.1rem;
    font-weight: 600;
    margin-top: 0.2rem; /* Reduce space above h2 */
    margin-bottom: 1rem; /* Control the space below h2 */
    background: linear-gradient(90deg, #79FF5F 18.22%, #5FF4FF 55.51%);
    -webkit-background-clip: text;
    color: transparent; /* Make text color transparent to show the gradient */
  }

  p {
    font-size: 2.3rem;
    font-weight: 200;
  }
}

  }
</style>
