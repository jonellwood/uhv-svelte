<script>
	import MealDate from './MealDate.svelte';
	import MealDescription from './MealDescription.svelte';

	export let meals;
	// console.log(meals);
</script>

<div
	class="flex flex-col gap-16 md-border01 md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
>
	<!-- {#each meals as meal}
		<article class="grid items-start grid-cols-4 gap-8">
			<MealDate class="flex-col hidden md:flex text-sm" {meal} />

			<div class="col-span-4 md:col-span-3">
				<p>{meal.description.html}</p>
				<hr />
				<p>- <b> Estimated {meal.calories} calories</b></p>
			</div>
		</article>
	{/each} -->
	{#each meals as meal (meal.id)}
		<article class="grid items-start grid-cols-4 gap-8">
			<MealDate class="flex-col hidden md:flex text-sm" {meal} />

			<div class="col-span-4 md:col-span-3">
				<p>{meal.description.html}</p>
				<hr />
				<p>- <b> Estimated {meal.calories} calories</b></p>
			</div>
		</article>
	{/each}
</div>

<style>
	article {
		border-top: 1px solid black;
		padding-top: 5px;
	}
</style>
