<script>
	import MealCard from './MealCard.svelte';
	import ArrowRight from './ArrowRight.svelte';

	export let meal;
</script>

<MealCard data-sveltekit-prefetch>
	<slot slot="eyebrow" name="eyebrow" />
	<slot slot="title">{meal.title}</slot>
	<div slot="description" class="prose dark:prose-invert">
		{@html meal.description.html}
	</div>
	<!-- <div slot="actions">
		<div class="flex items-center text-green-500">
			<span class="text-sm font-medium">See More</span>
			<ArrowRight class="w-4 h-4 ml-1" />
		</div>
	</div> -->
</MealCard>

<style>
	.prose > :global(p) {
		margin-top: 0;
		margin-bottom: 0;
	}
</style>
