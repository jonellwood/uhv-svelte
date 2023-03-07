<script>
	import Logo from './logo.svelte';
	import MoonIcon from 'heroicons-svelte/solid/MoonIcon.svelte';
	import SunIcon from 'heroicons-svelte/solid/SunIcon.svelte';
	import { browser } from '$app/environment';
	let isDarkMode = browser
		? Boolean(document.documentElement.classList.contains('dark'))
		: true;

	function disableTransitionsTemporarily() {
		document.documentElement.classList.add('[&_*]:transition-none');
		window.setTimeout(() => {
			document.documentElement.classList.remove('[&_*]:transition:none');
		}, 0);
	}
</script>

<div class="nav">
	<p><a href="/posts">Blog</a></p>
	<p><a href="/weight">Weight</a></p>
	<a href="/"><Logo /></a>
	<p><a href="/eatings">Eating</a></p>
	<p><a href="/workouts">Activity</a></p>
	<p>
		<button
			type="button"
			role="switch"
			aria-label="Toggle Dark Mode"
			aria-checked={isDarkMode}
			class="w-5 h-5 sm:h-8 sm:w-8 sm:p-1"
			on:click={() => {
				isDarkMode = !isDarkMode;
				localStorage.setItem('isDarkMode', isDarkMode.toString());

				disableTransitionsTemporarily();

				if (isDarkMode) {
					document.querySelector('html').classList.add('dark');
				} else {
					document.querySelector('html').classList.remove('dark');
				}
			}}
		>
			<MoonIcon class="hidden text-green-500 dark:block" />
			<SunIcon class="block text-green-400 dark:hidden" />
		</button>
	</p>
</div>

<style>
	@font-face {
		font-family: Rubik;
		src: url('../../../fonts/Rubik/Rubik-VariableFont_wght.ttf');
	}
	.nav {
		font-family: Rubik;
		/* width: 100vw; */
		max-width: 1080px;
		margin-top: 0;
		margin-left: auto;
		margin-right: auto;
		padding-left: 1px;
		padding-right: 1px;
		display: grid;
		grid-template-columns: 1fr 1fr 5fr 1fr 1fr 1fr;
		background-color: #1c1626;
		color: bisque;
		justify-content: center;
		justify-items: center;
	}
	.nav p {
		align-self: center;
		font-size: 1.75em;
	}
</style>
