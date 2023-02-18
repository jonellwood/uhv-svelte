<script>
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import Card from './Card.svelte';

	export let post;

	let elements = [];
	let headings = post.headings;

	onMount(() => {
		updateHeadings();
		setActiveHeading();
	});
	let activeHeading = headings[0];
	let scrollY;

	function updateHeadings() {
		headings = post.headings;

		if (browser) {
			elements = headings.map((heading) => {
				return document.getElementById(heading.id);
			});
		}
	}
	function setActiveHeading() {
		scrollY = window.scrollY;

		const visibleIndex =
			elements.findIndex((element) => element.offsetTop + element.clientHeight > scrollY) - 1;

		activeHeading = headings[visibleIndex];

		const pageHeight = document.body.scrollHeight;
		const scrollProgress = (scrollY + window.innerHeight) / pageHeight;

		if (!activeHeading) {
			if (scrollProgress > 0.5) {
				activeHeading = headings[headings.length - 1];
			} else {
				activeHeading = headings[0];
			}
		}
	}
</script>

<svelte:window on:scroll={setActiveHeading} />

<Card>
	<slot slot="description">
		<ul class="flex flex-col gap-2">
			{#each headings as heading}
				<li
					class="pl-2 transition-colors border-green-500 heading text-zinc-500 dark:texct-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-100"
					class:active={activeHeading === heading}
					style={`--depth: ${
						// h1 and h2 are the same depth since h1 will only be used for this page
						Math.max(0, heading.depth - 1)
					}`}
				>
					<a href={`#${heading.id}`}>{heading.value}</a>
				</li>
			{/each}
		</ul>
	</slot>
</Card>

<style lang="postcss">
	.heading {
		padding-left: calc(var(--depth, 0) * 0.35rem);
	}
	.active {
		@apply font-medium text-slate-900 border-l-2 -ml-[2px];
	}
	/* dark: modifier is a no-no using @apply */
	:global(.dark) .active {
		@apply text-slate-100;
	}
</style>
