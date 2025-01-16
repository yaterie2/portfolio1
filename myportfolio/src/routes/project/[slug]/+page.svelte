<script context="module" lang="ts">
  import { error } from '@sveltejs/kit';

  // Hardcoded project data
  const projects = [
    {
      slug: "project1",
      title: "KUREN",
      idea: "This project explores simplifying user workflows.",
      process: "Research, wireframing, and iterative prototyping.",
      result: "A seamless, user-friendly application.",
      images: ["/image1.png", "/image2.png"]
    },
    {
      slug: "project2",
      title: "ReHub",
      idea: "This project focuses on rehabilitation workflows.",
      process: "Data analysis, design sprints, and testing.",
      result: "An app improving accessibility for patients.",
      images: ["/image3.png", "/image4.png"]
    }
  ];

  // Load function to filter the project based on slug
  export async function load({ params }: { params: { slug: string } }) {
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
      throw error(404, 'Project not found');
    }

    return { project };
  }
</script>

<script lang="ts">
  export let project;

  const { title, idea, process, result, images } = project;
</script>

<section class="project-page">
  <a href="/" class="back-link">Back to Projects</a>
  <h1 class="project-title">{title}</h1>

  <div class="project-description">
    <h2>Idea</h2>
    <p>{idea}</p>

    <h2>Process</h2>
    <p>{process}</p>

    <h2>Result</h2>
    <p>{result}</p>
  </div>

  <div class="project-images">
    {#each images as image}
      <img src={image} alt="Project Image" class="project-image" />
    {/each}
  </div>
</section>

<style lang="scss">
  .project-page {
    display: flex;
    flex-direction: column;
    margin: 4rem auto;
    max-width: 800px;
    gap: 2rem;
  }

  .back-link {
    display: block;
    margin-bottom: 2rem;
    font-size: 1.2rem;
    color: #5FF4FF;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .project-title {
    font-size: 3rem;
    margin-bottom: 2rem;
    color: #79FF5F;
  }

  .project-description h2 {
    font-size: 1.8rem;
    margin-top: 1.5rem;
    color: #5FF4FF;
  }

  .project-description p {
    font-size: 1.2rem;
    margin-top: 0.5rem;
    color: #F2EFF5;
  }

  .project-images img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
    margin-top: 1rem;
  }
</style>
