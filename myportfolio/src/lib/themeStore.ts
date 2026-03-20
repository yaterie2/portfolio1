import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type ThemeMode = 'auto' | 'light' | 'dark' | 'sunset';
export type ResolvedTheme = 'dark' | 'light' | 'sunset';

// ─── SONNENAUFGANG / SONNENUNTERGANG ──────────────────
// Berechnung nach der astronomischen Formel (kein API-Call nötig)
function getSunTimes(lat: number, lng: number): { rise: number; set: number } {
	const now = new Date();
	const dayOfYear = Math.floor(
		(now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / 86_400_000
	);

	const zenith = 90.833;
	const toRad = (d: number) => (d * Math.PI) / 180;
	const toDeg = (r: number) => (r * 180) / Math.PI;

	// Sonnenaufgang
	const lonHour = lng / 15;

	function calcTime(rising: boolean): number {
		const t = rising ? dayOfYear + (6 - lonHour) / 24 : dayOfYear + (18 - lonHour) / 24;

		const M = 0.9856 * t - 3.289;
		let L = M + 1.916 * Math.sin(toRad(M)) + 0.02 * Math.sin(toRad(2 * M)) + 282.634;
		L = ((L % 360) + 360) % 360;

		let RA = toDeg(Math.atan(0.91764 * Math.tan(toRad(L))));
		RA = ((RA % 360) + 360) % 360;

		const Lquadrant = Math.floor(L / 90) * 90;
		const RAquadrant = Math.floor(RA / 90) * 90;
		RA = RA + (Lquadrant - RAquadrant);
		RA = RA / 15;

		const sinDec = 0.39782 * Math.sin(toRad(L));
		const cosDec = Math.cos(Math.asin(sinDec));
		const cosH =
			(Math.cos(toRad(zenith)) - sinDec * Math.sin(toRad(lat))) / (cosDec * Math.cos(toRad(lat)));

		if (cosH > 1 || cosH < -1) return rising ? 6 : 18; // Fallback

		const H = rising ? 360 - toDeg(Math.acos(cosH)) : toDeg(Math.acos(cosH));

		const T = H / 15 + RA - 0.06571 * t - 6.622;
		const UT = (((T - lonHour) % 24) + 24) % 24;
		return UT + now.getTimezoneOffset() / -60; // Lokale Zeit
	}

	return {
		rise: calcTime(true),
		set: calcTime(false)
	};
}

// ─── THEME AUFLÖSUNG ──────────────────────────────────
let cachedSunset: number | null = null;
let cachedSunrise: number | null = null;

function getTimeBasedTheme(): ResolvedTheme {
	const hour = new Date().getHours() + new Date().getMinutes() / 60;
	const sunset = cachedSunset ?? 19;
	const sunrise = cachedSunrise ?? 7;
	const sunsetEnd = sunset + 1.5; // Sonnenuntergang dauert ~90 Min

	if (hour >= sunset && hour < sunsetEnd) return 'sunset';
	if (hour >= sunrise && hour < sunset) return 'light';
	return 'dark';
}

export function resolveTheme(mode: ThemeMode): ResolvedTheme {
	if (mode === 'auto') return getTimeBasedTheme();
	if (mode === 'light') return 'light';
	if (mode === 'sunset') return 'sunset';
	return 'dark';
}

function applyTheme(theme: ResolvedTheme) {
	if (!browser) return;
	document.body.setAttribute('data-theme', theme);
}

// ─── STORE INITIALISIERUNG ────────────────────────────
const storedMode = browser
	? ((localStorage.getItem('themeMode') as ThemeMode | null) ?? 'auto')
	: 'auto';

export const themeMode = writable<ThemeMode>(storedMode);

if (browser) {
	// Geolocation abrufen und Sonnenzeiten berechnen
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
			(pos) => {
				const times = getSunTimes(pos.coords.latitude, pos.coords.longitude);
				cachedSunrise = times.rise;
				cachedSunset = times.set;
				// Theme neu auflösen mit echten Zeiten
				themeMode.update((m) => {
					applyTheme(resolveTheme(m));
					return m;
				});
			},
			() => {
				// Fallback: Stuttgart (~48.8°N, ~9.2°E)
				const times = getSunTimes(48.8, 9.2);
				cachedSunrise = times.rise;
				cachedSunset = times.set;
				themeMode.update((m) => {
					applyTheme(resolveTheme(m));
					return m;
				});
			}
		);
	}

	// Initial theme setzen
	applyTheme(resolveTheme(storedMode));

	themeMode.subscribe((mode) => {
		localStorage.setItem('themeMode', mode);
		applyTheme(resolveTheme(mode));
	});

	// Jede Minute neu prüfen (für Auto-Modus)
	setInterval(() => {
		themeMode.update((mode) => {
			if (mode === 'auto') applyTheme(resolveTheme('auto'));
			return mode;
		});
	}, 60_000);
}
