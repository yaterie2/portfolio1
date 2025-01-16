<script lang="ts">
  // Hardcoded project data for a single project
  const project = {
    title: "KUREN",
    idea: "KUREN, named after the Japanese word for owl, envisions a future where sleep and health are optimized through advanced technology. The app prototype aims to monitor sleep patterns and efficiency by measuring data such as EEG activity, breathing, and other vital indicators. Accompanied by a conceptual smart sleep mask equipped with built-in sensors, KUREN offers a seamless way to track sleep and improve overall well-being. Although this project represents a future scenario, it explores the potential of integrating innovative hardware with user-focused applications.",
    process: "The development process began in Figma, starting with initial wireframes to define the core structure and functionality of the app. Iterative prototyping followed, transitioning from low-fidelity designs to a polished high-fidelity prototype. A significant focus was placed on refining user flows, ensuring an intuitive and efficient experience for tracking sleep metrics and accessing personalized insights. The team considered how users would interact with both the app and the envisioned sleep mask to create a cohesive system.",
    result: "Through this speculative future scenario, the project demonstrates the integration of innovative design with health technology. The final prototype highlights creative problem-solving, presenting a vision for how sleep tracking could transform personal well-being in the years to come.",
    images: ["/k1.png", "/kuren1.png", "/kuren2.png"] // Use your own image paths here
  };
</script>

<section class="project-page">
  <a href="/#projects" class="back-link">
    <span class="material-icons">arrow_back_ios</span>Projects
  </a>
  <h1 class="project-title">{project.title}</h1>

  <div class="project-content">
    <div class="project-description">
      <h2>Idea</h2>
      <p>{project.idea}</p>

      <h2>Process</h2>
      <p>{project.process}</p>

      <h2>Result</h2>
      <p>{project.result}</p>
    </div>

    <div class="project-images">
      {#each project.images as image}
        <img src={image} alt="" class="project-image" />
      {/each}
    </div>
  </div>
</section>


<style lang="scss">
  .project-page {
    display: flex;
    flex-direction: column;
    margin: 4rem auto;
    gap: 2rem;
    max-width: 100%;
    padding: 0 8rem; /* Add padding for smaller screens */
  }

  .back-link {
    display: inline-flex;
    margin-bottom: 4rem;
    font-size: 1.2rem;
    color: #F2EFF5;
    text-decoration: none;

    &:hover {
      color: #5FF4FF;
    }
  }

  .project-title {
    font-size: 4.1rem;
    font-weight: 600;
    color: transparent;
    background: linear-gradient(90deg, #79FF5F 9.52%, #5FF4FF 19.35%);
    -webkit-background-clip: text;
    background-clip: text;
  }

  .project-description h2 {
    font-size: 2.3rem;
    color: #F2EFF5;
    margin-top: 0rem; /* Top margin for each h2 */
  }

  .project-description p {
    font-size: 1.2rem;
    margin-top: 0.5rem;
    font-weight: 200;
    margin-bottom: 4rem;
    color: #F2EFF5;
  }

  /* Base Layout: Stack items vertically by default */
  .project-content {
    display: flex;
    flex-direction: column; /* Stack content vertically by default */
    gap: 2rem; /* Space between text and images */
  }

  .project-description {
    flex: 1;
  }

  .project-images {
    flex: 1;
    display: flex;
    justify-content: left;
    gap: 2rem;
    flex-wrap: wrap;
    max-width: 100%;
  }

  .project-images img {
    width: 100%;
    max-width: 200rem; /* Ensure all images have the same max width */
    height: auto;
    object-fit: cover;
  }

  /* For large screens (Desktop) - Display images next to the text in columns */
  @media (min-width: 1025px) {

    .project-content {
      display: grid;
      grid-template-columns: 1fr 1fr; /* Two equal columns for text and images */
      gap: 3rem; /* Adjust space between text and images */
    }

    .project-description {
      order: 1;
    }

    .project-images {
      order: 2; /* Images should be on the right */
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
    }
  }

  /* Responsive Design for medium screens (Tablet/Small Laptop) */
  @media (max-width: 1024px) {

    .back-link {
        margin-bottom: -1rem;
    }

    .project-page {
      padding: 0 3rem;
    }

    .project-content {
      gap: 1rem; /* Adjust gap between text and images */
    }

    .project-description h2 {
      font-size: 1.8rem;
    }

    .project-description p {
      font-size: 1rem;
    }

    .project-title {
      font-size: 2.5rem;
    }

    .project-images img {
      max-width: 100%;
    }
  }

  /* For phone screens */
  @media (max-width: 480px) {
    .project-page {
      padding: 0 1rem;
    }

    .project-title {
      font-size: 2rem;
    }

    .project-description h2 {
      font-size: 1.5rem;
    }

    .project-description p {
      font-size: 0.9rem;
    }

    .project-content {
      gap: 1.5rem; /* Reduce gap for phone screens */
    }

    .project-images {
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    .project-images img {
      max-width: 100%;
    }
  }
</style>
