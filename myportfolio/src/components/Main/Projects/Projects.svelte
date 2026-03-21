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

  // ── DESKTOP KARUSSELL ──────────────────────────────────
  let currentIndex = 0;
  let autoPlayTimer:  ReturnType<typeof setInterval>  | undefined;
  let autoPauseTimer: ReturnType<typeof setTimeout>   | undefined;
  let transitioning = false;

  function goDesktop(index: number): void {
    currentIndex = ((index % projects.length) + projects.length) % projects.length;
  }

  function startDesktopTimer(): void {
    clearInterval(autoPlayTimer);
    autoPlayTimer = setInterval(() => {
      currentIndex = ((currentIndex + 1) % projects.length + projects.length) % projects.length;
    }, 4500);
  }

  // Stoppt Timer, wartet 3s, startet dann neu
  function pauseDesktopThenResume(): void {
    clearInterval(autoPlayTimer);
    clearTimeout(autoPauseTimer);
    autoPlayTimer = undefined;
    autoPauseTimer = setTimeout(() => startDesktopTimer(), 3000);
  }

  function next(): void {
    if (transitioning) return;
    transitioning = true;
    goDesktop(currentIndex + 1);
    pauseDesktopThenResume();
    setTimeout(() => { transitioning = false; }, 450);
  }

  function prev(): void {
    if (transitioning) return;
    transitioning = true;
    goDesktop(currentIndex - 1);
    pauseDesktopThenResume();
    setTimeout(() => { transitioning = false; }, 450);
  }

  function goToDesktop(i: number): void {
    goDesktop(i);
    pauseDesktopThenResume();
  }

  // ── MOBILE SLIDER ─────────────────────────────────────
  let sliderEl: HTMLElement;
  let mobileIndex = 0;
  let mobileTimer:      ReturnType<typeof setInterval> | undefined;
  let mobilePauseTimer: ReturnType<typeof setTimeout>  | undefined;
  let touchStartX = 0;
  let isDragging  = false;

  function startMobileTimer(): void {
    clearInterval(mobileTimer);
    mobileTimer = setInterval(() => mobileGoTo(mobileIndex + 1), 4500);
  }

  function pauseMobileThenResume(): void {
    clearInterval(mobileTimer);
    clearTimeout(mobilePauseTimer);
    mobileTimer = undefined;
    mobilePauseTimer = setTimeout(() => startMobileTimer(), 3000);
  }

  function mobileGoTo(index: number): void {
    mobileIndex = ((index % projects.length) + projects.length) % projects.length;
    scrollSlider(mobileIndex);
  }

  function scrollSlider(index: number): void {
    if (!sliderEl) return;
    const card = sliderEl.querySelector('.mobile-card') as HTMLElement | null;
    if (!card) return;
    const cardWidth = card.offsetWidth + 14;
    sliderEl.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
  }

  function handleTouchStart(e: TouchEvent): void {
    touchStartX = e.touches[0].clientX;
    isDragging  = true;
    // Timer sofort stoppen — Pause beginnt nach touchend
    clearInterval(mobileTimer);
    clearTimeout(mobilePauseTimer);
  }

  function handleTouchEnd(e: TouchEvent): void {
    if (!isDragging) return;
    isDragging = false;
    const delta = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) {
      mobileGoTo(delta > 0 ? mobileIndex + 1 : mobileIndex - 1);
    } else {
      scrollSlider(mobileIndex);
    }
    pauseMobileThenResume(); // 3s warten, dann Autoscroll wieder
  }

  function handleSliderScroll(): void {
    if (!sliderEl || isDragging) return;
    const card = sliderEl.querySelector('.mobile-card') as HTMLElement | null;
    if (!card) return;
    mobileIndex = Math.round(sliderEl.scrollLeft / (card.offsetWidth + 14));
  }

  onMount(() => {
    startDesktopTimer();
    startMobileTimer();
    return () => {
      clearInterval(autoPlayTimer);
      clearTimeout(autoPauseTimer);
      clearInterval(mobileTimer);
      clearTimeout(mobilePauseTimer);
    };
  });

  $: prevIndex = ((currentIndex - 1) + projects.length) % projects.length;
  $: nextIndex = (currentIndex + 1) % projects.length;
</script>

<section class="projects" id="projects">
  <div class="projects-header">
    <span class="section-tag">Work</span>
    <h2>Selected Projects</h2>
  </div>

  <!-- ── DESKTOP KARUSSELL ── -->
  <div class="carousel-wrap">
    <button class="carousel-arrow" on:click={prev} aria-label="Previous project">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 18 9 12 15 6"/>
      </svg>
    </button>

    <div class="carousel-stage">
      <button class="carousel-card card-side" on:click={prev} aria-label="Previous">
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

      <button class="carousel-card card-side" on:click={next} aria-label="Next">
        <img src={projects[nextIndex].image} alt={projects[nextIndex].title} />
      </button>
    </div>

    <button class="carousel-arrow" on:click={next} aria-label="Next project">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="9 18 15 12 9 6"/>
      </svg>
    </button>
  </div>

  <div class="carousel-dots desktop-dots">
    {#each projects as _, i}
      <button
        class="dot"
        class:active={i === currentIndex}
        on:click={() => goToDesktop(i)}
        aria-label="Go to project {i + 1}"
      ></button>
    {/each}
  </div>

  <!-- ── MOBILE SLIDER ── -->
  <div
    class="mobile-slider"
    bind:this={sliderEl}
    on:touchstart={handleTouchStart}
    on:touchend={handleTouchEnd}
    on:scroll={handleSliderScroll}
  >
    {#each projects as project, i}
      <a href="/{project.slug}" class="mobile-card" class:active={i === mobileIndex}>
        <div class="mobile-card-img">
          <img src={project.image} alt={project.title} />
        </div>
        <div class="mobile-card-body">
          <span class="card-category">{project.category}</span>
          <h3>{project.title}</h3>
          <span class="mobile-card-link">
            View Project
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </span>
        </div>
      </a>
    {/each}
  </div>

  <div class="carousel-dots mobile-dots">
    {#each projects as _, i}
      <button
        class="dot"
        class:active={i === mobileIndex}
        on:click={() => { mobileGoTo(i); pauseMobileThenResume(); }}
        aria-label="Go to project {i + 1}"
      ></button>
    {/each}
  </div>
</section>