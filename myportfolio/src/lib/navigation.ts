import { browser } from '$app/environment';

/**
 * Scrollt zu einem Element per ID, ohne den Hash in die URL zu schreiben.
 */
export function scrollToSection(id: string): void {
	if (!browser) return;
	const el = document.getElementById(id);
	if (el) {
		el.scrollIntoView({ behavior: 'smooth' });
	}
}

/**
 * Navigiert zur Hauptseite und scrollt nach dem Laden zu einem Abschnitt.
 * Nutzt sessionStorage + window.location.href damit die URL sauber bleibt.
 */
export function goHomeAndScrollTo(sectionId: string): void {
	if (!browser) return;
	sessionStorage.setItem('scrollTo', sectionId);
	// window.location.href statt goto() — SvelteKit's goto() fügt intern
	// den Hash wieder hinzu. Ein echter Seitenaufruf umgeht das komplett.
	window.location.href = '/';
}
