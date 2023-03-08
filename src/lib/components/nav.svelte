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

<div class="nav" id="nav">
	<div class="left-side">
		<p><a href="/posts">Blog</a></p>
		<p><a href="/weight">Weight</a></p>
	</div>
	<a href="/"><Logo /></a>
	<div class="right-side">
		<p><a href="/eatings">Eating</a></p>
		<p><a href="/workouts">Activity</a></p>
	</div>
	<p class="hidden"><a href="/meals">OldMeals</a></p>
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
					document.getElementById('nav').classList.add('dark');
				} else {
					document.querySelector('html').classList.remove('dark');
					document.getElementById('nav').classList.remove('dark');
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
		/* background-color: antiquewhite; */
		font-family: Rubik;
		/* width: 100vw; */
		max-width: 1080px;
		margin-top: 0;
		margin-left: auto;
		margin-right: auto;
		padding-left: 1px;
		padding-right: 1px;
		display: grid;
		/* grid-template-columns: 2fr 5fr 2fr 1fr; */
		grid-template-columns: 20% 55% 20% 5%;
		color: bisque;
		justify-content: center;
		justify-items: center;
	}

	.nav p {
		align-self: center;
		font-size: 1.75em;
	}
	.hidden {
		display: none;
	}

	.left-side {
		display: grid;
		gap: 20px;
		/* margin-left: 50px; */
		margin-top: auto;
		margin-bottom: auto;
		justify-content: center;
	}
	.right-side {
		display: grid;
		gap: 20px;
		/* margin-right: 50px; */
		margin-top: auto;
		margin-bottom: auto;
		justify-content: center;
	}
</style>
