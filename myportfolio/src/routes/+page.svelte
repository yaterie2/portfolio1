<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import Navbar from '../components/Navbar/Navbar.svelte';
  import Main from '../components/Main/Main.svelte';
  import '../styles/global.scss';

  onMount(() => {
    if (!browser) return;

    // Hash aus URL entfernen ohne Seitenreload und ohne neuen History-Eintrag
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname);
    }

    // sessionStorage-Flag auswerten (kommt von Projektseiten Back-Link)
    const target = sessionStorage.getItem('scrollTo');
    if (target) {
      sessionStorage.removeItem('scrollTo');
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  });
</script>

<Navbar />
<Main />