<script>
	import { name } from '$lib/info.js';
	import ArrowLeft from '$lib/components/ArrowLeft.svelte';
	import ArrowRight from '$lib/components/ArrowRight.svelte';
	import PostsList from '$lib/components/PostsList.svelte';

	export let data;

	$: isFirstPage = data.page === 1;
	$: hasNextPage = data.posts[data.posts.length - 1]?.previous;
</script>

<svelte:head>
	<title>{name} | Posts</title>
</svelte:head>

<div class="flex flex-col flex-grow">
	<header class="pt-4">
		<h1 class="text-2x1 font-bold tracking-tight sm:text-4x1">
			Writing about my journey into healthier eating choices and whatever else I might feel like I
			suppose
		</h1>
		<p class="mt-6">
			All of my incohearent ramblings for the world to see.... Um maybe this was a bad idea...
		</p>
	</header>

	<div class="mt-16 sm:mt-20">
		<PostsList posts={data.posts} />
	</div>

	<!-- Paginate that stuff -->

	<div class="flex items-center justify-between pt-16 pb-8">
		{#if !isFirstPage}
			<a href={`/posts/${data.page - 1}`} data-sveltekit-prefetch>
				<ArrowLeft class="w-4 h-4" />
				Previous
			</a>
		{:else}
			<div />
		{/if}

		{#if hasNextPage}
			<a href={`/posts/${data.page + 1}`} data-sveltekit-prefetch>
				Next <ArrowRight class="w-4 h-4" />
			</a>
		{/if}
	</div>
</div>

<style>
	a {
		@apply flex items-center gap-2 font-medium text-zinc-700;
	}
	:global(.dark) a {
		@apply text-zinc-300;
	}
</style>
