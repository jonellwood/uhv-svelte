<script>
	import { name } from '$lib/info.js';
	import MealsList from '$lib/components/MealsList.svelte';
	export let data;
</script>

<svelte:head>
	<title>{name} | Meals</title>
</svelte:head>

<div class="flex flex-col flex-grow">
	<header class="pt-4">
		<h1 class="text-4x1 font-bold tracking-tight sm:text-2x1">
			Attempt to log my eating for each meal of the day. The calories are my
			best estimation and while I am sure they are not 100% accurate- I can see
			value in using the caloric values for tracking trends.
		</h1>
	</header>
	<div class="mt-16 sm:mt-20">
		<MealsList meals={data.meals} />
	</div>
</div>
