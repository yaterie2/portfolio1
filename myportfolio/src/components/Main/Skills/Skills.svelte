<script lang="ts">
  import "./Skills.scss";

  // These are defined internally since they are not passed from outside
  const methodLabels: string[] = ["User Research", "Wireframing", "Prototyping", "Accessibility Testing"];

  const designSkills: { name: string; logo: string }[] = [
    { name: "Adobe Illustrator", logo: "/adobe-illustrator.png" },
    { name: "Adobe InDesign",    logo: "/adobe-indesign.png" },
    { name: "Adobe Photoshop",   logo: "/adobe-photoshop.png" },
    { name: "Figma",             logo: "/figma.svg" }
  ];

  const codingSkills: { name: string; logo: string }[] = [
    { name: "HTML",       logo: "/html.png" },
    { name: "JavaScript", logo: "/js.png" },
    { name: "CSS",        logo: "/css.png" },
    { name: "C/C++",      logo: "/c.png" },
    { name: "React",      logo: "/react.png" },
    { name: "Next.js",    logo: "/nj.png" },
    { name: "Node.js",    logo: "/nodejs.png" },
    { name: "Svelte",     logo: "/sv.png" }
  ];
</script>

<section class="skills" id="skills">
  <div class="skills-header">
    <span class="section-tag">Skills</span>
    <h2>Tools & Technologies</h2>
    <p>Blending design and coding expertise to craft intuitive digital products.</p>
  </div>

  <div class="skills-grid">
    <div class="skills-card methods-card">
      <div class="card-label">Methods</div>
      <h3>Design Methods</h3>
      <div class="methods-list">
        {#each methodLabels as label}
          <span class="method-tag">{label}</span>
        {/each}
      </div>
    </div>

    <div class="skills-card">
      <div class="card-label">Design</div>
      <h3>Design Tools</h3>
      <div class="tools-list">
        {#each designSkills as skill}
          <div class="tool-pill">
            <div class="tool-icon">
              <img src={skill.logo} alt={skill.name} />
            </div>
            <span>{skill.name}</span>
          </div>
        {/each}
      </div>
    </div>

    <div class="skills-card">
      <div class="card-label">Code</div>
      <h3>Coding Tools</h3>
      <div class="tools-list">
        {#each codingSkills as skill}
          <div class="tool-pill">
            <div class="tool-icon">
              <img src={skill.logo} alt={skill.name} />
            </div>
            <span>{skill.name}</span>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>