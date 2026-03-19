<script>
  import "./Skills.scss";

  export let methodsSkills = [
    { name: "User Research", logo: "/user-research.png" },
    { name: "Wireframing", logo: "/wireframing.png" },
    { name: "Prototyping", logo: "/prototyping.png" },
    { name: "Accessibility Testing", logo: "/accessibility.svg" }
  ];

  export let designSkills = [
    { name: "Adobe Illustrator", logo: "/adobe-illustrator.png" },
    { name: "Adobe InDesign", logo: "/adobe-indesign.png" },
    { name: "Adobe Photoshop", logo: "/adobe-photoshop.png" },
    { name: "Figma", logo: "/figma.svg" }
  ];

  export let codingSkills = [
    { name: "HTML", logo: "/html.png" },
    { name: "JavaScript", logo: "/js.png" },
    { name: "CSS", logo: "/css.png" },
    { name: "C/C++", logo: "/c.png" },
    { name: "React", logo: "/react.png" },
    { name: "Nextjs", logo: "/nj.png" },
    { name: "Nodejs", logo: "/nodejs.png" },
    { name: "Svelte", logo: "/sv.png" }
  ];
</script>

<section class="skills" id="skills">
  <h2>Skills</h2>
  <p class="skills-description">
    Blending design and coding expertise to craft intuitive digital products, bridging creativity and technology to deliver meaningful user experiences.
  </p>

  <div class="skills-wrapper">
    <div class="skills-column methods">
  <h3>Design Methods</h3>
  <div class="methods-list">
    {#each methodsSkills as skill}
      <div class="method-card">
        <img src={skill.logo} alt={skill.name} title={skill.name} />
        <p>{skill.name}</p>
      </div>
    {/each}
  </div>
</div>
    <div class="skills-column design">
      <h3>Design Tools</h3>
      <div class="skills-list">
        {#each designSkills as skill}
          <div class="skill-circle">
            <img src={skill.logo} alt={skill.name} title={skill.name} />
          </div>
        {/each}
      </div>
    </div>
    <div class="skills-column coding">
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
