<script>
  export let name = "Yannick Schwab";
  export let title = "Digital Product Designer and Developer";
  export let subtitle = "Connecting the worlds of design and coding";

  const designSkills = [
  { name: "Adobe Illustrator", logo: "/adobe-illustrator.png" },
  { name: "Adobe InDesign", logo: "/adobe-indesign.png" },
  { name: "Adobe Photoshop", logo: "/adobe-photoshop.png" },
  { name: "Figma", logo: "/figma.png" }
];

const codingSkills = [
  { name: "HTML", logo: "/html.png" },
  { name: "JavaScript", logo: "/javascript.png" },
  { name: "CSS", logo: "/css.png" },
  { name: "C/C++", logo: "/c.png" },
  { name: "React", logo: "/react.png" },
  { name: "Nextjs", logo: "/nextjs.png" },
  { name: "Nodejs", logo: "/nodejs.png" },
  { name: "Svelte", logo: "/svelte.png" }
];


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
<section class="about">
    <svg xmlns="http://www.w3.org/2000/svg" width="1512" height="55" viewBox="0 0 1512 55" preserveAspectRatio="none">
<path d="M0 7.53195C0 7.53195 133.956 1.69437 282 0.288482C577.848 -2.52102 838.053 16.1535 1134 14.6213C1281.87 13.8558 1512 7.53195 1512 7.53195V55H0V7.53195Z" fill="url(#paint0_linear_250_71)"/>
<defs>
<linearGradient id="paint0_linear_250_71" x1="1.74677e-07" y1="44.5" x2="1512" y2="107.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#79FF5F"/>
<stop offset="1" stop-color="#5FF4FF"/>
</linearGradient>
</defs>
</svg>
<div class="rectangle-wrapper">
      <div class="circle big-circle"></div>
      <div class="circle small-circle"></div>
      <div class="rectangle"></div>
    </div>
</section>
<section class="skills">
  <h2>Skills</h2>
  <div class="skills-wrapper">
    <div class="skills-column">
      <h3>Design Tools</h3>
      <div class="skills-list">
        {#each designSkills as skill}
          <div class="skill-circle">
            <img src={skill.logo} alt={skill.name} title={skill.name} />
          </div>
        {/each}
      </div>
    </div>
    <div class="skills-column">
      <h3>Coding Tools</h3>
      <div class="skills-list">
        {#each codingSkills as skill}
          <div class="skill-circle">
            <img src={skill.logo} alt={skill.name} title={skill.name} />
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
<section class="projects">
  <h2>Projects</h2>
  <div class="projects-bubble-wrapper">
    {#each Array(6) as _, index}
      <div class="project-bubble bubble-{index + 1}">
        <img src="/project{index + 1}.png" alt="Project {index + 1}" />
        <div class="bubble-content">
          <p>Project {index + 1}</p>
          <button>View Details</button>
        </div>
      </div>
    {/each}
  </div>
</section>

<style lang="scss">
  .hero {
    margin-top: 8rem;
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
  background: linear-gradient(100deg, #79FF5F 5.22%, #5FF4FF 95.51%);
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

.about {
//   padding: 2rem;
  margin-top: 6.2rem;
}

.svg {
  width: 100%;
}

.rectangle-wrapper {
  position: relative;
  width: 100%;
  height: 12.5rem; /* 200px to rem */
}

.rectangle {
  width: 100%;
  height: 50rem;
  background: linear-gradient(100deg, #79FF5F 5.22%, #5FF4FF 95.51%);
  margin-top: -0.25rem; /* -4px to rem */
}

.circle {
  border-radius: 50%;
  position: absolute;
  background: #242029;
}

.big-circle {
  width: 44rem; /* 700px to rem */
  height: 44rem;
  top: 1.8rem; /* -150px to rem */
  left: 8rem; /* Align with hero section padding */
}

.small-circle {
  width: 29rem; /* 450px to rem */
  height: 29rem;
  top: 14rem; /* -75px to rem */
  right: 8rem; /* Align with hero section padding */
}

.skills {
  text-align: center;
  padding: 8rem;

  h2 {
    text-align: left;
    font-size: 3rem;
    margin-top: 36rem;
    margin-bottom: 2rem;
    color: #F2EFF5;
  }

  .skills-wrapper {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 4rem;  /* Adds space between the heading and the skill circles */
  }

  .skills-column {
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      font-size: 2rem;
      margin-bottom: 1rem;
      color: #F2EFF5;
    }

    .skills-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1.5rem;
      margin-top: 3rem;  /* Adds space between the header and the first skill circle */
    }

    .skill-circle {
      width: 5rem;
      height: 5rem;
      background-color: #ffffff;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      transition: transform 0.3s;

      img {
        width: 80%;
        height: 80%;
        object-fit: contain;
      }

      &:hover {
        transform: scale(1.1);
      }
    }
  }
}

.projects {
  text-align: center;
  padding: 2rem 8rem;

  h2 {
    font-size: 3.5rem;
    margin-bottom: 3rem;
    color: #F2EFF5;
    text-align: left;
  }

  .projects-bubble-wrapper {
    position: relative;
    height: 50rem;
    display: block;
  }

  .project-bubble {
    position: absolute;
    border-radius: 50%;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    transition: transform 0.3s ease-in-out;
    overflow: hidden;

    img {
      width: 85%;
      height: 85%;
      object-fit: cover;
      border-radius: 50%;
    }

    .bubble-content {
      text-align: center;
      padding: 1rem;

      p {
        font-size: 1.2rem;
        margin-top: 0.5rem;
      }

      button {
        margin-top: 0.5rem;
        padding: 0.7rem 1.5rem;
        background: #79FF5F;
        border: none;
        border-radius: 1rem;
        color: #242029;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
          background-color: #5FF4FF;
        }
      }
    }

    &:hover {
      transform: scale(1.1);
    }
  }

  /* Individual size and positioning for varied look */
  .bubble-1 { width: 22rem; height: 22rem; top: 5rem; }
  .bubble-2 { width: 18rem; height: 18rem; top: 2rem; right: 12rem; }
  .bubble-3 { width: 24rem; height: 24rem; top: 15rem; left: 25rem; }
  .bubble-4 { width: 20rem; height: 20rem; top: 30rem; right: 20rem; }
  .bubble-5 { width: 19rem; height: 19rem; top: 10rem; right: 5rem; }
  .bubble-6 { width: 23rem; height: 23rem; top: 40rem; left: 15rem; }
}

</style>
