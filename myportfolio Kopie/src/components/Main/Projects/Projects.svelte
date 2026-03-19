<script>
  import "./Projects.scss";

  // const projects = [
  //   { slug: "kuren", title: "KUREN", image: "/k1.png" },
  //   { slug: "rehub", title: "ReHub", image: "/r2.png" },
  //   { slug: "aeroom", title: "aeroom", image: "/a3.png" },
  //   { slug: "varroa", title: "Varroa", image: "/v4.png" },
  //   { slug: "simplechat", title: "SimpleChat", image: "/s5.png" },
  //   { slug: "db-navigator-concept", title: "DB Navigator Concept", image: "/d6.png" }
  // ];
</script>

<section class="projects" id="projects">
  <h2>Projects</h2>
  <div class="projects-bubble-wrapper" style="--quantity: 6">
    {#each [
      { img: "/k1.png", name: "KUREN", link: "/kuren" },
      { img: "/r2.png", name: "ReHub", link: "/rehub" },
      { img: "/a3.png", name: "aeroom", link: "/aeroom" },
      { img: "/v4.png", name: "Varroa", link: "/varroa" },
      { img: "/s5.png", name: "SimpleChat", link: "/simplechat" },
      { img: "/d6.png", name: "DB Navigator Concept", link: "/db-navigator-concept" }
    ] as project, index}
    {console.log("Index:", index, "Position:", index + 1)}
      <div class="project-bubble bubble-{index + 1}" style="--position: {index + 1}">
        <img src={project.img} alt={project.name} />
        <div class="bubble-content">
          <p>{project.name}</p>
          <a href={project.link}><button>View Details</button></a>
        </div>
      </div>
    {/each}
  </div>
</section>
