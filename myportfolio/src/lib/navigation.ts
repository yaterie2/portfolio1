/**
 * ─── NAVIGATIONS-REGELN ───────────────────────────────────────────────────
 * NIEMALS <a href="#section-id"> — das schreibt den Hash in die URL.
 *
 * 1. Gleiche Seite:  <button on:click={() => scrollToSection('section-id')}>
 * 2. Von Unterseite: <button on:click={() => goHomeAndScrollTo('section-id')}>
 * 3. Extern/Route:   <a href="https://..."> oder <a href="/kuren">  ← ok
 * ─────────────────────────────────────────────────────────────────────────
 */

export function scrollToSection(id: string): void {
	const snapFn = (window as unknown as Record<string, unknown>)['snapToSection'] as
		| ((id: string) => void)
		| undefined;
	if (snapFn) {
		snapFn(id);
	} else {
		// Fallback vor Mount oder Mobile
		if (id === '__top') {
			window.scrollTo({ top: 0, behavior: 'smooth' });
			return;
		}
		const el = document.getElementById(id);
		if (el) el.scrollIntoView({ behavior: 'smooth' });
	}
}

export function goHomeAndScrollTo(sectionId: string): void {
	sessionStorage.setItem('scrollTo', sectionId);
	window.location.href = '/';
}
