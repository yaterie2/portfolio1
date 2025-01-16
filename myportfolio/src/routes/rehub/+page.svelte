<script lang="ts">
  // Hardcoded project data for a single project
  const project = {
    title: "ReHub",
    idea: "ReHub is an app designed to support rehabilitation patients in managing their recovery from home, effectively and conveniently. Users can add rehabilitation exercises to their routine or receive personalized plans created by their doctors or physiotherapists. The app provides flexibility in how instructions are delivered: users can choose voice-guided directions or rely on the simple and intuitive interface, even from a few meters away.",
    process: "The app utilizes Google's Mediapipe framework for real-time body movement tracking, enabling precise motion analysis during exercises. Users are guided to position their devices so the camera captures their full body while performing the exercises. The application was developed with SvelteKit and Vite, offering fast and reactive user interfaces. For development purposes, ngrok is used to create secure tunnels between local machines and public URLs, facilitating easy demonstration of the app.",
    result: "ReHub empowers patients to take control of their rehabilitation journey with greater independence and flexibility. The automatic tracking of exercises and visual progress charts help maintain motivation and encourage consistent practice. By providing personalized exercise plans and an intuitive user interface, the app adapts to individual needs, ensuring a smooth recovery experience. ReHub combines technical precision and user-centered design to make rehabilitation accessible and engaging for everyone..",
    images: ["/r2.png", "/rehub3.png", "/rehub2.png"] // Use your own image paths here
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
