<script lang="ts">
  import "./Projects.scss";
  import { onMount } from 'svelte';

  const projects = [
    { slug: "kuren",                title: "KUREN",                image: "/k1.png", category: "App Design · UX" },
    { slug: "rehub",                title: "ReHub",                image: "/r2.png", category: "App Design · Development" },
    { slug: "aeroom",               title: "aeroom",               image: "/a3.png", category: "IoT · Web App" },
    { slug: "varroa",               title: "Varroa",               image: "/v4.png", category: "UX Research · Prototyping" },
    { slug: "simplechat",           title: "SimpleChat",           image: "/s5.png", category: "User Research · Figma" },
    { slug: "db-navigator-concept", title: "DB Navigator Concept", image: "/d6.png", category: "Poster Design · Figma" }
  ];

  let currentIndex: number = 0;
  let autoPlayTimer: ReturnType<typeof setInterval> | undefined;
  let transitioning: boolean = false;

  function go(index: number): void {
    if (transitioning) return;
    transitioning = true;
    currentIndex = ((index % projects.length) + projects.length) % projects.length;
    setTimeout(() => { transitioning = false; }, 450);
  }

  function next(): void { go(currentIndex + 1); resetTimer(); }
  function prev(): void { go(currentIndex - 1); resetTimer(); }

  function resetTimer(): void {
    clearInterval(autoPlayTimer);
    autoPlayTimer = setInterval(() => go(currentIndex + 1), 4500);
  }

  onMount(() => {
    resetTimer();
    return () => clearInterval(autoPlayTimer);
  });

  $: prevIndex = ((currentIndex - 1) + projects.length) % projects.length;
  $: nextIndex = (currentIndex + 1) % projects.length;
</script>

<section class="projects" id="projects">
  <div class="projects-header">
    <span class="section-tag">Work</span>
    <h2>Selected Projects</h2>
  </div>

  <div class="carousel-wrap">
    <button class="carousel-arrow arrow-prev" on:click={prev} aria-label="Previous project">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 18 9 12 15 6"/>
      </svg>
    </button>

    <div class="carousel-stage">
      <!-- Side cards as buttons for accessibility -->
      <button class="carousel-card card-side card-prev" on:click={prev} aria-label="Go to previous project">
        <img src={projects[prevIndex].image} alt={projects[prevIndex].title} />
      </button>

      <div class="carousel-card card-center">
        <div class="card-img">
          <img src={projects[currentIndex].image} alt={projects[currentIndex].title} />
        </div>
        <div class="card-body">
          <span class="card-category">{projects[currentIndex].category}</span>
          <h3>{projects[currentIndex].title}</h3>
          <a href="/{projects[currentIndex].slug}" class="card-cta">
            View Project
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>
      </div>

      <button class="carousel-card card-side card-next" on:click={next} aria-label="Go to next project">
        <img src={projects[nextIndex].image} alt={projects[nextIndex].title} />
      </button>
    </div>

    <button class="carousel-arrow arrow-next" on:click={next} aria-label="Next project">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="9 18 15 12 9 6"/>
      </svg>
    </button>
  </div>

  <div class="carousel-dots" role="tablist">
    {#each projects as _, i}
      <button
        class="dot"
        class:active={i === currentIndex}
        on:click={() => { go(i); resetTimer(); }}
        aria-label="Go to project {i + 1}"
        role="tab"
        aria-selected={i === currentIndex}
      ></button>
    {/each}
  </div>
</section>