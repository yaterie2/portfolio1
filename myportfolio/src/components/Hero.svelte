<script>
  export let name = "Yannick Schwab";
  export let subtitle = "Connecting the worlds of design and coding";

  const designSkills = [
    { name: "Adobe Illustrator", logo: "/adobe-illustrator.png" },
    { name: "Adobe InDesign", logo: "/adobe-indesign.png" },
    { name: "Adobe Photoshop", logo: "/adobe-photoshop.png" },
    { name: "Figma", logo: "/figma.svg" }
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

  // Hardcoded project images
  const projects = [
    { slug: "kuren", title: "KUREN", image: "/k1.png" },
    { slug: "rehub", title: "ReHub", image: "/r2.png" },
    { slug: "aeroom", title: "aeroom", image: "/a3.png" },
    { slug: "varroa", title: "Varroa", image: "/v4.png" },
    { slug: "simplechat", title: "SimpleChat", image: "/s5.png" },
    { slug: "db-navigator-concept", title: "DB Navigator Concept", image: "/d6.png" }
  ];
</script>

<section class="hero" id="hero">
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

<section class="about" id="about-me">
  <div class="about-content">
    <h2>About Me</h2>
    <p>
      I am a passionate digital product designer and developer, combining creativity and technical methods to build meaningful user experiences.<br> The expertise I acquired at the HfG Schwäbisch Gmünd, in four semesteres, helps me unite design and functionality, creating seamless, impactful digital solutions.
    </p>
  </div>
</section>

<section class="skills" id="skills">
  <h2>Skills</h2>
  <p class="skills-description">
  Blending design and coding expertise to craft intuitive digital products, bridging creativity and technology to deliver meaningful user experiences.
</p>
  <div class="skills-wrapper">
    <div class="skills-column left-column">
      <h3>Design Tools</h3>
      <div class="skills-list">
        {#each designSkills as skill}
          <div class="skill-circle">
            <img src={skill.logo} alt={skill.name} title={skill.name} />
          </div>
        {/each}
      </div>
    </div>
    <div class="skills-column right-column">
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

<section class="projects" id="projects">
  <h2>Projects</h2>
  <div class="projects-bubble-wrapper">
    <!-- Hardcoded project images -->
    <div class="project-bubble bubble-1">
      <img src="/k1.png" alt="Project 1" />
      <div class="bubble-content">
        <p>KUREN</p>
        <a href="/kuren"><button>View Details</button></a>
      </div>
    </div>
    <div class="project-bubble bubble-2">
      <img src="/r2.png" alt="Project 2" />
      <div class="bubble-content">
        <p>ReHub</p>
        <a href="/rehub"><button>View Details</button></a>
      </div>
    </div>
    <div class="project-bubble bubble-3">
      <img src="/a3.png" alt="Project 3" />
      <div class="bubble-content">
        <p>aeroom</p>
        <a href="/aeroom"><button>View Details</button></a>
      </div>
    </div>
    <div class="project-bubble bubble-4">
      <img src="/v4.png" alt="Project 4" />
      <div class="bubble-content">
        <p>Varroa</p>
        <a href="/varroa"><button>View Details</button></a>
      </div>
    </div>
    <div class="project-bubble bubble-5">
      <img src="/s5.png" alt="Project 5" />
      <div class="bubble-content">
        <p>SimpleChat</p>
        <a href="/simplechat"><button>View Details</button></a>
      </div>
    </div>
    <div class="project-bubble bubble-6">
      <img src="/d6.png" alt="Project 6" />
      <div class="bubble-content">
        <p>DB Navigator Concept</p>
        <a href="/db-navigator-concept"><button>View Details</button></a>
      </div>
    </div>
  </div>
</section>

<section class="impressum">
  <div class="impressum-rectangle"></div>
  <ul>
    <li><strong>Name</strong> Yannick Schwab</li>
    <li><strong>Location</strong> Stuttgart, Germany</li>
    <li><strong>Contact</strong> schwabyx@t-online.de, yannick.schwab@hfg.gmuend</li>
    <li><strong>College</strong> Hochschule für Gestaltung Schwäbisch Gmünd</li>
  </ul>
</section>

<style lang="scss">
  .hero {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  margin: 0 8vw;
  color: #fff;
  overflow-x: hidden; /* Prevent content overflow */
  position: relative;
}

.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.portrait {
  border-radius: 0%;
  width: 426px;
  height: 420px;
  object-fit: cover;
  // transform: translateY(-55px);
  transform: translateX(-12px);
  z-index: 1;
}

.circle {
  width: 20rem;
  height: 20rem;
  background: linear-gradient(100deg, #79FF5F 5.22%, #5FF4FF 95.51%);
  border-radius: 10%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;

  /* Make the inside transparent */
  mask: radial-gradient(circle, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 1) 86%);
  -webkit-mask: radial-gradient(circle, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 1) 86%);
}


.intro {
  max-width: 70%;
  text-align: left;
  z-index: 1;
  background-color: #242029;
  padding: 2rem;
  
  h1, h2, p {
    overflow-wrap: break-word;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  h1 {
    margin-bottom: 1rem;
    font-size: 2.3rem;
    font-weight: 200;
    background: linear-gradient(90deg, #79FF5F 29.52%, #5FF4FF 39.35%);
    background-clip: text;
  }

  h2 {
    font-size: 4.1rem;
    font-weight: 600;
    margin-top: 0.2rem;
    margin-bottom: 1rem;
    background: linear-gradient(90deg, #79FF5F 18.22%, #5FF4FF 55.51%);
    background-clip: text;
  }

  p {
    font-size: 2.3rem;
    font-weight: 200;
    color: #ffffff;
  }
}

.about {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
  margin: 8rem 8vw;
  padding: 4rem;
  background: linear-gradient(90deg, #79ff5f 20%, #5ff4ff 80%);
  border-radius: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);

  &-content {
    flex: 1;
    max-width: 50%;
    color: #f2eff5;

    h2 {
      font-size: 3rem;
      margin-bottom: 2rem;
      color: #79ff5f;
      background: #242029;
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }

    p {
      font-size: 1.8rem;
      font-weight: 300;
      line-height: 1.6;
      color: #242029;
    }
  }

  // &-visuals {
  //   position: relative;
  //   flex: 1;
  //   max-width: 40%;
  //   height: 30rem;

    // .circle {
    //   border-radius: 50%;
    //   position: absolute;
    //   z-index: 0;

    //   &.big-circle {
    //     width: 35rem;
    //     height: 35rem;
    //     background: linear-gradient(100deg, #79ff5f 20%, #5ff4ff 80%);
    //     top: -2rem;
    //     left: -5rem;
    //   }

    //   &.small-circle {
    //     width: 20rem;
    //     height: 20rem;
    //     background: #242029;
    //     top: 10rem;
    //     right: -3rem;
    //     border: 1px solid #5ff4ff;
    //   }
    // }
  // }
}

@media (max-width: 768px) {
  .about {
    flex-direction: column;
    padding: 2rem;

    &-content {
      max-width: 100%;
      text-align: left;

      h2 {
        font-size: 2.5rem;
      }

      p {
        font-size: 1.6rem;
      }
    }

    // &-visuals {
    //   max-width: 100%;
    //   height: 20rem;

      // .circle {
      //   &.big-circle {
      //     width: 20rem; /* Smaller size */
      //     height: 20rem;
      //     top: -1rem;
      //     left: 0;
      //   }

      //   &.small-circle {
      //     width: 10rem; /* Smaller size */
      //     height: 10rem;
      //     top: 5rem;
      //     right: 0;
      //   }
      // }
    }
  }



 .skills {
    text-align: center;
    padding: 8rem;

    h2 {
      text-align: left;
      font-size: 3rem;
      margin-bottom: 2rem;
      color: #F2EFF5;
    }

    .skills-description {
  text-align: left;
  font-size: 1.8rem;
  font-weight: 200;
  color: #F2EFF5;
  margin-top: 1rem;
  margin-bottom: 3rem;
}


    .skills-wrapper {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      gap: 2rem;
      margin-top: 4rem;
    }

    .skills-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5% 0%; /* Padding to space out the content */
  border-bottom: 2px solid; /* Add a thick bottom border */
  border-bottom-color: transparent; /* Default to no color */

  /* Specify colors for left and right columns */
  &.left-column {
    border-bottom-color: #79FF5F; /* Green bottom border for left column */
  }

  &.right-column {
    border-bottom-color: #5FF4FF; /* Blue bottom border for right column */
  }
}

    h3 {
      text-align: center;
      font-size: 2rem;
      font-weight: 400;
      margin-bottom: 1rem;
      color: #F2EFF5;
    }

    .skills-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1.5rem;
      margin-top: 3rem;
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

.projects {
  text-align: center;
  padding: 2rem;

  h2 {
    font-size: 3.5rem;
    margin-bottom: 3rem;
    color: #F2EFF5;
    text-align: left;
    margin-left: 6rem;
  }

 .projects-bubble-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem; /* Space between bubbles */
  position: relative;
  height: auto; /* Allow dynamic height */
}

.project-bubble {
  width: 22rem;
  height: 22rem; /* Fixed height of the bubble */
  border-radius: 50%;
  background: #242029;
  border: 1px solid #F2EFF5; /* Added border style */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease-in-out;
  overflow: hidden;
}

img {
  width: 100%;        /* Take up full width of the bubble */
  height: 210px;        /* Height is 70% of the bubble's height */
  object-fit: cover;  /* Ensure the image covers the area */
}

.bubble-content {
  text-align: center;
  padding: 1rem;

  p {
    font-size: 1.6rem;
    font-weight: 600;
    margin-top: 0.5rem;
    color: transparent;
    background: linear-gradient(90deg, #79FF5F 18.22%, #5FF4FF 85.51%);
    background-clip: text;
  }

  button {
    font-family: inherit;
    margin-top: 0.5rem;
    padding: 0.7rem 1.5rem;
    background: transparent;
    border: none;
    border-radius: 4rem;
    color: #F2EFF5;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background: linear-gradient(100deg, #79FF5F 45.22%, #5FF4FF 95.51%);
      color: #242029;
    }
  }
}

.project-bubble:hover {
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .projects-bubble-wrapper {
    flex-direction: column; /* Stack bubbles vertically on mobile */
    align-items: center;
  }
}

  /* Individual size and positioning for varied look */
  .bubble-1 { width: 22rem; height: 22rem;}
  .bubble-2 { width: 22rem; height: 22rem;}
  .bubble-3 { width: 22rem; height: 22rem;}
  .bubble-4 { width: 22rem; height: 22rem;}
  .bubble-5 { width: 22rem; height: 22rem;}
  .bubble-6 { width: 22rem; height: 22rem;}
}

.impressum {
  margin-top: 10rem;
  padding: 4rem 8vw;
  background: linear-gradient(100deg, #79FF5F 5.22%, #5FF4FF 95.51%);
  text-align: left;

  h2 {
    font-size: 3rem;
    margin-bottom: 2rem;
    color: #242029;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      font-size: 1.8rem;
      margin-bottom: 1rem;
      color: #242029;

      strong {
        color: #242029;
      }
    }
  }
}

</style>
