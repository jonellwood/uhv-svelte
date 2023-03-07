<script>
	export let data;
</script>

<div class="container">
	{#if data.meals && data.meals.length}
		{#each data.meals as meal}
			<ul class="meal-list">
				<li class="type">
					<b>{meal.name}</b> - {new Date(meal.date).toLocaleDateString('en-US')}
				</li>
				<li>
					<b
						>Time: {new Date(meal.date).toLocaleString('en-US', {
							hour: '2-digit',
							minute: '2-digit',
						})}</b
					>
				</li>
				<li>
					<b>Estimated Calories: </b>
					{meal.calories}
				</li>
				<li>{meal.description}</li>
			</ul>
		{/each}
	{:else}
		<p>No meals found</p>
	{/if}
</div>
this block renders the JSON response from API
{#if data.meals && data.meals.length}
	<pre>
    {JSON.stringify(data.meals, null, 2)}
</pre>
{:else}
	<p>YOu data will show up here once you have done everything correctly</p>
{/if}

<style>
	.meal-list {
		margin-top: 20px;
		/* border: 1px solid hotpink; */
		width: 250px;
		height: 250px;
	}
	.type {
		text-transform: capitalize;
	}
	ul {
		display: grid;
		/* grid-template-columns: auto auto; */
		/* grid-auto-rows: auto; */
		gap: 10px;
	}
	.container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 10px;
		width: 900px;
	}
</style>
