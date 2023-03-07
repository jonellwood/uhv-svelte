<script>
	export let data;
</script>

<h4>
	This is my attempt to log my eating for each meal of the day. The calories are
	my best estimation and while I am sure they are not 100% accurate- I can see
	value in using the caloric values for tracking trends.
</h4>
<div class="container">
	{#if data.meals && data.meals.length}
		{#each data.meals as meal}
			<ul class="meal-list">
				<li class="type">
					<b>{meal.name}</b> - {new Date(meal.date).toLocaleDateString('en-US')}
				</li>
				<li>
					<b>Time:</b>
					{new Date(meal.date).toLocaleString('en-US', {
						hour: '2-digit',
						minute: '2-digit',
					})}
				</li>
				<li>
					<b>Estimated Calories: </b>
					{meal.calories}
				</li>
				<li>{meal.description}</li>
				{#if meal.image}
					<li>
						<img
							src="https://cdn.sanity.io/images/u4x6qbfi/production/cd0518365b64ec87c3e3ff5f281c9331b00a383d-3024x4032.jpg?h=200"
							alt="..."
						/>
					</li>
				{/if}
			</ul>
		{/each}
	{:else}
		<p>No meals found</p>
	{/if}
</div>

<!-- this block renders the JSON response from API
{#if data.meals && data.meals.length}
	<pre>
    {JSON.stringify(data.meals, null, 2)}
</pre>
{:else}
	<p>YOu data will show up here once you have done everything correctly</p>
{/if} -->
<style>
	.meal-list {
		margin-top: 20px;
		/* border-bottom: 2px solid hotpink; */
		border-bottom: 2px solid orange;
		border-left: 2px solid orange;
		width: 450px;
		height: 450px;
		padding-left: 10px;
		padding-bottom: 10px;
		padding-top: 10px;
		box-shadow: -2px 2px 17px 1px rgba(255, 165, 0, 0.55);
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
		grid-template-columns: 1fr;
		gap: 10px;
		width: 900px;
	}
</style>
